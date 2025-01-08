import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields!");
      return;
    }

    // Mock successful submission
    console.log("Form Data Submitted:", formData);
    setSuccessMessage("Your message has been sent successfully!");

    // Clear form
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 to-orange-100">
      <div className="bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
            {successMessage}
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
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
              required
            />
          </div>

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

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full  border border-gray-500 rounded-lg p-2 mt-1 focus:ring-orange-400 focus:border-orange-400"
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition ml-0"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
