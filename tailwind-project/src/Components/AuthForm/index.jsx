// src/components/AuthForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import Ilustration from "../../img/ecoponto.png";

export default function AuthForm({ title, fields, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkBackground">
      <div className="bg-gray-100 flex shadow-lg rounded-md p-4">
        <div>
          <img src={Ilustration} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-tl-lg rounded-bl-lg w-full max-w-md shadow"
        >
          <h2 className="text-xl font-bold mb-4">{title}</h2>

          {fields.map((field) => (
            <CustomInput
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              register={register}
              rules={field.rules}
              error={errors[field.name]}
            />
          ))}

          <CustomButton type="submit">{title}</CustomButton>
        </form>
      </div>
    </div>
  );
}
