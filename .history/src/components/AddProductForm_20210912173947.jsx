import React from 'react';

const AddProduct = () => {
    return (
        <div className="mt-3 row g-3 align-items-center col-12">
            <div className="row">
            <div className="col-auto">
                <input type="password" id="inputPassword6" placeholder="Model name" className="form-control" />
            </div>
            <div className="col-auto">
                <input type="password" id="inputPassword6" placeholder="Brand" className="form-control"  />
            </div>
            <div className="col-auto">
                <input type="password" id="inputPassword6" placeholder="Price" className="form-control"  />
            </div>
            </div>
        <div className="row mt-1">
                <input type="password" id="inputPassword6" placeholder="Image link" className="form-control"  />
        </div>


        </div>
    )
}

export default AddProduct
