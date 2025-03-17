import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Login/Register";
import { Home } from "./components/Home/Home";
import { Pet } from "./components/Pet/Pet";
import { LayoutWithSidebar } from "./components/LayoutWithSidebar";
import { AdoptionSolicitation } from "./components/Solicitation/AdoptionSolicitation";
import { Adopt } from "./components/Adote/Adote";
import { Publicize } from "./components/Publicize/Publicize";

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* As rotas abaixo contém sidebar */}
      <Route element={<LayoutWithSidebar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/divulgar" element={<Publicize />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/adoption" element={<Adopt />} />
        <Route path="/solicitation" element={<AdoptionSolicitation />} />
      </Route>
    </Routes>
  );
}
