"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setShowAlert(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Error sending message.");
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="contact-wrapper"
    >
      {showAlert && (
        <motion.div
          className="alert-toast"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          🎉 Message Sent Successfully!
        </motion.div>
      )}

      <div className="contact-container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Get In Touch
        </motion.h1>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I&apos;d love to hear from you — whether it&apos;s a project, job, or just a hello!
        </motion.p>

        <form onSubmit={handleSubmit} className="contact-form">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="input-field"
            whileFocus={{ scale: 1.02 }}
            required
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="input-field"
            whileFocus={{ scale: 1.02 }}
            required
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="textarea-field"
            whileFocus={{ scale: 1.02 }}
            required
          />

          <motion.button
            type="submit"
            className="submit-button"
            whileTap={{ scale: 0.98 }}
          >
            <SendHorizonal className="icon" />
            Send Message
          </motion.button>
        </form>

      </div>
    </motion.div>
  );
}

