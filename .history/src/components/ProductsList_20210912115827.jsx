import React from 'react';

const ProductsList = ({ products, ProductsList }) => {
console.log(products);
    const renderList = () => {
        products.data.map((product) => {
                return(
                    <div key={product.id} className="row">
                    <div className="card card-body h-100 justify-content-center">
                        <p>{product.name}</p>
                    </div>
                </div>
                )
        })
    }
    console.log(renderList);
    return (
        <div>
            Product page list
        </div>
    )
};

export default ProductsList;