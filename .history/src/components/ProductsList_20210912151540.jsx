import React from 'react';
import { successAlert } from '../utils/alerts';

const ProductsList = ({ products, setProducts }) => {
    const handleDelete = (item,index) => {
            const filtered = products.filter(prod=>{
                return prod.id !== item.id;
            });
            suc
            setProducts(filtered);
    }
    const handleEdit = () => {
        console.log('handleEdit:');
    }
    return (
        <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-5 g-3">
                {products ? (
                    products.map((product, index) => {
                        return (
                            <div className="col" key={product.id}>
                                <div className="card h-10">
                                    <img src={product.imgUrl} alt="product_image" className="card-img-top" loading="lazy" />
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-primary">{product.brand}</span>
                                            <span className="float-end price-hp">{product.price}</span>
                                        </div>
                                        <h5 className="card-title">{product.name.toUpperCase()}</h5>
                                        <div className="editAddButtons d-flex justify-content-between">
                                            <span onClick={()=>handleDelete(product,index)} style={{cursor:'pointer'}}><i className="fas fa-trash-alt text-danger"></i></span>
                                            <span onClick={handleEdit} style={{cursor:'pointer'}}><i className="far fa-edit text-primary"></i></span>
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
