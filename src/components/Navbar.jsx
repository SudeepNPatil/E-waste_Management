import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiRecycleFill } from "react-icons/ri";


function Navbar() {

  const [value, setvalue] = useState(false);

  function fun() {

    setvalue(true);
  }

  return (
    <nav className="bg-green-50 text-gray-600 shadow-md font-bold items-center z-10 sticky top-0 flex justify-between p-4">

      <Link to="/" className=" px-4">

        <RiRecycleFill className="h-[40px] w-auto text-green-800 object-contain hover:scale-150 transition-transform duration-300" />

      </Link>

      <ul className="flex">
        <li className="px-6 cursor-pointer hover:text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="px-6 flex gap-1 items-center cursor-pointer hover:text-black">
          < RiRecycleFill size={22} />
          <Link to="/Sell_E_waste">Sell E-waste</Link>
        </li>
        <li className="px-6 cursor-pointer  hover:text-black">

          <Link to="/Trackpickup">
            Track Pick-Up
          </Link>
        </li>
        <li className="px-6 cursor-pointer flex gap-1 items-center hover:text-black">
          <IoIosContact size={22} />
          <Link to="/Authcomponent">
            Sign in
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
