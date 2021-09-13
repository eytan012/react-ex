import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AddProductForm from "./components/AddProductForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import EditProductForm from "./components/EditProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
    console.log("use effect");
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const req = await axios.get("http://localhost:3007/products");
      if (req.status === 200) {
        setProducts(req.data);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <Router>
      <>
        <Switch>
          <Route exact path={"/"}>
            <Home
              products={products}
              setProducts={setProducts}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </Route>
          <Route path="/add">
            <AddProductForm products={products} setProducts={setProducts} />
          </Route>
          <Route path="/edit/:id">
            <EditProductForm products={products}/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
