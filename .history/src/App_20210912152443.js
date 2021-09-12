import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ProductsList from './components/ProductsList';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const req = await axios.get("http://localhost:3007/products");
      setProducts(req.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err.message)
    }

  };
  
  const titleText = "List of mobile phones";
  const loadingSpinner = (
    <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
  )
  return (
    <>
      {isLoading ? loadingFunc : (
        <div className="container-fluid">
          <h5 className="my-4 text-center">{titleText}</h5>
          <ProductsList products={products} setProducts={setProducts} />
        </div>
      )}
    </>
  )
}

export default App;
