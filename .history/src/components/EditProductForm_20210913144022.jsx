import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
const EditProductForm = ({products}) => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const req = await axios.get(`http://localhost:3007/products/${id}`);
    if (req.status === 200 || req.status === 201) {
      setProductToEdit(req.data);
    }
  };
  const handleEdit = (e) => {
    setProductToEdit({ ...productToEdit, [e.target.name]: e.target.value });
  };
  const handleSaveChanges = async () => {
    try {
      const req = await axios.put(
        `http://localhost:3007/products/${id}`,
        productToEdit
      );
      if (req.status === 200 || req.status === 201) {
        const editedProduct = products.find(({id})=>{
          return productToEdit.id === id;
        });
        console.log(editedProduct);
        setProductToEdit(null);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Model name"
        onChange={(e) => {
          handleEdit(e);
        }}
        value={productToEdit ? productToEdit.name : ""}
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        onChange={(e) => {
          handleEdit(e);
        }}
        value={productToEdit ? productToEdit.brand : ""}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={(e) => {
          handleEdit(e);
        }}
        value={productToEdit ? productToEdit.price : ""}
      />
      <input
        type="text"
        name="imgUrl"
        placeholder="Image address"
        onChange={(e) => {
          handleEdit(e);
        }}
        value={productToEdit ? productToEdit.imgUrl : ""}
      />
      <button className="btn btn-info" onClick={handleSaveChanges}>
        Save changes
      </button>
    </div>
  );
};

export default EditProductForm;
