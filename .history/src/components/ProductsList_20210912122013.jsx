import React from 'react';

const ProductsList = ({ products, ProductsList }) => {
    return (
        <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {products ? (
                        products.map((product)=>{
                            return (
                                <div className="col">
                                    <div className="card h-10">
                                        <img src={product.imgUrl}  alt="product_image" className="card-img-top"/>
                                        <div className="card-body">
                                            <div className="clearfix mb-3">
                                                <span className="float-start badge rounded-pill bg-primary">{product.brand}</span>
                                                <span className="float-end price-hp">{product.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                            )
                        })
                ) : "Sorry, no products.."}

            </div>
        </div>
    )
};

export default ProductsList;

{/* <div className="col">
<div className="card h-10"> <img src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png" className="card-img-top" alt="..." />
    <div className="card-body">
        <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">ASUS Rog</span> <span className="float-end price-hp">12354.00€</span> </div>
        <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
        <div className="text-center my-4"> <a href="w" className="btn btn-warning">Check offer</a> </div>
    </div>
</div>
</div> */}