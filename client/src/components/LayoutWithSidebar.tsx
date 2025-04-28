import { useContext, useEffect } from "react";
import { SideBar } from "./SideBar";
import { Navigate, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export function LayoutWithSidebar() {
  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
}
