import React,{useState} from 'react';

const AddProduct = ({products,setProducts}) => {
    const initialState = {
        name:'',
        brand:'',
        price:'',
        url:'https://www.theme-junkie.com/wp-content/uploads/tumblr-mobile-theme-660x440.png'
    }
    const [productItem, setProductItem] = useState(initialState)
    const save = ()=>{

    }
    return (
        <div className="mt-3 row g-3 align-items-center col-12">
            <div className="row">
                <div className="col-auto">
                    <input type="text" name="name" placeholder="Model name" className="form-control" />
                </div>
                <div className="col-auto">
                    <input type="text" name="brand"  placeholder="Brand" className="form-control" />
                </div>
                <div className="col-auto">
                    <input type="text" name="price" placeholder="Price" className="form-control" />
                </div>
            </div>
            <div className="col-auto">
                <input type="text" name="imageUrl"  placeholder="Image link" className="form-control" />
            </div>
            <div className="col-auto">
                <button type="button" onClick={save} class="btn btn-primary form-control">Save</button>
            </div>
        </div>
    )
}

export default AddProduct
