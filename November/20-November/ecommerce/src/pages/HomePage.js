// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products (you need to implement this)
    const fetchData = async () => {
      // Assuming fetchData is an async function that fetches products from an API
      const productsData = await fetchData();
      setProducts(productsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
