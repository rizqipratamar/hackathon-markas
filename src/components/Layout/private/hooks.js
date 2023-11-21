
"use client";
import { useEffect, useState } from "react";

const usePrivate = () => {
  const [isLogged, setIsLogged] = useState(false);
  const onLogin = () => {
    setIsLogged(true)
  } 

  const onLogout = () => {
    setIsLogged(false)
  }

  useEffect(() => {
  }, [isLogged])
  

  return {
    isLogged,
    setIsLogged,
    onLogin,
    onLogout
  }
}

export default usePrivate