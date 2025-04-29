import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signUp: (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => Promise<void>;
  user_id: string | undefined;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user_id, setUserId] = useState<string | undefined>();
  const navigate = useNavigate();

  const isAuthenticated = !!user_id;

  useEffect(() => {
    const token = Cookies.get("token");
    const user_id = Cookies.get("user_id");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUserId(user_id);
      // if user in login or register page, redirect to home
      if (location.pathname === "/login" || location.pathname === "/register") {
        navigate("/home");
      }
    } else {
      location.pathname === "/register"
        ? navigate("/register")
        : navigate("/login");
    }
  }, [navigate]);

  async function signIn({
    email,
    password,
  }: { email: string; password: string }) {
    const response = await api.post("/user/authenticate", {
      email,
      password,
    });

    const { token } = response.data;
    const { user_id } = response.data.refreshToken;

    Cookies.set("token", token, { expires: 1 }); // 1 day expiration
    Cookies.set("user_id", user_id, { expires: 1 }); // 1 day expiration

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setUserId(user_id);
    navigate("/home");
  }

  async function signUp({
    name,
    email,
    password,
  }: { name: string; email: string; password: string }) {
    const response = await api.post("/user/register", {
      name,
      email,
      password,
    });

    const { token } = response.data;
    const { user_id } = response.data.refreshToken;

    Cookies.set("token", token, { expires: 1 });
    Cookies.set("user_id", user_id, { expires: 1 });

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    setUserId(user_id);
    navigate("/home");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, user_id }}>
      {children}
    </AuthContext.Provider>
  );
}
