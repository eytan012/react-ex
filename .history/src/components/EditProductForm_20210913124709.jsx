import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
const EditProductForm = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log("location:", location);

  useEffect(()=>{

  },[])
  return <div>

  </div>;
};

export default EditProductForm;
