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

    const loading = ()

  };
  const titleText = "List of mobile phones";
  return (
    <>
      {isLoading ? <p>Loading..</p> : (
        <div className="container-fluid">
          <h5 className="my-4 text-center">{titleText}</h5>
          <ProductsList products={products} setProducts={setProducts} />
        </div>
      )}
    </>
  )
}

export default App;
