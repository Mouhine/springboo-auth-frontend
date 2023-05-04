import React from "react";
import { Link } from "react-router-dom";
const Routes = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col space-y-8 ">
      <h1 className="text-3xl underline text-center">Routes</h1>
      <section className="flex items-center space-x-6">
        <Link to={"/routes/admin"}>
          <div className="border p-8 rounded-xl flex flex-col items-center space-y-2 cursor-pointer hover:border-green-400 ">
            <p>Admin</p>
            <span className="text-sm text-gray-400 text-center">
              Only admin can access this route
            </span>
          </div>
        </Link>
        <Link to={"/routes/manager"}>
          <div className="border p-8 rounded-xl flex flex-col items-center  space-y-2 hover:border-green-400 ">
            <p>Manager</p>
            <span className="text-sm text-gray-400 text-center">
              Only manager can access this route
            </span>
          </div>
        </Link>
        <Link to={"/routes/user"}>
          <div className="border p-8 rounded-xl flex flex-col items-center  space-y-2 hover:border-green-400">
            <p>User</p>
            <span className="text-sm text-gray-400 text-center">
              all users can access this route
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Routes;
