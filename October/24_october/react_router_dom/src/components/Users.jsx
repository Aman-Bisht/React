import React from "react";
import { Outlet } from "react-router";
import { Link, useSearchParams } from "react-router-dom";

const Users = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const isactive = searchParams.get("filter")==="active"
  return (
    <div>
      <h1>Users Details</h1>
      <ul>
        <h2>
          <li>
            <Link to="1"> User 1</Link>
          </li>
          <li>
            <Link to="2"> User 2</Link>
          </li>
          <li>
            <Link to="3"> User 3</Link>
          </li>
        </h2>
      </ul>
      <Outlet />
      <div>
          <button onClick={()=>setSearchParams({filter:"active"})}>Active User</button>
          <button onClick={()=>setSearchParams({})}>Reset Filter</button>
      </div>
      {
          isactive?<h1>Active Users</h1>:<h1>All Users</h1>
      }
    </div>
  );
};

export default Users;
