"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can integrate with your backend or email service
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your interest! We will contact you soon to confirm your tour."
    );
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-gradient-to-br from-ranch-cream to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full -ml-40 -mb-40"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-6 py-2 bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest rounded-full">
                Schedule Your Visit
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 font-display leading-tight">
              Experience Luxury Living
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Take the first step toward owning your private paradise. 
              Schedule a private, personalized tour of this extraordinary estate.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl p-10 md:p-12 border-t-4 border-accent"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wider"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-none focus:outline-none focus:border-accent transition-colors text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wider"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-none focus:outline-none focus:border-accent transition-colors text-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wider"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-none focus:outline-none focus:border-accent transition-colors text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wider"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-none focus:outline-none focus:border-accent transition-colors text-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wider"
                >
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-none focus:outline-none focus:border-accent transition-colors text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-bold mb-3 text-gray-700 uppercase tracking-wider"
                >
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-none focus:outline-none focus:border-accent transition-colors text-lg"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group w-full px-12 py-6 bg-accent text-white font-bold text-lg rounded-none hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-accent/50 relative overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-widest">Reserve Your Private Tour</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
