"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[810px] bg-[#5E838F] overflow-hidden py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Main background pattern - hidden on mobile for performance */}
        <svg
          className="hidden md:block absolute left-[-76px] top-[-157px] w-[1581px] h-[1515px] opacity-20"
          width="1440"
          height="810"
          viewBox="0 0 1440 810"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M1193.97 -155.789C1263.1 -166.484 1321.54 -104.661 1306.91 -36.2521L1278.3 97.4921V97.4999C1264.25 163.115 1222.26 218.544 1165.4 252.322C1103.67 288.991 1017.28 343.419 943.033 401.43C954.589 440.48 981.502 475.001 1021.45 494.97L1021.45 494.974L1226.64 597.582L1230.62 599.593C1398.69 685.494 1504.64 858.371 1504.64 1047.37V1247.33C1504.64 1319.12 1437.24 1371.89 1367.53 1354.59L986.64 1260.17C859.361 1228.61 759.563 1137.1 714.322 1020.24C669.572 1135.85 571.427 1226.64 446.104 1259.13L441.998 1260.17L61.1045 1354.6L61.0938 1354.6C-8.58277 1371.84 -76 1319.14 -76 1247.33V1047.37C-75.9997 856.884 31.619 682.775 202 597.582L407.188 494.974L407.198 494.967C447.162 475.002 474.065 440.496 485.602 401.471C416.267 347.302 336.329 296.254 275.804 259.872L263.232 252.354C206.348 218.545 164.346 163.117 150.33 97.5214L121.73 -36.216L121.101 -39.4191C108.933 -106.519 166.6 -166.323 234.671 -155.75L465.854 -119.893L465.861 -119.89C515.501 -112.175 562.687 -93.0597 603.692 -64.0392L607.694 -61.1613C655.183 -26.4651 691.668 19.9388 714.323 72.5604C737.612 18.4572 775.508 -29.0758 824.941 -64.0724L824.944 -64.0753C865.95 -93.0958 913.136 -112.211 962.775 -119.926L962.782 -119.929L1193.96 -155.789H1193.97Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="714" y1="1357" x2="714" y2="-157" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3A5261" stopOpacity="0"/>
              <stop offset="0.5" stopColor="#3A5261" stopOpacity="0.7"/>
              <stop offset="1" stopColor="#3A5261" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Blurred circle */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-[-56px] w-[600px] h-[600px] md:w-[868px] md:h-[868px] rounded-full bg-[#5E838F] opacity-100"
          style={{ filter: 'blur(150px)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full min-h-[600px] md:min-h-[700px] lg:h-[810px] px-4 py-16 md:py-20">
        <div className="w-full max-w-[443px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-white text-center font-outfit text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-[100%] tracking-[-1px] md:tracking-[-1.6px] mb-8 md:mb-10"
          >
            Let&apos;s talk.
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            {/* Name fields */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 h-14 p-3 rounded-lg bg-white/5 relative">
                <label
                  htmlFor="firstName"
                  className="text-white font-outfit text-[10px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-none outline-none text-white mt-1 placeholder-white/50 text-sm md:text-base"
                />
              </div>
              <div className="flex-1 h-14 p-3 rounded-lg bg-white/5 relative">
                <label
                  htmlFor="lastName"
                  className="text-white font-outfit text-[10px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-none outline-none text-white mt-1 placeholder-white/50 text-sm md:text-base"
                />
              </div>
            </div>

            {/* Email */}
            <div className="h-14 p-3 rounded-lg bg-white/5">
              <label
                htmlFor="email"
                className="text-white font-outfit text-[10px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-none outline-none text-white mt-1 placeholder-white/50 text-sm md:text-base"
              />
            </div>

            {/* Phone */}
            <div className="h-14 p-3 rounded-lg bg-white/5">
              <label
                htmlFor="phone"
                className="text-white font-outfit text-[10px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-none outline-none text-white mt-1 placeholder-white/50 text-sm md:text-base"
              />
            </div>

            {/* Comments */}
            <div className="h-[100px] md:h-[124px] p-3 rounded-lg bg-white/5">
              <label
                htmlFor="comments"
                className="text-white font-outfit text-[10px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
              >
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={3}
                className="w-full bg-transparent border-none outline-none text-white mt-1 placeholder-white/50 resize-none text-sm md:text-base"
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-12 px-6 rounded-full bg-white text-[#1C1C20] font-outfit text-[14px] md:text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-white/90 transition-colors"
            >
              Send
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
