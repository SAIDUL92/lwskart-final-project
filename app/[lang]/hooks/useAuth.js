
import { useContext } from "react";
import { AuthContext } from "../contexts";

export const useAuth = () => {
    const { auth, setAuth, fevPath, setFevPath } = useContext(AuthContext);

    return { auth, setAuth, fevPath, setFevPath };
}