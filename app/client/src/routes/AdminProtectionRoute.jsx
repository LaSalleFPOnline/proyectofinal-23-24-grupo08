import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const AdminProtectionRoute = ({ children }) => {
	const { isAdmin } = useUser();
	return isAdmin ? children : <Navigate to="/login" />;
};

export default AdminProtectionRoute;
