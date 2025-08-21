// src/pages/Auth/Register.jsx
import React from "react";
import AuthForm from "../../../Components/AuthForm";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const fields = [
    {
      name: "name",
      label: "Nome",
      placeholder: "Digite seu nome",
      rules: { required: "Nome é obrigatório" },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Digite seu email",
      rules: { required: "Email é obrigatório" },
    },
    {
      name: "password",
      label: "Senha",
      type: "password",
      placeholder: "Digite sua senha",
      rules: { required: "Senha é obrigatória" },
    },
    {
      name: "confirmPassword",
      label: "Confirmar Senha",
      type: "password",
      placeholder: "Confirme sua senha",
      rules: { required: "Confirmação é obrigatória" },
    },
  ];

  const handleRegister = (data) => {
    console.log("Registrar:", data);

    // 🚨 Verificação simples de senha
    if (data.password !== data.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    // 🚀 Fake Auth (simulação)
    // Aqui no futuro você chama sua API de cadastro
    if (data.email && data.password) {
      localStorage.setItem("token", "fake-jwt-token");
      navigate("/dashboard"); // redireciona para o dashboard
    }
  };

  return (
    <div className="">
      <AuthForm title="Criar Conta" fields={fields} onSubmit={handleRegister} />
    </div>
  );
}
