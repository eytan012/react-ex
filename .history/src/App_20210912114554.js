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
      const req = await axios.get("http://localhost:3007/prod1ucts");
      console.log(req.data.length);
      setProducts(req);
    } catch(err){
      console.log(err);
      alert(err.message)
    }

  };

  return (
    <div className="container-fluid">
      App
    </div>
  );
}

export default App;
