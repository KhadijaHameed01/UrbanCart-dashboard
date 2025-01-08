
import React, { useState } from "react";

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign-Up
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(isLogin ? "Login Data:" : "Sign-Up Data:", formData);
    alert(isLogin ? "Logged In!" : "Account Created!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 to-orange-100">
      {/* Account Box */}
      <div className="bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          {isLogin ? "Login to Your Account" : "Create Your Account"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field (only for Sign-Up) */}
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-500 rounded-lg p-2 mt-1 focus:ring-orange-400 focus:border-orange-400"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-500 rounded-lg p-2 mt-1 focus:ring-orange-400 focus:border-orange-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-500 rounded-lg p-2 mt-1 focus:ring-orange-400 focus:border-orange-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password Field (only for Sign-Up) */}
          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full border border-gray-500 rounded-lg p-2 mt-1 focus:ring-orange-400 focus:border-orange-400"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition ml-0"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Button */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-700">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-500 ml-1 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
