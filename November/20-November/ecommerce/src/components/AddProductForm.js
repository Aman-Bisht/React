// AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ handleAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform adding a new product (you need to implement this)
    handleAddProduct({ name: productName, price: productPrice });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label>
          Product Price:
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
