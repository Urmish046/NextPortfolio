"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMail, 
  FiMapPin, 
  FiGithub, 
  FiLinkedin, 
  FiSend, 
  FiCheckCircle, 
  FiLoader, 
  FiX, 
  FiAlertCircle 
} from "react-icons/fi";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("IDLE");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setShowToast(true);
        setFormState({ name: "", email: "", message: "" }); // Reset Form
        // Auto-hide toast after 5 seconds
        setTimeout(() => setShowToast(false), 5000);
      } else {
        setStatus("ERROR");
        setShowToast(true);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus("ERROR");
      setShowToast(true);
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "urmishzaman@gmail.com",
      link: "mailto:urmishzaman@gmail.com",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      icon: FiCheckCircle,
      title: "Status",
      value: "Open to Opportunities",
      link: "#",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: "#",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    }
  ];

  return (
    <section id="contact" className="py-20 text-white relative overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* --- TOAST NOTIFICATION --- */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`fixed bottom-10 right-6 md:right-10 z-[5000] flex items-center gap-4 px-6 py-4 rounded-2xl backdrop-blur-xl border shadow-2xl ${
              status === "SUCCESS" ? "bg-green-500/10 border-green-500/20" : "bg-red-500/10 border-red-500/20"
            }`}
          >
            <div className={`p-2 rounded-full ${status === "SUCCESS" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
              {status === "SUCCESS" ? <FiCheckCircle size={18} /> : <FiAlertCircle size={18} />}
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {status === "SUCCESS" ? "Message Sent!" : "Send Failed!"}
              </p>
              <p className="text-[10px] text-gray-400">
                {status === "SUCCESS" ? "I'll get back to you soon." : "Please try again later."}
              </p>
            </div>
            <button 
              onClick={() => setShowToast(false)} 
              className="ml-4 text-gray-500 hover:text-white transition-colors"
            >
              <FiX size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-3">
            Get in <span className="text-pink-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Ready to build something amazing? Let's talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.link}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-pink-500/30 transition-all duration-300 group hover:bg-white/[0.05]"
              >
                <div className={`p-3 rounded-xl ${item.bg} ${item.color} ${item.border} border shadow-lg group-hover:scale-105 transition-transform`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{item.title}</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-pink-500 transition-colors">{item.value}</p>
                </div>
              </a>
            ))}

            {/* SOCIAL LINKS */}
            <div className="pt-4 flex gap-3">
              <a 
                href="https://github.com/Urmish046" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.1] hover:text-pink-500 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2"
              >
                <FiGithub size={20} /> <span className="text-xs font-bold">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/urmish-zaman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.1] hover:text-blue-500 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2"
              >
                <FiLinkedin size={20} /> <span className="text-xs font-bold">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm relative"
          >
            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Name</label>
                <input 
                  required
                  type="text" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Email</label>
                <input 
                  required
                  type="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea 
                  required
                  name="message" 
                  rows={3}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 transition-all resize-none"
                  placeholder="Your Message..."
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                type="submit"
                className={`w-full font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all text-sm ${
                  isSending ? "bg-gray-700 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-500 shadow-pink-500/20"
                }`}
              >
                {isSending ? <FiLoader className="animate-spin" /> : <FiSend />} 
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;