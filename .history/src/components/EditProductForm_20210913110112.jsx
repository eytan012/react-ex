import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditProductForm = ({ products }) => {
  const { id } = useParams();
  // const location = useLocation();
  const history = useHistory();
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {
    const product = getProductById();
  }, []);

  const getProductById = () => {
    const productId = id;
    const findProd = products.find(({ id }) => id === productId);
    if (findProd) {
      setProductToEdit(findProd);
    } else {
      history.push("/");
    }
    return findProd;
  };
  const handleChange = (e) => {
    setProductToEdit({ ...productToEdit, [e.target.name]: e.target.value });
  };
  const handleSaveChanges = async () => {
    try {
    } catch (error) {}
  };
  const RenderForm = () => (
    <div>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        value={productToEdit.name}
      />
      <input
        type="text"
        onChange={handleChange}
        name="brand"
        value={productToEdit.brand}
      />
      <input
        type="text"
        onChange={handleChange}
        name="price"
        value={productToEdit.price}
      />
      <input
        type="text"
        onChange={handleChange}
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
