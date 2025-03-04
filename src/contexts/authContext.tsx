// vendors
import { createContext, useContext, ReactNode } from "react";

// hooks
import { useAuth } from "@/hooks/useAuth";

// types
interface AuthContextProps {
  user: { username: string; fullName: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>({
  user: null,
  login: () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used wrapped with AuthProvider component");
  }
  return context;
};
