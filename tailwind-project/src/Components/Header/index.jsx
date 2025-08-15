import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#293238] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <img src={Logo} alt="Eco Clean Ubuntu logo" className="" />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Eco Pontos Admin
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9 text-white">
          <Link to="/dashboard"> Dashboard</Link>
          <Link to="/eco-pontos"> Eco Pontos</Link>
          <Link to="/"> Reports</Link>
          <Link to="/"> Settings</Link>
        </div>
        <div className="bg-center bg-no-repeat aspect-square bg-cover bg-white rounded-full size-10"></div>
      </div>
    </header>
  );
}
