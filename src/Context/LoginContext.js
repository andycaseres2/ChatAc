import { createContext, useContext } from "react";
import { supabase } from "../utils/supabase";

export const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  return context;
};

export const LoginContextProvider = ({ children }) => {
  const loginGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log("Error al inicio de sesion con Github", error);
    }
  };

  const signInWithTwitter = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "twitter",
    });
    if (error) {
      console.log("Error al inicio de sesion con Twitter", error);
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log("Error al cerrar de sesion con Google", error);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error al cerrar de sesion", error);
    }
  };

  return (
    <LoginContext.Provider
      value={(loginGithub, signInWithGoogle, signInWithTwitter, signOut)}
    >
      {children}
    </LoginContext.Provider>
  );
};
