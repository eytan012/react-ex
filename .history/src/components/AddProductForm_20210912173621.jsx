import React from 'react';

const AddProduct = () => {
    return (
<div className="mt-3 row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">Model name</label>
  </div>
  <div className="col-auto">
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
  </div>

</div>
    )
}

export default AddProduct
