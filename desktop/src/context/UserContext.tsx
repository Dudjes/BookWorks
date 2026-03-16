import { createContext, useContext, useState, type ReactNode } from "react";

type UserSession = {
  id: number;
  username: string;
  email: string;
  role: string;
};

type UserContextValue = {
  user: UserSession | null;
  login: (userData: UserSession) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) as UserSession : null;
  });

  const login = (userData: UserSession) => {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
