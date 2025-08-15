import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../../Components/AuthForm";

export default function ResetPassword() {
  const fields = [
    {
      name: "email",

      type: "email",
      placeholder: "Digite seu email para redefinir senha",
      rules: { required: "Email é obrigatório" },
    },
  ];

  const handleReset = (data) => {
    console.log("Solicitação de redefinição:", data);
  };

  return (
    <div>
      <AuthForm
        title="Redefinir Senha"
        fields={fields}
        onSubmit={handleReset}
      />

      <div className="mt-4 text-center text-sm">
        <Link to="/login" className="text-blue-600 hover:underline">
          Voltar para Login
        </Link>
      </div>
    </div>
  );
}
