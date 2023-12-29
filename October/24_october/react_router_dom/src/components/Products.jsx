import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="container">
        <h1>Products</h1>
      </div>
      <input type="search" placeholder="Search Here" style={{ margin: 10 }} />
      <br />
      <nav className="primary2">
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Products;
