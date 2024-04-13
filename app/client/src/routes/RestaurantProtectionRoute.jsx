import { Navigate, useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const RestaurantProtectionRoute = ({ children }) => {
	const { isRestaurant, username } = useUser();
	const { idRestaurant } = useParams();
	const isOwner = username === idRestaurant;
	return isRestaurant ? (
		isOwner ? (
			children
		) : (
			<Navigate to={{ pathname: `/${username}` }} />
		)
	) : (
		<Navigate to="/login" />
	);
};

export default RestaurantProtectionRoute;
