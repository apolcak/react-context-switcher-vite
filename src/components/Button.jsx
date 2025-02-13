// import React from 'react'
import { useContext } from "react";
import { CombinedContext } from "../App";
import "./Button.scss";

const Button = () => {
	const [theme] = useContext(CombinedContext);
	const className = "button button--" + theme;

	return <button className={className}>Button</button>;
};

export default Button;
