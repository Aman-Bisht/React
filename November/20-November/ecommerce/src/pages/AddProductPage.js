// pages/AddProductPage.js
import React from 'react';
import AddProductForm from '../components/AddProductForm';

const AddProductPage = () => {
  const handleAddProduct = (productData) => {
    // Perform adding a new product (you need to implement this)
    console.log('Add Product:', productData);
  };

  return (
    <div>
      <h2>Add Product Page</h2>
      <AddProductForm handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default AddProductPage;
