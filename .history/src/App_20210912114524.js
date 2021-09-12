import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData = async ()=>{
    try{
      const req = await axios.get("http://localhost:3007/products");
      console.log(req.data.length);
      setProducts(req);
    }

  };

  return (
    <div className="container-fluid">
      App
    </div>
  );
}

export default App;
