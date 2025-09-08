"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

// Medical conditions data organized in columns as shown in the design
const medicalConditions = [
  // Column 1
  [
    "Adiposity-Based Chronic Disease",
    "Android Obesity", 
    "Asthma",
    "Bronchiectasis",
    "Cardiovascular Diseases",
    "Deficiency Anemias",
    "Diabetes",
    "Dyslipidemia",
    "Excess Body Weight"
  ],
  // Column 2
  [
    "Gastrointestinal Diseases",
    "Gynoid/Gynecoid Obesity",
    "High Blood Pressure",
    "Hypertension",
    "Heart Disease",
    "High Blood Lipid Levels",
    "High BMI",
    "Kidney Disease",
    "Lung Disease"
  ],
  // Column 3
  [
    "Metabolic Disorders",
    "Morbid Obesity",
    "Obesity",
    "Obstructive Sleep Apnea",
    "Osteoporosis",
    "Overweight",
    "Pulmonary Fibrosis",
    "Severe Obesity",
    "Skeletal Muscle Dysfunction"
  ]
];

// Contact form component
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-[443px]">
      {/* Name fields row */}
      <div className="flex gap-3">
        <div className="flex-1 h-14 p-3 bg-white/5 rounded-lg border border-transparent focus-within:border-white/20 transition-all relative">
          <label className="text-white text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase block">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-transparent text-white text-sm placeholder:text-white/70 focus:outline-none mt-1"
            required
          />
        </div>
        <div className="flex-1 h-14 p-3 bg-white/5 rounded-lg border border-transparent focus-within:border-white/20 transition-all relative">
          <label className="text-white text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase block">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-transparent text-white text-sm placeholder:text-white/70 focus:outline-none mt-1"
            required
          />
        </div>
      </div>

      {/* Email field */}
      <div className="h-14 p-3 bg-white/5 rounded-lg border border-transparent focus-within:border-white/20 transition-all relative">
        <label className="text-white text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase block">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent text-white text-sm placeholder:text-white/70 focus:outline-none mt-1"
          required
        />
      </div>

      {/* Phone field */}
      <div className="h-14 p-3 bg-white/5 rounded-lg border border-transparent focus-within:border-white/20 transition-all relative">
        <label className="text-white text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase block">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent text-white text-sm placeholder:text-white/70 focus:outline-none mt-1"
        />
      </div>

      {/* Comments field */}
      <div className="h-[124px] p-3 bg-white/5 rounded-lg border border-transparent focus-within:border-white/20 transition-all relative">
        <label className="text-white text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase block">
          Comments
        </label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          rows={4}
          className="w-full bg-transparent text-white text-sm placeholder:text-white/70 focus:outline-none resize-none mt-1"
        />
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-14 px-7 bg-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
      >
        <span className="text-slate text-base font-normal leading-[100%] tracking-[-0.32px] uppercase">
          Send
        </span>
      </motion.button>
    </form>
  );
}

// Condition list item component
function ConditionItem({ condition }: { condition: string }) {
  return (
    <div className="flex items-center justify-between py-5 border-b border-slate/20 pr-5">
      <span className="text-slate text-lg md:text-xl font-normal leading-[130%] tracking-[-0.4px] flex-1">
        {condition}
      </span>
      <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 ml-4">
        <Check className="w-5 h-[14px] text-slate" strokeWidth={2} />
      </div>
    </div>
  );
}

