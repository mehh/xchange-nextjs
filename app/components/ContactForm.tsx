"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ContactFormProps {
  title?: string;
  className?: string;
}

export default function ContactForm({ 
  title = "Let's talk.", 
  className = "" 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: '',
    hp: '' // honeypot field
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setServerMessage("");

    try {
      // Prepare data for API (matching the expected format)
      const submitData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: formData.comments,
        hp: formData.hp // honeypot
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setServerMessage("Thank you! Your message has been sent successfully.");
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          comments: '',
          hp: ''
        });
      } else {
        setStatus("error");
        setServerMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className={`w-full max-w-[443px] ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-white text-center font-outfit text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-[100%] tracking-[-0.96px] md:tracking-[-1.28px] lg:tracking-[-1.6px] mb-8 md:mb-10"
      >
        {title}
      </motion.h2>

      {/* Server status message */}
      {status !== 'idle' && serverMessage && (
        <div
          role="status"
          className={`mb-6 rounded-md px-4 py-3 text-sm ${
            status === 'success' 
              ? 'bg-green-600/20 text-green-200' 
              : status === 'sending' 
                ? 'bg-blue-600/20 text-blue-200' 
                : 'bg-red-600/20 text-red-200'
          }`}
        >
          {serverMessage}
        </div>
      )}

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        {/* Honeypot field - hidden from users but visible to bots */}
        <input
          type="text"
          name="hp"
          value={formData.hp}
          onChange={handleInputChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Name fields row */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* First Name */}
          <div className="flex h-14 px-3 py-3 flex-col justify-between flex-1 rounded-lg bg-white/5 border border-transparent focus-within:border-white/20 transition-all">
            <label
              htmlFor="firstName"
              className="text-white font-outfit text-[9px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
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
              disabled={status === "sending"}
              className="w-full bg-transparent border-none outline-none text-white font-outfit text-[14px] md:text-[16px] font-normal leading-[100%] tracking-[-0.32px] placeholder-white/50 disabled:opacity-50"
            />
          </div>

          {/* Last Name */}
          <div className="flex h-14 px-3 py-3 flex-col justify-between flex-1 rounded-lg bg-white/5 border border-transparent focus-within:border-white/20 transition-all">
            <label
              htmlFor="lastName"
              className="text-white font-outfit text-[9px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
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
              disabled={status === "sending"}
              className="w-full bg-transparent border-none outline-none text-white font-outfit text-[14px] md:text-[16px] font-normal leading-[100%] tracking-[-0.32px] placeholder-white/50 disabled:opacity-50"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex h-14 px-3 py-3 flex-col justify-between rounded-lg bg-white/5 border border-transparent focus-within:border-white/20 transition-all">
          <label
            htmlFor="email"
            className="text-white font-outfit text-[9px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
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
            disabled={status === "sending"}
            className="w-full bg-transparent border-none outline-none text-white font-outfit text-[14px] md:text-[16px] font-normal leading-[100%] tracking-[-0.32px] placeholder-white/50 disabled:opacity-50"
          />
        </div>

        {/* Phone */}
        <div className="flex h-14 px-3 py-3 flex-col justify-between rounded-lg bg-white/5 border border-transparent focus-within:border-white/20 transition-all">
          <label
            htmlFor="phone"
            className="text-white font-outfit text-[9px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={status === "sending"}
            className="w-full bg-transparent border-none outline-none text-white font-outfit text-[14px] md:text-[16px] font-normal leading-[100%] tracking-[-0.32px] placeholder-white/50 disabled:opacity-50"
          />
        </div>

        {/* Comments */}
        <div className="flex h-[100px] md:h-[124px] px-3 py-3 flex-col rounded-lg bg-white/5 border border-transparent focus-within:border-white/20 transition-all">
          <label
            htmlFor="comments"
            className="text-white font-outfit text-[9px] md:text-[11px] font-normal leading-[100%] tracking-[-0.22px] uppercase mb-2"
          >
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows={3}
            disabled={status === "sending"}
            className="w-full bg-transparent border-none outline-none text-white font-outfit text-[14px] md:text-[16px] font-normal leading-[120%] tracking-[-0.32px] placeholder-white/50 resize-none disabled:opacity-50"
          />
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
          whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
          className="h-12 md:h-14 px-6 md:px-7 rounded-full bg-white text-slate font-outfit text-[14px] md:text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-white/90 transition-all duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </motion.button>
      </motion.form>
    </div>
  );
}
