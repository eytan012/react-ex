import React from 'react';

const ProductsList = ({products,ProductsList})=>{
    
    const renderList = ()=>{
        return products.map((product)=>{
            return(
            <div key={product.id} className="row">
                    <div className="card card-body h-100"></div>
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