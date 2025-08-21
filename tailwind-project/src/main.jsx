import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx"; // Vai virar teu MainLayout (com Header)
import AuthLayout from "./layouts/AuthLayout"; // Novo layout sem Header
import ProtectedRoute from "./Components/ProtectedRoute"; // Novo componente

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import Dashboard from "./pages/Dashboard";
import EcoPontos from "./pages/EcoPontos";
import ErrorPage from "./routes/ErrorPage";

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      // Rotas públicas (auth)
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "reset", element: <ResetPassword /> },
        ],
      },

      // Rotas privadas (main layout com Header)
      {
        element: (
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        ),
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "eco-pontos", element: <EcoPontos /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
