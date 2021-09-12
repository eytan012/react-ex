import React from 'react';

const ProductsList = ({products,ProductsList})=>{
    
    const renderList = ()=>{
        return products.map((product)=>{
            return(
            <div key={product.id} className="row">
                    <div className=""></div>
            </div>
            )
        })
    }
    return(
        <div>
            Product page list
        </div>
    )
};

export default ProductsList;