// src/components/CustomButton.jsx
import React from "react";

export default function CustomButton({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-btn-color text-white font-graphik py-2 rounded hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
