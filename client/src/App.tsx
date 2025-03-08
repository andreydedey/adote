import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Login/Register";
import { Home } from "./components/Home/Home";
import { Divulgar } from "./components/Divulgar/Divulgar";
import { Pet } from "./components/Pet/Pet";
import { LayoutWithSidebar } from "./components/LayoutWithSidebar";

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* As rotas abaixo contém sidebar */}
      <Route element={<LayoutWithSidebar />}>
        <Route path="/home" element={<Home />} />
        <Route path="/divulgar" element={<Divulgar />} />
        <Route path="/pet" element={<Pet />} />
      </Route>
    </Routes>
  );
}
