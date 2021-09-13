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
  const RenderForm = () => (
    <div>
      <input type="text" name="name" value={productToEdit.name}/>
      <input type="text" name="brand" value={productToEdit.brand}/>
      <input type="text" name="price" value={productToEdit.name}/>
      <input type="text" name="imgUrl" value={productToEdit.name}/>

    </div>
);
  return (
    <>
      {productToEdit ? (
        <RenderForm/>
      ) : (
        <div>
          <p>Product not found..</p>
        </div>
      )}
    </>
  );
};

export default EditProductForm;
