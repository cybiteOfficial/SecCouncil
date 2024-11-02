import React, { useState } from 'react';

const Admin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    accountType: 'Admin',
    otp: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Signup Data:', formData);
    // Add your API call logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-mwhite ">
      <div className="bg-mwhite  p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Admin Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black font-semibold">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 bg-mwhite border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter First Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 bg-mwhite border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter Last Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-mwhite border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 bg-mwhite border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter Password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-semibold">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 bg-mwhite border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mb-6">
            <label className="block text-black font-semibold">OTP:</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
              className="w-full p-3 bg-mwhite border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter OTP"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-700 text-black font-bold rounded-md hover:bg-yellow-800 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
