import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
const EditProductForm = ({ products, setProducts }) => {
  const { id } = useParams();
  const history = useHistory();
  const [editedProduct, setEditedProduct] = useState(null);
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try {
      const req = await axios.get(`http://localhost:3007/products/${id}`);
      if (req.status === 200 || req.status === 201) {
        setEditedProduct(req.data);
      }
    } catch (error) {
      console.log(error);
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
        const newList = products.map((p) => {
          if (p.id === editedProduct.id) {
            p = editedProduct;
          }
          return p;
        });
        setProducts(newList);
        setEditedProduct(null);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const RenderForm = ()=>(
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
  )
  return (  
{editedProduct ? Re}
    
  );
};

export default EditProductForm;
