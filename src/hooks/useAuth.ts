// vendors
import { useState, useEffect, useCallback } from "react";

// types
interface User {
  username: string;
  fullName: string;
}

const fakeUsers = [
  { username: "admin", password: "admin", fullName: "Ronald Admin" },
  { username: "cesar", password: "123", fullName: "Cesar Developer" },
  { username: "atlantic", password: "city", fullName: "Atlantic CEO" },
];

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = useCallback((username: string, password: string) => {
    const validUser = fakeUsers.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    );

    if (validUser) {
      const userData = { username: validUser.username, fullName: validUser.fullName };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return true;
    }

    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
  }, []);

  return { user, login, logout };
};
