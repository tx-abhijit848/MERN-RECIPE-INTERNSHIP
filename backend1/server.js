import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./routes/user.js";
import recipeRouter from "./routes/recipe.js";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors(
  {
    origin:true,
    methods:["GET,POST,PUT,DELETE"],
    credentials:true
  }
));

//userRouter
app.use('/backend1', userRouter);
//recipeRouter
app.use('/backend1', recipeRouter);
mongoose
  .connect(
    "mongodb+srv://abhijitnandi189:UFWmlK2z3jXSpeco@cluster0.1bdz7.mongodb.net/",
    {
      dbName: "MERN-RECIPE-INTERNSHIP",
    }
  )
  .then(() => {
    console.log("Connected to MongoDB....!");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//USERNAME=abhijitnandi189
//PASSWORD=UFWmlK2z3jXSpeco
