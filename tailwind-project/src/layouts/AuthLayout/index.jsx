import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111518]">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
