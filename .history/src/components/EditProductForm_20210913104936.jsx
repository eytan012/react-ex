import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditProductForm = ({ products }) => {
  const { id } = useParams();
  // const location = useLocation();
  const history = useHistory();
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {
   const product =  getProductById();
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
  return <>
  {productToEdit ? <div><p></p></div>}
  </>;
};

export default EditProductForm;
