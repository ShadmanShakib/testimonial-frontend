import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
