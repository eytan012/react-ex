import React from 'react';

const ProductsList = ({products,ProductsList})=>{
    
    const renderList = ()=>{
        return products.map((product))
    }
    return(
        <div>
            Product page list
        </div>
    )
};

export default ProductsList;