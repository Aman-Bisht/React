import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {add} from "../store/cartSlice";
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

function Products() {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.product);
    // const [products,setProducts] = useState([])
    
    useEffect(()=>{
        dispatch(fetchProducts())
        // const fetchProducts = async()=>{
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data)
        // };
        // fetchProducts();
    },[])

    const handleClick = (product)=>{
        dispatch(add(product))
    }

if(status===STATUSES.LOADING){
    return <h1>Loading...</h1>
}
if(status===STATUSES.ERROR){
    return <h2>Something went wrong!</h2>
}
  return (
    <div className="productsWrapper">
        {products.map(product=>(
            <div className="card" key={product.id}>
                <img src={product.image} alt="product"/>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className="btn" onClick={()=>handleClick(product)}>Add to Cart</button>
                </div>
        ))}
        </div>
  )
}

export default Products