// src/pages/Auth/Login.jsx
import React from "react";
import AuthForm from "../../../Components/AuthForm";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

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

    // 🚀 Fake Auth (simulação)
    // Aqui você pode futuramente chamar sua API de autenticação.
    if (data.email && data.password) {
      localStorage.setItem("token", "fake-jwt-token"); // guarda token fake
      navigate("/dashboard"); // redireciona para dashboard
    }
  };

  return (
    <div className="">
      <AuthForm title="Login" fields={fields} onSubmit={handleLogin} />

      <div className="mt-4 text-center text-sm">
        <Link to="/reset" className="text-blue-600 hover:underline">
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
