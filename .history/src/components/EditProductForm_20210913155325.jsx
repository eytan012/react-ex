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
    <div className="row justify-content-center mt-5">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">Edit item</h2>
          </div>
          <div className="card-body">
              <div className="mb-4">
                <label className="form-label">
                  Model name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Model name"
                  onChange={(e) => {
                   handleEdit(e);
                  }}
                  value={editedProduct ? editedProduct.name : ""}
                />{" "}
              </div>
              <div className="mb-4 ">
                <label className="form-label">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  className="form-control"
                  placeholder="Brand"
                  onChange={(e) => {
                    handleEdit(e);
                  }}
                  value={editedProduct ? editedProduct.brand : ""}
                />
              </div>
              <div className="mb-4">
                <label  className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  placeholder="Price"
                  onChange={(e) => {
                    handleEdit(e);
                  }}
                  value={editedProduct ? editedProduct.price : ""}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">
                  Image link
                </label>
                <input
                  type="text"
                  name="imgUrl"
                  className="form-control"
                  placeholder="Image address"
                  onChange={(e) => {
                    handleEdit(e);
                  }}
                  value={editedProduct ? editedProduct.imgUrl : ""}
                />
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-info text-light main-bg" onClick={handleSaveChanges}
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

export default EditProductForm;
