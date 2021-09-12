import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ProductsList from './components/ProductsList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData = async ()=>{
    try{
      const req = await axios.get("http://localhost:3007/products");
      setProducts(req.data);
    } catch(err){
      console.log(err);
      alert(err.message)
    }

  };
  const titleText = "List of mobile phones";

  return (
    <div className="container-fluid">
      <h5>{titleText}</h5>
      <ProductsList products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
