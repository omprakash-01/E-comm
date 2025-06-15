"use client";
import React, { useState } from "react";

export default function PostApi() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    image: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/herosection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Laptop added successfully!");
        setFormData({ image: "", name: "" });
      } else {
        setMessage(data.error || "Error adding laptop");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setMessage("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Upload Laptop Image
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Add new laptop image and title to Hero section
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image URL Field */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Image Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Image Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="MacBook Pro 16”"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-white text-lg transition-transform duration-300 transform ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Add Laptop"}
            </button>
          </div>
        </form>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mt-6 px-4 py-3 rounded-xl text-center text-sm font-medium transition-colors duration-300 ${
              message.includes("success")
                ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
