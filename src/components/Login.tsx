import React from "react";
import {
  AiOutlineGoogle,
  AiOutlineFacebook,
  AiOutlineApple,
  AiFillApple,
} from "react-icons/ai";

import { useSetRecoilState } from "recoil";

import { FaFacebookF } from "react-icons/fa";
import { ViweState } from "../atoms/ViewState";
const Login = () => {
  const setView = useSetRecoilState(ViweState);

  return (
    <div className="flex flex-col items-center p-8 ">
      <h1 className="font-bold text-2xl my-2 ">Agent Login</h1>
      <p className="w-[70%] text-center text-sm font-medium my-1">
        Hey , enter your details to get sign in to youe account
      </p>
      <form className="flex flex-col space-y-2 w-full my-4 ">
        <input
          type="text"
          className="rounded-md px-4 py-2 border outline-0 text-sm "
          placeholder="email ..."
        />
        <input
          type="text"
          className="rounded-md px-4 py-2 border outline-0 text-sm "
          placeholder="password ..."
        />
        <span className="text-sm text-[#9BA4B5] py-2 ">
          Having Trouble to sign in?
        </span>
        <button className="bg-[#fdc886] p-2 rounded shadow text-[#ffffff] text-sm">
          sign in
        </button>
      </form>
      <p className="text-sm text-[#9BA4B5] py-2">____or sing in with____</p>
      <section className="flex items-center space-x-4 justify-center w-full py-2 ">
        <button className="border  rounded-full p-2 ">
          <FaFacebookF />
        </button>
        <button className="border  rounded-full p-2 ">
          <AiOutlineGoogle />
        </button>
        <button className="border  rounded-full p-2 ">
          <AiFillApple />
        </button>
      </section>
      <section>
        <p className="text-sm text-[#9BA4B5] py-2">
          Don't have an account ?{" "}
          <span
            className="text-blue-500 underline-offset-2 cursor-pointer "
            onClick={() => {
              setView("register");
            }}
          >
            Register
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
