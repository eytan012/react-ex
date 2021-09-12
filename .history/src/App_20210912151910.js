import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ProductsList from './components/ProductsList';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading] = (false);
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
  return 
    {isLoading ? '' : ''}}
    
}

export default App;
<div className="container-fluid">
<h5 className="my-4 text-center">{titleText}</h5>
<ProductsList products={products} setProducts={setProducts}/>
</div>