import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div >
        <h1 className="heading">Home</h1>
        <button onClick={() => navigate("/order_summary", { replace: true })}>
          Placed Order
        </button>
      </div>
    </>
  );
};

export default Home;
