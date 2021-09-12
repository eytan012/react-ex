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
      setProducts(req);
    } catch(err){
      console.log(err);
      alert(err.message)
    }

  };

  return (
    <div className="container-fluid">
      <ProductsList products={products} setProducts={setProducts}/>
    </div>
  );
}

export default App;
