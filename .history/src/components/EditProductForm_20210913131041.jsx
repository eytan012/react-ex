import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
const EditProductForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {
    getProductById();
    console.log("productToEdit:", productToEdit);
  }, []);

  const getProductById = async () => {
    const req = await axios.get(`http://localhost:3007/products/${id}`);
    if (req.status === 200 || req.status === 201) {
      setProductToEdit(req.data);
    }
  };
  const handleEdit = (e)=>{
      setProductToEdit({...})
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Model name"
        onChange={(e)=>{handleEdit(e)}}
        value={productToEdit ? productToEdit.name : ""}
      />
      <button className="btn btn-primary">go home</button>
    </div>
  );
};

export default EditProductForm;
