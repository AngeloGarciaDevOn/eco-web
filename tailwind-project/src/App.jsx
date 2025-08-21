import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111518] overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
