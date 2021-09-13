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
   
  );
};

export default AddProduct;
