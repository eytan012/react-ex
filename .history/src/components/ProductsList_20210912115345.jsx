import React from 'react';

const ProductsList = ({products,ProductsList})=>{
    
    const renderList = ()=>{
        return products.map((product)=>{
            return(
            <div key={product.id} className="row">
                    <div className="card card-body h-100 justify-content-center">
                        <p>{product.name}</p>
                    </div>
            </div>
            )
        })
    }
    return(
        <div>
            {renderList}
            Product page list
        </div>
    )
};

export default ProductsList;