import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Login = ({ setUserLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      alert(data.message);
      setUserLoggedIn(true); // ✅ set state
      navigate("/");         // ✅ no page refresh
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="p-8 max-w-md w-full flex flex-col justify-center items-center bg-emerald-800 rounded-xl shadow-lg shadow-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
          <form onSubmit={handleSubmit} className="w-full">
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
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-white">
            Don’t have an account?{" "}
            <Link to="/register" className="text-yellow-400 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
