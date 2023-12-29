import React from "react";
import { Outlet,useSearchParams } from "react-router-dom";

function Users() {
    const [searchParams,setSearchParams] = useSearchParams();
    const params = searchParams.get('filter')==="active"
  return (
    <>
      <div>
        <h2>Users List</h2>
        <h3>User 1</h3>
        <h3>User 2</h3>
        <h3>User 3</h3>
        <Outlet />
      </div>
      <div>
        <button onClick={()=>setSearchParams({filter:"active"})}>Active</button>
        <button onClick={()=>setSearchParams({})}>Reset</button>
      </div>
      <div>
        {params?<h2>Showing Active User</h2>:
        <h2>Showing all Users</h2>}
      </div>
    </>
  );
}

export default Users;
