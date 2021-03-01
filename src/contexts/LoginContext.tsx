import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from 'next/router';

import Cookies from "js-cookie";

interface LoginProviderProps {
  children: ReactNode;
}

interface LoginContextData {
  username: string;
  handleInput: (user: string) => void;
}

export function LoginProvider({ children }: LoginProviderProps) {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = Cookies.get('username');
    if(user) {
      setUsername(user);
      router.push('/');
    }
  }, [])

  function handleInput(user: string) {
    setUsername(user);
  }

  return (
    <LoginContext.Provider value={{ username, handleInput }}>
      {children}
    </LoginContext.Provider>
  );
}

export const LoginContext = createContext({} as LoginContextData);
