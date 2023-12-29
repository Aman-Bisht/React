import React from 'react'
import { useNavigate } from 'react-router'


const Order_Summary = () => {
    const navigate = useNavigate();
  return (
      <>
      <div>
    <h1>Order Placed Successfully!!</h1>
    <button onClick={()=>navigate(-1)}>Go Back using -1</button>
    <button onClick={()=>navigate("/")}>Go Back</button>
    </div>
    </>
  )
}

export default Order_Summary