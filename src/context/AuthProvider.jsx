// AuthContext.js

import React, { useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true); // Variable para controlar el estado de carga

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Usuario logueado:', user);
        setCurrentUser(user);
      }
      setIsLoading(false); // Cuando se completa la comprobación del estado de autenticación, establecemos isLoading en falso
    });

    return unsubscribe;
  }, []);

  // Si isLoading es verdadero, puedes mostrar un indicador de carga o cualquier otro contenido de carga
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
