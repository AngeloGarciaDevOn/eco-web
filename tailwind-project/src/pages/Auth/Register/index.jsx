// src/pages/Register.jsx
import React from "react";
import AuthForm from "../../../Components/AuthForm";

export default function Register() {
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
  };

  return (
    <AuthForm title="Criar Conta" fields={fields} onSubmit={handleRegister} />
  );
}
