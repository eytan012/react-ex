import React from "react";
import ProductsList from "./ProductsList";
import { Link } from "react-router-dom";

const Home = ({ products, setProducts, isLoading, setIsLoading }) => {
  const titleText = "List of mobile phones";
  const loadingSpinner = (
    <div className="d-flex justify-content-center mt-5 my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
  return (
    <>
      {isLoading ? loadingSpinner : (
        <div className="container-fluid">
          <h5 className="my-4 text-center">{titleText}</h5>
          <div className="addButton d-flex justify-content-start">
            <Link to={"/add"}>
            <button type="button" className="btn btn-info text-white">Add</button>
            </Link>
          </div>
          <div>
          </div>
          <ProductsList products={products} setProducts={setProducts} />
        </div>
      )}
    </>
  )
};

export default Home;
