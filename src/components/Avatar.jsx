import { useContext } from "react";
import { CombinedContext } from "../App";
import { FaUserTie, FaUserNurse, FaUserAstronaut } from "react-icons/fa6";
import "./Avatar.scss";

const Avatar = () => {
	const [theme, user] = useContext(CombinedContext);
	const className = "avatar avatar--" + theme;

	return (
		<div className={className}>
			{user.id === 0 && <FaUserTie />}
			{user.id === 1 && <FaUserNurse />}
			{user.id === 2 && <FaUserAstronaut />}
		</div>
	);
};

export default Avatar;
