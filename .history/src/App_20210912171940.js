import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';

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
      if (req.status === 200) {
        setProducts(req.data);
        setIsLoading(false);
      } else {
        setProducts([]);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err.message)
    }
  };

  const showAddModal = ()=>{
    setShowModal(!showModal);
  }

  const titleText = "List of mobile phones";
  const loadingSpinner = (
    <div className="d-flex justify-content-center mt-5 my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
  return (
    <>
      {isLoading ? loadingSpinner : (
        <div className="container-fluid">
          <h5 className="my-4 text-center">{titleText}</h5>
          <div className="addButton d-flex justify-content-end ">
            <button onClick={showAddModal} type="button" className="btn btn-info text-white">Add</button>
          </div>
          {showModal ? <AddProduct /> : null}

          <ProductsList products={products} setProducts={setProducts} />
        </div>
      )}
    </>
  )
}

export default App;
