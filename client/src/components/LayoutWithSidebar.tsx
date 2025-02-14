import { SideBar } from "./SideBar";
import { Outlet } from "react-router";

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
