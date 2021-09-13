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
  return (
    <div class="row justify-content-center mt-5">
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="card shadow">
        <div class="card-title text-center border-bottom">
          <h2 class="p-3">Login</h2>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-4">
              <label for="username" class="form-label">Username/Email</label>
              <input type="text" class="form-control" id="username" />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <div class="mb-4">
              <input type="checkbox" class="form-check-input" id="remember" />
              <label for="remember" class="form-label">Remember Me</label>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn text-light main-bg">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductForm;
