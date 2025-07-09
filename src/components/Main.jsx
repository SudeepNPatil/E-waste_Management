import React from "react";
import { Link } from "react-router-dom";
import Quote from "./Quote";

function Main() {
  return (
    <>
      <div className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full  object-cover"
            //src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            //src="https://plus.unsplash.com/premium_photo-1682309652843-ed4eb60d473e?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Main background"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 ">
          <h1 className="text-4xl md:text-5xl font-bold w-1/2 mt-32 leading-15 text-white mb-4 selection:bg-yellow-100 selection:text-black">
            Sell Your Old Electronic Waste With Us
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl selection:bg-yellow-100 selection:text-black">
            Feel free to use our platform to sell your E-waste
          </p>
          <Link
            to="/Sell_E_waste"
            className="mb-15 px-8 py-3 bg-white text-black rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            Sell Now
          </Link>
        </div>
      </div>

      <h3 className="text-center font-light font-sans text-4xl text-black bg-green-100 p-6 m-10 selection:bg-yellow-300 selection:text-black">
        Our Services
      </h3>

      <div className="flex justify-center">
        <div className="relative group m-2">
          <img
            className="w-[420px] h-[500px] rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
            /*  src="https://i0.wp.com/zolopik.com/wp-content/uploads/2024/04/Asset-20.webp?resize=1080%2C721&ssl=1"
  */
            src="https://media.istockphoto.com/id/1387310509/photo/woman-putting-an-old-appliance-in-the-waste-bin.jpg?s=612x612&w=0&k=20&c=UBD_06Bgp-r5gccmoooenenK2333468OARZMoF96xPY="

            alt="Sell E-waste Online"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl transition-opacity group-hover:opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              to="Sell_E_waste"
              className="text-white text-2xl font-bold tracking-wider"
            >
              Sell E-waste Online
            </Link>
          </div>
        </div>
        <div className="relative group m-2">
          <img
            className="w-[420px] h-[500px] rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
            src="https://media.istockphoto.com/id/2148706701/vector/electronic-wastes-in-recycle-bin-with-computer-monitor-laptop-computer-keyboard-digital.jpg?s=612x612&w=0&k=20&c=8SQiRvA6avIqQJLbGHrI0rNj6GDXjdLZufJ6j_V7wGg="

            alt="Electronics & IT Assets Disposition"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl transition-opacity group-hover:opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              to="#"
              className="text-white text-2xl font-bold tracking-wider text-center"
            >
              Electronics & IT Assets Disposition
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="relative group m-2">
            <img
              className="w-full h-[240px] rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              // src="https://images.unsplash.com/photo-1594918794521-a0c01cdff8c0?q=80&w=2878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src="https://i0.wp.com/zolopik.com/wp-content/uploads/2024/04/Artboard-19.webp?w=361&ssl=1"
              // src="https://images.unsplash.com/photo-1523304108042-8ac30850c748?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Electronics Recycling"
            />
            <div className="absolute inset-0 bg-black/20 rounded-xl transition-opacity group-hover:opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                to="#"
                className="text-white text-2xl font-bold tracking-wider"
              >
                Electronics Recycling
              </Link>
            </div>
          </div>

          <div className="relative group m-2">
            <img
              className="w-full h-[240px] rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              src="https://i0.wp.com/zolopik.com/wp-content/uploads/2024/04/Artboard-22.webp?w=361&ssl=1"
              alt="Data Center Services"
            />
            <div className="absolute inset-0 bg-black/10 rounded-xl transition-opacity group-hover:opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                to="#"
                className="text-white text-2xl font-bold tracking-wider"
              >
                Data Center Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Quote />
    </>
  );
}

export default Main;