export default function WhichPatientsPage() {
  return (
    <main className="pt-20 md:pt-24" id="main">
      {/* Hero Section */}
      <section className="relative min-h-[681px] bg-[#E3E6E9] overflow-hidden">
        {/* Background Decorative SVG */}
        <div className="absolute right-0 top-[159px] w-[790px] h-[757px] opacity-20 pointer-events-none">
          <svg
            width="791"
            height="759"
            viewBox="0 0 791 759"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              opacity="0.2"
              d="M634.986 1.38086C669.548 -3.9666 698.77 26.9447 691.453 61.1494L677.151 128.021V128.025C670.125 160.833 649.13 188.547 620.7 205.437C589.834 223.771 546.641 250.985 509.517 279.99C515.295 299.515 528.751 316.776 548.724 326.761L548.725 326.762L651.318 378.066L653.31 379.072C737.347 422.023 790.319 508.461 790.319 602.959V702.941C790.319 738.836 756.619 765.219 721.767 756.572L531.32 709.358C467.68 693.581 417.78 647.824 395.16 589.394C372.786 647.2 323.715 692.594 261.052 708.839L258.999 709.358L68.5518 756.574L68.5469 756.576C33.7087 765.197 0 738.846 0 702.941V602.959C0.000111475 507.718 53.8095 420.663 139 378.066L241.594 326.762L241.6 326.759C261.582 316.776 275.033 299.523 280.801 280.01C246.133 252.926 206.165 227.402 175.902 209.211L169.616 205.453C141.174 188.548 120.173 160.834 113.165 128.036L98.8652 61.167L98.5498 59.5664C92.466 26.0164 121.299 -3.88572 155.335 1.40039L270.928 19.3291L270.931 19.3311C295.751 23.1886 319.344 32.7456 339.847 47.2559L341.848 48.6953C365.592 66.0433 383.834 89.2451 395.161 115.556C406.805 88.5039 425.754 64.7376 450.471 47.2393L450.473 47.2373C470.975 32.7272 494.568 23.1701 519.388 19.3125L519.392 19.3105L634.981 1.38086H634.986Z"
              fill="url(#paint0_linear_343_376)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_343_376"
                x1="395"
                y1="569.5"
                x2="395.16"
                y2="53"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A5261" stopOpacity="0" />
                <stop offset="0.5" stopColor="#3A5261" stopOpacity="0.7" />
                <stop offset="1" stopColor="#3A5261" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-16">
          {/* Hero Content */}
          <div className="pt-[152px] pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[647px]"
            >
              <h1 className="text-slate text-[32px] md:text-[48px] lg:text-[56px] font-normal leading-[100%] tracking-[-0.64px] md:tracking-[-0.96px] lg:tracking-[-1.12px] mb-10">
                Is your patient getting enough positive airflow during procedures?
              </h1>
              <p className="text-slate text-base md:text-lg font-normal leading-[140%] tracking-[-0.32px] md:tracking-[-0.36px] opacity-70 max-w-[537px]">
                Health conditions can significantly impact a patient&apos;s ability to breathe during medical procedures. The xchange nasal dock ensures that patients that suffer from OSA, high BMI or other chronic conditions (listed below) are getting the perfect amount of oxygen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medical Conditions Section */}
      <section className="bg-[#E3E6E9] py-10 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-12">
            {medicalConditions.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: columnIndex * 0.2 }}
                className="flex flex-col max-w-[427px] w-full mx-auto"
              >
                {column.map((condition) => (
                  <ConditionItem key={condition} condition={condition} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative min-h-[756px] bg-calm overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Overlay SVG */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 1440 756"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M1193.97 -155.789C1263.1 -166.484 1321.54 -104.661 1306.91 -36.252L1278.3 97.4922V97.5C1264.25 163.115 1222.26 218.544 1165.4 252.322C1103.67 288.991 1017.28 343.419 943.033 401.43C954.589 440.48 981.502 475.001 1021.45 494.97L1021.45 494.974L1226.64 597.582L1230.62 599.593C1398.69 685.494 1504.64 858.371 1504.64 1047.37V1247.33C1504.64 1319.12 1437.24 1371.89 1367.53 1354.59L986.64 1260.17C859.361 1228.61 759.563 1137.1 714.322 1020.25C669.572 1135.85 571.427 1226.64 446.104 1259.13L441.998 1260.17L61.1045 1354.6L61.0938 1354.6C-8.58277 1371.84 -76 1319.14 -76 1247.33V1047.37C-75.9997 856.884 31.619 682.775 202 597.582L407.188 494.974L407.198 494.967C447.162 475.002 474.065 440.496 485.602 401.471C416.267 347.302 336.329 296.254 275.804 259.872L263.232 252.354C206.348 218.545 164.346 163.117 150.33 97.5215L121.73 -36.2158L121.101 -39.4189C108.933 -106.519 166.6 -166.323 234.671 -155.75L465.854 -119.893L465.861 -119.89C515.501 -112.174 562.687 -93.0596 603.692 -64.0391L607.694 -61.1611C655.183 -26.465 691.668 19.939 714.323 72.5605C737.612 18.4573 775.508 -29.0756 824.941 -64.0723L824.944 -64.0752C865.95 -93.0957 913.136 -112.211 962.775 -119.926L962.782 -119.929L1193.96 -155.789H1193.97Z"
              fill="url(#paint0_linear_343_546)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_343_546"
                x1="714"
                y1="1357"
                x2="714"
                y2="-157"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A5261" stopOpacity="0" />
                <stop offset="0.5" stopColor="#3A5261" stopOpacity="0.7" />
                <stop offset="1" stopColor="#3A5261" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Blur Effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[868px] h-[868px] bg-calm rounded-full blur-[200px] opacity-50" />
        </div>

        {/* Contact Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[756px] px-4 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-[443px] w-full"
          >
            <h2 className="text-white text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-[100%] tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px] mb-10">
              Let&apos;s talk.
            </h2>
            
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
