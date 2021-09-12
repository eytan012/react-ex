import React from 'react';

const ProductsList = ({products,ProductsList})=>{
    
    const renderList = ()=>{
        return products.map((product)=>
            <div key={product.id} className="row">
                    <div className="card card-body h-100 justify-content-center">
                        <p>{product.name}</p>
                    </div>
            </div>
            )
        )
    }
    console.log(renderList);
    return(
        <div>
            Product page list
        </div>
    )
};

export default ProductsList;