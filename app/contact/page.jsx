"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] text-white flex flex-col items-center py-20 px-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Whether you have a project idea, a quick question, or just want to say hi — 
          I’m always down to connect.
        </p>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Info Card */}
        <div className="p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col gap-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Info</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-lg font-medium">shahabhishek051@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-lg font-medium">+91 78610 53202</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-red-400" />
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-lg font-medium">Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3">Socials</h3>
            <div className="flex gap-4">
              <a href="https://github.com/abhishek-2006" target="_black" className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition">GitHub</a>
              <a href="mailto:shahabhishek051@gmail.com" target="_blank" className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition">E-Mail</a>
              <a href="https://abhishekshah_112" target="_blank" className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition">Instagram</a>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <form className="p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col gap-6">
          <h2 className="text-3xl font-semibold mb-4">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-white/30 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-white/30 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-white/30 outline-none"
          ></textarea>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
