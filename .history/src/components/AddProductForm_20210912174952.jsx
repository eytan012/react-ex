import React, { useState } from 'react';

const AddProduct = ({ products, setProducts }) => {
    const initialState = {
        name: '',
        brand: '',
        price: '',
        url: 'https://www.theme-junkie.com/wp-content/uploads/tumblr-mobile-theme-660x440.png'
    }
    const [productItem, setProductItem] = useState(initialState)
    const handleChange = () => {
        console.log('handlechange:', productItem);
    }
    const save = () => {
        console.log('save');
    }
    return (
        <div className="mt-3 row g-3 align-items-center col-12">
            <div className="col-auto">
                <input type="text" name="name" onChange={(handleChange} placeholder="Model name" className="form-control" />
            </div>
            <div className="col-auto">
                <input type="text" name="brand" onChange={(handleChange} placeholder="Brand" className="form-control" />
            </div>
            <div className="col-auto">
                <input type="text" name="price" onChange={(handleChange} placeholder="Price" className="form-control" />
            </div>
            <div className="col-auto">
                <input type="text" name="imageUrl" onChange={(handleChange} placeholder="Image link" className="form-control" />
            </div>
            <div className="col-auto">
                <button type="button" onClick={save} className="btn btn-primary form-control">Save</button>
            </div>
        </div>
    )
}

export default AddProduct
