import React from 'react';

const ProductsList = ({ products, ProductsList }) => {
//     <div key={product.id} className="row">
//     <div className="card card-body h-100 justify-content-center">
//         <p>{product.name}</p>
//     </div>
// </div>
    return (
        <div>
<div className="container-fluid bg-trasparent my-4 p-3" style={{position:'relative'}}>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
            <div className="col">
                <div className="card h-10"> <img src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">ASUS Rog</span> <span className="float-end price-hp">12354.00€</span> </div>
                        <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                        <div className="text-center my-4"> <a href="w" className="btn btn-warning">Check offer</a> </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    )
};

export default ProductsList;