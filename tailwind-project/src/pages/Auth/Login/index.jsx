// src/pages/Login.jsx
import React from "react";
import AuthForm from "../../../Components/AuthForm";
import { Link } from "react-router-dom";
export default function Login() {
  const fields = [
    {
      name: "email",

      type: "email",
      placeholder: "Digite seu email",
      rules: { required: "Email é obrigatório" },
    },
    {
      name: "password",

      type: "password",
      placeholder: "Digite sua senha",
      rules: { required: "Senha é obrigatória" },
    },
  ];

  const handleLogin = (data) => {
    console.log("Login:", data);
  };

  return (
    <div>
      <AuthForm title="Login" fields={fields} onSubmit={handleLogin} />
      <div className="mt-4 text-center text-sm">
        <Link to="/reset-password" className="text-blue-600 hover:underline">
          Esqueci minha senha
        </Link>
        <p className="mt-2">
          Não tem conta?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
}
