import React from 'react'

const EditProductForm = () => {
  return (
    <div>
      
    </div>
  )
}

export default EditProductForm
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory,useLocation } from "react-router-dom";

const EditProductForm = (props) => {
  console.log('props:',props);
  const { id } = useParams();
  const location = useLocation();
  console.log('location:',location);