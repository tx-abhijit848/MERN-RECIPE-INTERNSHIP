import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [gmail, setgmail] = useState("");
  const [password, setpassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await login(gmail, password);
    toast.success(result.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
        setTimeout(() => {
            navigate("/");
          },1000); 
        
      };

  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-3"
        style={{
          width: "490px",
          border: "2px solid purple",
          borderRadius: "10px",
        }}
      >
        <h2>Login</h2>
        <form
          onSubmit={loginHandler}
          style={{
            width: "425px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              onChange={(e) => setgmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="container d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary my-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
