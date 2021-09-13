import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditProductForm = ({ products }) => {
  const { id } = useParams();
  // const location = useLocation();
  const history = useHistory();
  const [productToEdit, setProductToEdit] = useState({});
  useEffect(() => {
    const product = getProductById();
  }, []);

  const getProductById = async() => {
    const productId = id;
    try {
      const req = await axios.get(`http://localhost:3007/products/${productId}`)
      console.log(req.data);
      setProductToEdit(req.data)
    } catch (error) {
      console.log('error getProductById:',error);
    }
  };
  const handleChange = (e) => {
    setProductToEdit({ ...productToEdit, [e.target.name]: e.target.value });
  };
  const handleSaveChanges = async () => {
    try {
      const req = await axios.put(`http://localhost:3007/products/${id}`,productToEdit);
      console.log(req);
      if(req.status === 200 || req.status === 201) history.push('/')
    } catch (error) {
      console.log(error);
    }
  };
  const RenderForm = () => (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        name="name"
        value={productToEdit.name}
      />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        name="brand"
        value={productToEdit.brand}
      />
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        name="price"
        value={productToEdit.price}
      />
      <input
        type="text"
        onChange={(e) => handleChange(e) }
        name="imgUrl"
        value={productToEdit.imgUrl}
      />
      <button onClick={handleSaveChanges}>Save changes</button>
    </div>
  );
  return (
    <>
      {productToEdit ? (
        <RenderForm />
      ) : (
        <div>
          <p>Product not found..</p>
        </div>
      )}
    </>
  );
};

export default EditProductForm;
