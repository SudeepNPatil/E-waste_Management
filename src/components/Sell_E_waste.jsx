import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SellEwaste() {
  const [submitted, setSubmitted] = useState(false);
  const [ewasteData, setEwasteData] = useState({
    name: '',
    quantity: '',
    image: null,
    imageFile: null,
  });

  const navigate = useNavigate();

  const handleTrackPickup = () => {

    localStorage.setItem("pickupBooked", "true");
    navigate("/Trackpickup"); // 👈 Navigates to tracking page
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setEwasteData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
        imageFile: file,
      }));
    } else {
      setEwasteData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Sell Your E-waste</h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-waste Name
            </label>
            <input
              type="text"
              name="name"
              value={ewasteData.name}
              onChange={handleChange}
              placeholder="e.g. Old Laptop"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={ewasteData.quantity}
              onChange={handleChange}
              placeholder="e.g. 2"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload E-waste Photo
            </label>
            <label className="flex items-center justify-center w-full h-40 border-2 border-dashed border-green-500 rounded-xl cursor-pointer hover:bg-green-100 transition-colors duration-200">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                required
              />
              {ewasteData.image ? (
                <img
                  src={ewasteData.image}
                  alt="preview"
                  className="h-full object-contain rounded-lg"
                />
              ) : (
                <span className="text-gray-500 text-sm">
                  Click to upload image
                </span>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            📦 Book Pick-Up
          </button>
        </form>
      ) : (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl text-center space-y-4">
          <h2 className="text-2xl font-semibold text-green-700">✅ Pick-Up Booked</h2>
          <p className="text-gray-700"><strong>E-waste:</strong> {ewasteData.name}</p>
          <p className="text-gray-700"><strong>Quantity:</strong> {ewasteData.quantity}</p>
          <div className="flex justify-center">
            <img
              src={ewasteData.image}
              alt="E-waste"
              className="w-48 h-48 object-cover rounded-xl border border-green-400"
            />
          </div>
          <button
            onClick={handleTrackPickup}
            className="mt-4 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-semibold"
          >
            🚚 Track Pick-Up
          </button>
        </div>
      )}
    </div>
  );
}

export default SellEwaste;
