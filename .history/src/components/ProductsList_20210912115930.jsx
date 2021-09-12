import React from 'react';

const ProductsList = ({ products, ProductsList }) => {

    return (
        <div key={product.id} className="row">
        <div className="card card-body h-100 justify-content-center">
            <p>{product.name}</p>
        </div>
    </div>
    )
};

export default ProductsList;