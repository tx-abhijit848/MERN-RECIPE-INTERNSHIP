import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/App_Context";

function Navbar() {
  const { isAuthenticated, setisAuthenticated, logOut } =
    useContext(AppContext);
  return (
    <>
      <div className="nav bg-dark p-2">
        <Link
          to={"/"}
          className="left"
          style={{ color: "#ff007f", textDecoration: "none" }}
        >
          <h2> RECIPE SHARING PLATFORM</h2>
        </Link>
        <div className="right">
          {isAuthenticated && (
            <>
              <Link to={"/add"} className="btn btn-primary mx-2">
                Add
              </Link>
              <Link to={"/"} className="btn btn-danger mx-2">
                profile
              </Link>
              <div className="btn btn-info mx-2" onClick={logOut}>Logout</div>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link to={"/login"} className="btn btn-primary mx-2">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-warning mx-2">
                Register
              </Link>
            </>
          )}

          <Link to={"/saved"} className="btn btn-info mx-2">
            Saved
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
