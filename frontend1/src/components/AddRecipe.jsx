import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { addRecipe } = useContext(AppContext);
  const [formData, setformData] = useState({
    title: "",
    ist: "",
    ing1: "",
    ing2: "",
    ing3: "",
    ing4: "",
    qty1: "",
    qty2: "",
    qty3: "",
    qty4: "",
    imgurl: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const {
      title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgurl,
    } = formData;
    const result = await addRecipe(
      title,
      ist, 
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgurl
    );
   // console.log("addrecipe",result);
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
        <h2>Add Recipe</h2>
        <form onSubmit={onSubmitHandler}
          style={{
            width: "400px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              value={formData.title}
              onChange={onChangeHandler}
              name="title"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputEmail1" className="form-label">
              Instruction
            </label>
            <input
              value={formData.ist}
              onChange={onChangeHandler}
              name="ist"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Ing1
            </label>
            <input
              value={formData.ing1}
              onChange={onChangeHandler}
              name="ing1"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Ing2
            </label>
            <input
              value={formData.ing2}
              onChange={onChangeHandler}
              name="ing2"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Ing3
            </label>
            <input
              value={formData.ing3}
              onChange={onChangeHandler}
              name="ing3"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Ing4
            </label>
            <input
              value={formData.ing4}
              onChange={onChangeHandler}
              name="ing4"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Qty1
            </label>
            <input
              value={formData.qty1}
              onChange={onChangeHandler}
              name="qty1"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Qty2
            </label>
            <input
              value={formData.qty2}
              onChange={onChangeHandler}
              name="qty2"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Qty3
            </label>
            <input
              value={formData.qty3}
              onChange={onChangeHandler}
              name="qty3"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              Qty4
            </label>
            <input
              value={formData.qty4}
              onChange={onChangeHandler}
              name="qty4"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmFor="exampleInputPassword1" className="form-label">
              ImgUrl
            </label>
            <input
              value={formData.imgurl}
              onChange={onChangeHandler}
              name="imgurl"
              type="link"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="container d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary mt-3">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddRecipe;
