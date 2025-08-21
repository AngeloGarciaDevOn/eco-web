import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111518]">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
