import { useContext } from "react";
import { CombinedContext } from "../CombinedContext";
import Button from "./Button";
import Avatar from "./Avatar";
import "./ThemedComponent.scss";

function getFirstLetters(str) {
	return str
		.split(" ")
		.map((w) => w.charAt(0))
		.join("");
}

const ThemedComponent = ({
	colorModes,
	setTheme,
	users,
	setUser,
	children,
}) => {
	const [theme, user] = useContext(CombinedContext);

	return (
		<div className={`theme-wrapper theme-wrapper--${theme}`}>
			<div className="container">
				{children}
				<div className="context-controllers">
					<div className="context-picker">
						<p>
							<strong>Select color mode</strong>
						</p>
						<div className="button-group">
							{colorModes.map((color, index) => {
								return (
									<label
										key={index}
										htmlFor={`radio-${color}`}
										className={`color-button${
											color === theme ? " is-checked" : ""
										}`}
									>
										<input
											type="radio"
											name="mode"
											id={`radio-${color}`}
											value={color}
											checked={
												color === theme ? "checked" : ""
											}
											onChange={() => setTheme(color)}
										/>
									</label>
								);
							})}
						</div>
					</div>
					<div className="context-picker">
						<p>
							<strong>Select person</strong>
						</p>
						<div className="button-group">
							{users.map((userObject, index) => {
								const isChecked = userObject.name === user.name;
								return (
									<label
										key={index}
										htmlFor={`radio-${index}`}
										className={`icon-button${
											isChecked ? " is-checked" : ""
										}`}
									>
										<span>
											{getFirstLetters(userObject.name)}
										</span>
										<input
											type="radio"
											name="user"
											id={`radio-${index}`}
											value={index}
											checked={isChecked ? "checked" : ""}
											onChange={() => setUser(userObject)}
										/>
									</label>
								);
							})}
						</div>
					</div>
				</div>
				<hr />
				<div className="user-profile">
					<div className="user-profile__info">
						<Avatar />
						<strong>{user.name}</strong>
					</div>
					<div className="user-profile__welcome">
						<h2>Hi {user.name.split(" ")[0]}</h2>
						<p>
							<strong>welcome on your profile...</strong>
						</p>
						<Button />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThemedComponent;
