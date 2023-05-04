import React from "react";
import { Link } from "react-router-dom";
import { ViweState } from "../atoms/ViewState";
import { useSetRecoilState } from "recoil";
const NavBar = () => {
  const setView = useSetRecoilState(ViweState);
  return (
    <div className="flex items-center justify-between  w-[1028px] absolute top-0 py-2  left-1/2 -translate-x-1/2">
      <Link to={"/auth"}>
        <h1 className="text-3xl font-bold underline-offset-4">JWTAuth</h1>
      </Link>
      <ul className="flex space-x-4 items-center">
        <Link to={"/auth"} onClick={() => setView("login")}>
          <li className="px-6  text-sm  rounded   p-1  ">Login</li>
        </Link>
        <Link to={"/auth"} onClick={() => setView("register")}>
          <li className="px-4   p-1 rounded  text-sm bg-[#fdc886] ">
            Register
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
