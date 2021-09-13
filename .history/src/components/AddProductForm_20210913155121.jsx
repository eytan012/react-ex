import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProduct = ({ products, setProducts }) => {
  const history = useHistory();
  const initialState = {
    name: "",
    brand: "",
    price: "",
    imgUrl:
      "https://www.theme-junkie.com/wp-content/uploads/tumblr-mobile-theme-660x440.png",
  };
  const [productItem, setProductItem] = useState(initialState);
  const handleChange = (e) => {
    setProductItem({ ...productItem, [e.target.name]: e.target.value });
  };
  const resetState = () => {
    setProductItem(initialState);
  };
  const save = async () => {
    try {
      const item = { ...productItem, id: Date.now() };
      const req = await axios.post("http://localhost:3007/products", item);
      if (req.status === 200 || req.status === 201) {
        setProducts([...products, item]);
        resetState();
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">Edit item</h2>
          </div>
          <div className="card-body">
            <div className="mb-4">
              <label className="form-label">Model name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Model name"
                value={productItem.name}
              />{" "}
            </div>
            <div className="mb-4 ">
              <label className="form-label">Brand</label>
              <input
                type="text"
                name="brand"
                className="form-control"
                placeholder="Brand"
                onChange={(e) => {
                  handleEdit(e);
                }}
                value={editedProduct ? editedProduct.brand : ""}
              />{" "}
            </div>
            <div className="mb-4">
              <label className="form-label">Price</label>
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="Price"
                onChange={(e) => {
                  handleEdit(e);
                }}
                value={editedProduct ? editedProduct.price : ""}
              />{" "}
            </div>
            <div className="mb-4">
              <label className="form-label">Image link</label>
              <input
                type="text"
                name="imgUrl"
                className="form-control"
                placeholder="Image address"
                onChange={(e) => {
                  handleEdit(e);
                }}
                value={editedProduct ? editedProduct.imgUrl : ""}
              />{" "}
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="btn btn-info text-light main-bg"
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
