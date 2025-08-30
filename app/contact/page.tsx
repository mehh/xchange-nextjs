"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Note: For client components, metadata should be handled by parent layout or page wrapper

// Map assets to public assets
const imgGettyImages = "/assets/12ee3548fe7cb77bf66faeb8b3af5a1edf87ddc4.png";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    userType: "I'm a landowner",
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [touched, setTouched] = useState<{[key: string]: boolean}>({});

  // Scroll-based parallax
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  const userTypes = [
    "I'm a landowner",
    "I'm a developer",
    "I'm an investor",
    "Other",
  ];

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        if (value && !/^\+?[\d\s\-\(\)]{10,}$/.test(value.replace(/\s/g, ''))) {
          return 'Please enter a valid phone number';
        }
        return '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate field if it has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleUserTypeSelect = (userType: string) => {
    setFormData((prev) => ({
      ...prev,
      userType,
    }));
    setDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors: {[key: string]: string} = {};
    ['name', 'email', 'message'].forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData] as string);
      if (error) newErrors[field] = error;
    });

    // Validate phone if provided
    if (formData.phone) {
      const phoneError = validateField('phone', formData.phone);
      if (phoneError) newErrors.phone = phoneError;
    }

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true, phone: true });

    if (Object.keys(newErrors).length === 0) {
      alert("Thank you for your message! We will get back to you soon.");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        userType: "I'm a landowner",
        message: "",
      });
      setTouched({});
      setErrors({});
    }
  };

  return (
    <div className="w-screen min-h-screen bg-white relative">
      {/* Main Content */}
      <div className="w-full min-h-[1141px] bg-[#43432D] relative overflow-hidden">
        <motion.div
          className="absolute w-[195px] h-full bg-cover bg-center left-[-42px] top-0 z-[2] transform-origin-center will-change-transform"
          style={{
            backgroundImage: `url('${imgGettyImages}')`,
            y: backgroundY,
            scale: backgroundScale
          }}
        ></motion.div>
        <div className="absolute w-[calc(100%-195px)] h-full bg-[#43432D] left-[153px] top-0 z-[1]"></div>

        <div className="max-w-[1440px] mx-auto px-4 relative">
          <div className="relative z-[3] flex flex-col md:flex-row min-h-[1141px] pt-20 pb-20 md:pt-20 md:pb-20">
            {/* Left Side Content */}
            <div className="flex-1 max-w-[500px] md:pl-[205px] md:pt-28 mb-10 md:mb-0 text-center md:text-left">
              <motion.div
                className="text-white text-left font-heading text-[19px] font-normal mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                CONTACT
              </motion.div>
              <motion.h1
                className="text-white font-sans text-[36px] md:text-[56px] font-normal leading-normal mb-10 md:mb-[88px] w-auto md:w-[242px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Let&apos;s get<br />
                started
              </motion.h1>
              <motion.div
                className="text-white font-sans text-[19px] font-normal leading-normal w-auto md:w-[281px] text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Welcome to TMod.
                <br /><br />
                We&apos;re excited to be on this journey together.
                <br /><br />
                Fill out the info on the right to get the process going.
              </motion.div>
            </div>

            {/* Right Side Form */}
            <motion.div
              className="flex-1 md:pl-[100px] md:pt-28 max-w-full md:max-w-[650px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <motion.div
                  className="mb-[50px] relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-white font-sans text-[18px] font-normal opacity-50 mb-5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your full name"
                    className={`w-full bg-transparent border-none outline-none text-white font-sans text-[18px] font-normal py-2 placeholder:text-white/30 placeholder:text-[16px] ${errors.name ? 'text-red-400' : ''}`}
                  />
                  <div className={`h-px w-full mt-2 transition-colors ${errors.name ? 'bg-red-400' : 'bg-white'}`}></div>
                  {errors.name && <div className="text-red-400 font-sans text-[14px] mt-2">{errors.name}</div>}
                </motion.div>

                {/* Email and Phone Fields */}
                <motion.div
                  className="flex flex-col md:flex-row gap-5 md:gap-9 mb-[50px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="w-full md:w-[279px] relative">
                    <label className="block text-white font-sans text-[18px] font-normal opacity-50 mb-5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="your.email@company.com"
                      className={`w-full bg-transparent border-none outline-none text-white font-sans text-[18px] font-normal py-2 placeholder:text-white/30 placeholder:text-[16px] ${errors.email ? 'text-red-400' : ''}`}
                    />
                    <div className={`h-px w-full mt-2 transition-colors ${errors.email ? 'bg-red-400' : 'bg-white'}`}></div>
                    {errors.email && <div className="text-red-400 font-sans text-[14px] mt-2">{errors.email}</div>}
                  </div>
                  <div className="w-full md:w-[279px] relative">
                    <label className="block text-white font-sans text-[18px] font-normal opacity-50 mb-5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="(555) 123-4567"
                      className={`w-full bg-transparent border-none outline-none text-white font-sans text-[18px] font-normal py-2 placeholder:text-white/30 placeholder:text-[16px] ${errors.phone ? 'text-red-400' : ''}`}
                    />
                    <div className={`h-px w-full mt-2 transition-colors ${errors.phone ? 'bg-red-400' : 'bg-white'}`}></div>
                    {errors.phone && <div className="text-red-400 font-sans text-[14px] mt-2">{errors.phone}</div>}
                  </div>
                </motion.div>

                {/* Company Field */}
                <motion.div
                  className="mb-[50px] relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label className="block text-white font-sans text-[18px] font-normal opacity-50 mb-5">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full bg-transparent border-none outline-none text-white font-sans text-[18px] font-normal py-2 placeholder:text-white/30 placeholder:text-[16px]"
                  />
                  <div className="h-px bg-white w-full mt-2"></div>
                </motion.div>

                {/* Dropdown */}
                <motion.div
                  className="mb-[50px] relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full md:w-[595px] h-16 rounded-[13px] bg-white border-none flex items-center justify-between px-8 cursor-pointer font-sans text-[18px] font-normal"
                  >
                    <span className={formData.userType === "I'm a landowner" ? 'text-black/50' : 'text-black'}>
                      {formData.userType}
                    </span>
                    <div className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                      <svg width="15" height="8" viewBox="0 0 15 8" fill="none">
                        <line x1="0.5" y1="1" x2="7.5" y2="7" stroke="black"/>
                        <line x1="14.5" y1="1" x2="7.5" y2="7" stroke="black"/>
                      </svg>
                    </div>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-[68px] left-0 w-full md:w-[595px] bg-white rounded-[13px] shadow-lg z-10 overflow-hidden">
                      {userTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleUserTypeSelect(type)}
                          className={`w-full px-8 py-4 text-left cursor-pointer font-sans text-[18px] font-normal transition-colors border-none bg-transparent hover:bg-gray-100 ${
                            formData.userType === type ? 'bg-blue-50 text-blue-600' : 'text-black'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="mb-[50px] relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <label className="block text-white font-sans text-[18px] font-normal opacity-50 mb-5">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    rows={8}
                    placeholder="Tell us about your project, goals, and how we can help..."
                    className={`w-full bg-transparent border-none outline-none text-white font-sans text-[18px] font-normal py-2 resize-none min-h-[120px] placeholder:text-white/30 placeholder:text-[16px] ${errors.message ? 'text-red-400' : ''}`}
                  />
                  <div className={`h-px w-full mt-2 transition-colors ${errors.message ? 'bg-red-400' : 'bg-white'}`}></div>
                  {errors.message && <div className="text-red-400 font-sans text-[14px] mt-2">{errors.message}</div>}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="flex justify-end mt-[45px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <button
                    type="submit"
                    className="w-[197px] h-[46px] rounded-[29px] border-2 border-white bg-white text-[#43432D] font-sans text-[18px] font-normal cursor-pointer transition-colors hover:bg-gray-100"
                  >
                    Learn more
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles using Tailwind classes directly above */}
      <style jsx>{`
        @media (max-width: 768px) {
          .contact-main {
            height: auto !important;
            min-height: 100vh !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function ContactPage() {
  return <ContactForm />;
}
