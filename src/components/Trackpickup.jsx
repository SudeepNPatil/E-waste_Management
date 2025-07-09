import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Truck, CheckCircle } from "lucide-react";
import { FiPackage } from "react-icons/fi"; // 📦 icon for 'not booked'

function Trackpickup() {
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const bookingStatus = localStorage.getItem("pickupBooked");
    setIsBooked(bookingStatus === "true");
  }, []);

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6">
        {isBooked ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
              Track Your E-waste Pick-Up
            </h2>

            <div className="flex flex-col gap-8">
              <motion.div
                className="flex items-center gap-4 p-4 border-l-4 border-green-600 bg-green-100 rounded-lg shadow"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="text-green-700" />
                <div>
                  <h3 className="font-semibold text-green-700">Scheduled</h3>
                  <p className="text-sm text-green-600">Pick-up has been scheduled successfully.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 border-l-4 border-gray-300 bg-gray-50 rounded-lg shadow"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Truck className="text-gray-400" />
                <div>
                  <h3 className="font-semibold text-gray-600">Out for Pick-Up</h3>
                  <p className="text-sm text-gray-500">The pickup person is getting ready.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 border-l-4 border-gray-300 bg-gray-50 rounded-lg shadow"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <CheckCircle className="text-gray-400" />
                <div>
                  <h3 className="font-semibold text-gray-600">Completed</h3>
                  <p className="text-sm text-gray-500">Your e-waste has been picked up.</p>
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center text-gray-600 py-10">
            <FiPackage className="text-6xl text-green-400 mb-4 animate-pulse" />
            <p className="text-lg font-medium">No pick-up has been booked yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Trackpickup;
