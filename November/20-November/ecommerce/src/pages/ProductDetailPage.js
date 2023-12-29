// // pages/ProductDetailPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductDetail from '../components/ProductDetail';

// const ProductDetailPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details based on the id (you need to implement this)
//     const fetchData = async () => {
//       // Assuming fetchData is an async function that fetches product details from an API
//       const productDetails = await fetchData(id);
//       setProduct(productDetails);
//     };

//     fetchData();
//   }, [id]);

//   return (
//     <div>
//       <h2>Product Detail Page</h2>
//       <ProductDetail getProductDetails={fetchData} />
//     </div>
//   );
// };

// export default ProductDetailPage;

// pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail'; // Correct relative path

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the id (you need to implement this)
    const fetchData = async () => {
      // Assuming fetchData is an async function that fetches product details from an API
      const productDetails = await fetchData(id);
      setProduct(productDetails);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Product Detail Page</h2>
      <ProductDetail getProductDetails={fetchData} />
    </div>
  );
};

export default ProductDetailPage;

