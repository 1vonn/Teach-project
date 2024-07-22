import {Outlet,Navigate } from "react-router-dom";
import useAuthorizeStore from "../authorizeStore.js";
const ProtectedRoutes = () =>{
    const authorizeStore = useAuthorizeStore((state) => state.auth);
    let auth = {token: authorizeStore};
    return auth.token ? <Outlet/> : <Navigate to="/login"/>
};
export default ProtectedRoutes;