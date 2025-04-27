import { useContext, useEffect } from "react";
import { SideBar } from "./SideBar";
import { Navigate, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export function LayoutWithSidebar() {
  // const {isAuthenticated} = useContext(AuthContext);
  // const navigate = useNavigate();
  
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
}
