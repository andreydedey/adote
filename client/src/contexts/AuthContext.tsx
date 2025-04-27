import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: { email: string; password: string }) => Promise<void>;
  user_id: string | undefined;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user_id, setUserId] = useState<string | undefined>();
  const navigate = useNavigate();

  const isAuthenticated = !!user_id;

  useEffect(() => {
    const token = Cookies.get('token');
    const user_id = Cookies.get('user_id');

    console.log(token, user_id)
    console.log('passour por aqui')

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUserId(user_id);
      navigate('/home');
    } else {
      navigate('/login');
    }
  },[])

  async function signIn({email, password}: {email: string, password: string}) {
    const response = await api.post('/user/authenticate', {
      email,
      password
    });
    console.log(response.data)
    
    const { token } = response.data;
    const { user_id } = response.data.refreshToken;

    Cookies.set('token', token, { expires: 1 }); // 1 day expiration
    Cookies.set('user_id', user_id, { expires: 1 }); // 1 day expiration

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    

    setUserId(user_id);
    navigate('/home');
}


  return (
    <AuthContext.Provider value={{isAuthenticated, signIn, user_id}}>
      {children}
    </AuthContext.Provider> 
  );
}
