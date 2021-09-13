import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
const EditProductForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const [productToEdit, setProductToEdit] = useState(null);
  useEffect(() => {

  }, []);


  return <div>

    <input type="text" name="name" value={productToEdit? productToEdit.name : ''} />

  </div>;
};

export default EditProductForm;
