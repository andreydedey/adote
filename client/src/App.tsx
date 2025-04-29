import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Login/Register";
import { Home } from "./components/Home/Home";
import { Pet } from "./components/Pet/Pet";
import { LayoutWithSidebar } from "./components/LayoutWithSidebar";
import { AdoptionSolicitation } from "./components/solicitation/AdoptionSolicitation";
import { Adopt } from "./components/Adopt/Adote";
import { Publicize } from "./components/Publicize/Publicize";
import { AuthProvider } from "./contexts/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* As rotas abaixo contém sidebar */}
          <Route element={<LayoutWithSidebar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/divulgar" element={<Publicize />} />
            <Route path="/pet/:id" element={<Pet />} />
            <Route path="/adoption" element={<Adopt />} />
            <Route path="/solicitation" element={<AdoptionSolicitation />} />
          </Route>
      </Routes>
    </AuthProvider>
  );
}
