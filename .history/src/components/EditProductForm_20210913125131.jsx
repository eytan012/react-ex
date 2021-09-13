import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
const EditProductForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {
    const data = getProduct();
    if(data){
      setProductToEdit({...productToEdit, data})
    } else{
      console.log('useeffect');
    }
  }, []);

  const getProduct = () => {
    const product = location.props.product;
    return product;
  };
  return <div></div>;
};

export default EditProductForm;
