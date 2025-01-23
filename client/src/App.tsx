import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
