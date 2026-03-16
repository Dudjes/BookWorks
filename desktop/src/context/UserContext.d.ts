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

export function UserProvider(props: { children: React.ReactNode }): React.JSX.Element;
export function useUser(): UserContextValue;
