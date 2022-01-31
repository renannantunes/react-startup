import React, { useState, createContext, useContext } from 'react';

interface IAuthContext {
  isAutenticated: boolean;
  user: any;
  signIn: (user: string, callback: VoidFunction) => Promise<void>;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const signIn = async (loginData: string, callback: VoidFunction) => {
    setUser(loginData);
    callback();
  };

  const signOut = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  return (
    <AuthContext.Provider value={{ isAutenticated: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
