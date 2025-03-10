import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const { name, gmail, password } = req.body;

  try {
    let user = await User.findOne({ gmail });

    if (user) return res.json({ message: "User already exists" });
    const hasPass = await bcrypt.hash(password, 12);
    user = await User.create({ name, gmail, password: hasPass });
    res.json({ message: "User created successfully", user });
  } catch (error) {
    res.json({ message: "Error", error });
  }
};

export const login = async (req, res) => {
  const { gmail, password } = req.body;
  try {
    let user = await User.findOne({ gmail });
    //console.log("user is coming from login",user);
    if (!user) return res.json({ message: "User not found" });
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.json({ message: "Invalid credentials" });
    const token = jwt.sign({ userId: user._id }, "@$trer&()", {
      expiresIn: "1d",
    });
    res.json({ message: `Welcome ${user.name}`, token });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const profile = async (req,res) =>{
  res.json({user : req.user})
}
