import React from 'react';

const ProductsList = ({ products, ProductsList }) => {
console.log(products);
    const renderList = () => {
        products.data.map((product) => {
                return(

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