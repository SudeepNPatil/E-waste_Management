import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="p-20 bg-zinc-200  text-zinc-600">
        <div className="flex justify-evenly">
          <div className="text-sm">
            <h4 className="text-gray-600 font-bold  mb-4">About Us</h4>
            <ul>
              <li className="mb-2">
                <Link to="#">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="/Contact">Contact</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Privacy policy</Link>
              </li>
              <li className="mb-2">
                <Link to="#">FAQ's</Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="text-gray-600 font-bold text-sm mb-4">Services</h4>
            <ul>
              <li className="mb-2">
                <Link to="#">Sell E-Waste Online</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Dispose Old Laptops</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Sell Battery Scrap</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Data Destruction</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Data Center Service</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Electronics & IT Assets Disposition</Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="text-gray-600 font-bold text-sm mb-4">More About Us</h4>
            <ul>
              <li className="mb-2">
                <Link to="#">About Company</Link>
              </li>
              <li className="mb-2">
                <Link to="#">About Employees</Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="text-gray-600 font-bold text-sm mb-4">Follow Us</h4>
            <ul className="flex gap-2 ">
              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaFacebookSquare />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-evenly">
          <h3 className="mt-15 text-center mr-98">
            Built with 💚 by{" "}
            <Link to="https://github.com/SudeepNPatil">Sudeep</Link>
          </h3>
          <h3 className="mt-15 text-center">
            &copy; 2025, All rights reserved.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
