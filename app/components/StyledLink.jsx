"use client";

import React from 'react';

export default function StyledLink({ children, onClick }) {
  const baseClasses = `
    inline-block relative overflow-hidden group
    px-10 py-4 text-lg font-semibold tracking-wide
    text-white rounded-xl transition-all duration-300 ease-in-out
    bg-gradient-to-r from-indigo-600 to-purple-600
    shadow-xl hover:shadow-indigo-500/70
    active:scale-[0.98] cursor-pointer
  `;

  const glowEffect = `
    absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2
    bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500
    rounded-full pointer-events-none blur-xl
  `;

  return (
    <button onClick={onClick} className={baseClasses}>
        <span className={glowEffect}></span>
        <span className="relative z-10">{children}</span>
    </button>
  );
}