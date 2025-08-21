import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo.png";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // limpa autenticação
    navigate("/login"); // redireciona para login
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#293238] px-10 py-3">
      {/* Logo + Título */}
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <img src={Logo} alt="Eco Clean Ubuntu logo" />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Eco Pontos Admin
        </h2>
      </div>

      {/* Navegação */}
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9 text-white">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/eco-pontos">Eco Pontos</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/settings">Settings</Link>
        </div>

        {/* Avatar / Botão de Logout */}
        <div className="flex items-center gap-4">
          <div className="bg-center bg-no-repeat aspect-square bg-cover bg-white rounded-full size-10"></div>
          <button
            onClick={handleLogout}
            className="text-red-400 hover:text-red-500 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
