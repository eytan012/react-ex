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

  )
  return (
    
  );
};

export default EditProductForm;
