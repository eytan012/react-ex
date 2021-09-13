import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
const EditProductForm = ({products}) => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [editedProduct, setEditedProduct] = useState(null);
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const req = await axios.get(`http://localhost:3007/products/${id}`);
    if (req.status === 200 || req.status === 201) {
      setEditedProduct(req.data);
    }
  };
  const handleEdit = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };
  const handleSaveChanges = async () => {
    try {
      const req = await axios.put(
        `http://localhost:3007/products/${id}`,
        editedProduct
      );
      if (req.status === 200 || req.status === 201) {
        const newProductsList = products.map((p)=>)
        // setEditedProduct(null);
        // history.push("/");
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
        value={editedProduct ? editedProduct.name : ""}
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        onChange={(e) => {
          handleEdit(e);
        }}
        value={editedProduct ? editedProduct.brand : ""}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={(e) => {
          handleEdit(e);
        }}
        value={editedProduct ? editedProduct.price : ""}
      />
      <input
        type="text"
        name="imgUrl"
        placeholder="Image address"
        onChange={(e) => {
          handleEdit(e);
        }}
        value={editedProduct ? editedProduct.imgUrl : ""}
      />
      <button className="btn btn-info" onClick={handleSaveChanges}>
        Save changes
      </button>
    </div>
  );
};

export default EditProductForm;
