import { useContext, useEffect } from "react";
import type { typeAuthHeader } from "../../utils/types/typeAuthHeader";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function AuthHeader({ title, subtitle }: typeAuthHeader) {

  const {isAuthenticated} = useContext(AuthContext);
  
  // if (!isAuthenticated) {
  //   return <Navigate to="/home" />;
  // }

  return (
    <div className="py-2">
      <h1 className="font-semibold">{title}</h1>
      <h2 className="font-normal">{subtitle}</h2>
    </div>
  );
}
