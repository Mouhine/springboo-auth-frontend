import { useState } from "react";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" min-h-screen bg-[#f5f2ea] flex justify-center items-center ">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
