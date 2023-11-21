import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function Auth({children}) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged,setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

