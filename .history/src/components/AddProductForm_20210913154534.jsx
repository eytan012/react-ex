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
        history.push('/')
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
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="Model name"
          className="form-control"
          value={productItem.name}
        />
      </div>
      <div className="col-auto">
        <input
          type="text"
          name="brand"
          onChange={(e) => handleChange(e)}
          placeholder="Brand"
          className="form-control"
          value={productItem.brand}
        />
      </div>
      <div className="col-auto">
        <input
          type="text"
          name="price"
          onChange={(e) => handleChange(e)}
          placeholder="Price"
          className="form-control"
          value={productItem.price}
        />
      </div>
      <div className="col-auto">
        <input
          type="text"
          name="imgUrl"
          onChange={(e) => handleChange(e)}
          placeholder="Image link"
          className="form-control"
          value={productItem.imgUrl}
        />
      </div>
      <div className="col-auto">
        <button
          type="button"
          onClick={save}
          className="btn btn-primary form-control"
        >
          Save
        </button>
      </div>
      </div>
    </div>
  );
};

export default AddProduct;
