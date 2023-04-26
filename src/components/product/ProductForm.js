import React from "react";
import classes from './ProductForm.module.css'

const ProductForm = props => {
    return (
      <React.Fragment>
        <form className={classes.form}>
          <label>Medicine Name</label>
          <br />
          <input type="text" id="name" />
          <br />
          <label>Description</label>
          <br />
          <input type="text" id="description" />
          <br />
          <label>Price</label>
          <br />
          <input type="number" id="price" />
          <br />
          <button>Add Product</button>
        </form>
      </React.Fragment>
    );
}

export default ProductForm