import axios from "../axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("/auth/register", formData);
    alert(res.data.message);
  } catch (error) {
    alert(error.response?.data?.error || "Registration failed");
  }
};

  return (
    <div className="flex flex-col min-h-screen bg-stone-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="p-8 max-w-md mx-auto flex flex-col justify-center items-center bg-emerald-800 rounded-xl shadow-lg shadow-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-white">Register</h2>
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-400 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
