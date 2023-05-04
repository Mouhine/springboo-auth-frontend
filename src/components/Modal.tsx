import React from "react";
import Login from "./Login";
import Register from "./Register";
import { useRecoilValue } from "recoil";
import { ViweState } from "../atoms/ViewState";
const Modal = () => {
  const view = useRecoilValue(ViweState);
  return (
    <div className="bg-white rounded-3xl  w-[400px] shadow border  ">
      {view === "login" && <Login />}
      {view === "register" && <Register />}
    </div>
  );
};

export default Modal;
