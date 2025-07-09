/* import React, { useState } from "react";
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
 */

import React, { useState, useEffect } from "react";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiRecycleFill } from "react-icons/ri";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://mlxzmcyvcingisxczsqj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1seHptY3l2Y2luZ2lzeGN6c3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjEzMTUsImV4cCI6MjA1NzY5NzMxNX0.j-79P7RdR2Ch8vsF6Qhbsj7fmZYNriptXjRysYGTu1I'
);

function Navbar() {
  const [session, setSession] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setShowDropdown(false);
  };

  const getInitials = (email) => {
    const name = email.split('@')[0];
    return name
      .split(/[.\-_]/)
      .map(part => part[0].toUpperCase())
      .join('')
      .slice(0, 2);
  };

  return (
    <nav className="bg-green-50 text-gray-600 shadow-md font-bold items-center z-10 sticky top-0 flex justify-between p-4">

      <Link to="/" className="px-4">
        <RiRecycleFill className="h-[40px] w-auto text-green-800 object-contain hover:scale-150 transition-transform duration-300" />
      </Link>

      <ul className="flex items-center">
        <li className="px-6 cursor-pointer hover:text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="px-6 flex gap-1 items-center cursor-pointer hover:text-black">
          <RiRecycleFill size={22} />
          <Link to="/Sell_E_waste">Sell E-waste</Link>
        </li>
        <li className="px-6 cursor-pointer hover:text-black">
          <Link to="/Trackpickup">Track Pick-Up</Link>
        </li>

        {!session ? (
          <li className="px-6 cursor-pointer flex gap-1 items-center hover:text-black">
            {/*  <IoIosContact size={22} /> */}
            <Link to="/Authcomponent">Sign in</Link>
          </li>
        ) : (
          <li className="px-6 cursor-pointer relative">
            <div
              className="w-10 h-10 rounded-full border-2 border-green-600 flex items-center justify-center bg-white hover:bg-green-100 transition-all duration-200"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="text-green-800 font-bold text-sm">
                {getInitials(session.user.email)}
              </span>
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-44 z-50 py-2">
                <p className="text-sm text-gray-700 px-4 py-1 truncate">
                  {session.user.email}
                </p>
                <hr className="my-1" />
                <button
                  onClick={handleLogout}
                  className="text-left text-sm text-red-600 hover:bg-red-100 px-4 py-2 w-full"
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
