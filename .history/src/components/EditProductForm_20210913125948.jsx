import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
const EditProductForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {}, []);

  const getProductById = async()=>{
    const req = await axios.get('http://localhost:3007/products/${id}')
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Model name"
        value={productToEdit ? productToEdit.name : ""}
      />
    </div>
  );
};

export default EditProductForm;
