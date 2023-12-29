import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        <div>
            <input type="search" placeholder="Enter the product name"/>
        </div>
        <nav>
            <Link to="featured-products">featured</Link>
            <Link to="new-products">new</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products