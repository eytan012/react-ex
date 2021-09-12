import React from 'react';

const AddProduct = () => {
    return (
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label htmlFor="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
  <div class="col-auto">
    <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>
    )
}

export default AddProduct
