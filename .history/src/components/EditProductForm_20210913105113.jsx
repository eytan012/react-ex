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
      console.log(productToEdit);
    } else {
      history.push("/");
    }
    return findProd;
  };
  const renderForm = () => {
    <div>
      <input type="text" name="" />
      <input type="text" />
      <input type="text" />
      <input type="text" />

    </div>
  };
  return (
    <>
      {productToEdit ? (
        <div>
          <p>product to edit</p>
        </div>
      ) : (
        <div>
          <p>Product not found..</p>
        </div>
      )}
    </>
  );
};

export default EditProductForm;
