"use client";

import { useState } from "react";

export default function LaptopForm() {
  const [formData, setFormData] = useState({
    laptopName: "",
    brand: "",
    price: "",
    ram: "",
    ssd: "",
    os: "",
    gpu: "",
    image: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const res = await fetch("/api/laptops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Laptop added successfully!");
        setFormData({
          laptopName: "",
          brand: "",
          price: "",
          ram: "",
          ssd: "",
          os: "",
          gpu: "",
          image: "",
        });
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
    <div className="min-h-screen py-12 px-4">
      <div className="">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4">
            <h2 className="text-3xl font-bold text-white mb-2">
              Add New Laptop
            </h2>
          </div>

          <div className="p-8 ">
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "laptopName",
                      label: "Laptop Name",
                      placeholder: "e.g. MacBook Pro 14",
                    },
                    {
                      name: "brand",
                      label: "Brand",
                      placeholder: "e.g. Apple, Dell, HP",
                    },
                    {
                      name: "price",
                      label: "Price ($)",
                      type: "number",
                      placeholder: "e.g. 1299",
                    },
                    {
                      name: "ram",
                      label: "RAM",
                      placeholder: "e.g. 16GB DDR4",
                    },
                    {
                      name: "ssd",
                      label: "SSD",
                      placeholder: "e.g. 512GB NVMe",
                    },
                    {
                      name: "os",
                      label: "Operating System",
                      placeholder: "e.g. Windows 11, macOS",
                    },
                    {
                      name: "gpu",
                      label: "GPU",
                      placeholder: "e.g. NVIDIA RTX 3080",
                    },
                    {
                      name: "image",
                      label: "Image URL",
                      placeholder: "https://example.com/image.jpg",
                    },
                  ].map(({ name, label, placeholder, type = "text" }) => (
                    <div className="space-y-3" key={name}>
                      <label className="block text-sm font-semibold text-slate-700 tracking-wide">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                        className="w-full px-4 py-3 bg-slate-50/50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-slate-700 placeholder-slate-400"
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl text-white font-semibold text-lg shadow-xl transition-all duration-300 ${
                      isSubmitting
                        ? "bg-gradient-to-r from-slate-400 to-slate-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Submitting...
                      </div>
                    ) : (
                      "Add Laptop"
                    )}
                  </button>
                </div>
              </div>
            </form>

            {message && (
              <div
                className={`mt-6 p-4 rounded-xl border-l-4 shadow-lg ${
                  message.includes("success")
                    ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                    : "bg-rose-50 border-rose-500 text-rose-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      message.includes("success")
                        ? "bg-emerald-500"
                        : "bg-rose-500"
                    }`}
                  ></div>
                  <span className="font-medium">{message}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
