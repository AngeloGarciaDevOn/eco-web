// src/components/CustomInput.jsx
import React from "react";

export default function CustomInput({ label, error, register, name, type = "text", placeholder, rules }) {
  return (
    <div className="mb-3">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <input
        type={type}
        {...register(name, rules)}
        placeholder={placeholder}
        className={`w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message || "Campo obrigatório"}</p>}
    </div>
  );
}
