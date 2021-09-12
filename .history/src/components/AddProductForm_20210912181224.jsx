import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = ({ products, setProducts,getData }) => {
    const initialState = {
        name: '',
        brand: '',
        price: '',
        imgUrl: 'https://www.theme-junkie.com/wp-content/uploads/tumblr-mobile-theme-660x440.png'
    }
    const [productItem, setProductItem] = useState(initialState)
    const handleChange = (e) => {
        setProductItem({ ...productItem, [e.target.name]: e.target.value })
    }
    const save = async () => {
        try {
            const item = {...productItem, id:Date.now()}
            const req = await axios.post('http://localhost:3007/products',item)
            if(req.status === 200  201){
               setProductItem([...products, item])
            }
            console.log(req.status);
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="mt-3 row g-3 align-items-center col-12">
            <div className="col-auto">
                <input type="text" name="name" onChange={(e) => handleChange(e)} placeholder="Model name" className="form-control" />
            </div>
            <div className="col-auto">
                <input type="text" name="brand" onChange={(e) => handleChange(e)} placeholder="Brand" className="form-control" />
            </div>
            <div className="col-auto">
                <input type="text" name="price" onChange={(e) => handleChange(e)} placeholder="Price" className="form-control" />
            </div>
            <div className="col-auto">
                <input type="text" name="imgUrl" onChange={(e) => handleChange(e)} placeholder="Image link" className="form-control" />
            </div>
            <div className="col-auto">
                <button type="button" onClick={save} className="btn btn-primary form-control">Save</button>
            </div>
        </div>
    )
}

export default AddProduct
