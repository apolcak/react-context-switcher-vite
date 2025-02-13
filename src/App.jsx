import { createContext, useState } from "react";
import ThemedComponent from "./components/ThemedComponent";

import "./App.scss";

export const CombinedContext = createContext();

const colorModes = ["gy", "bp", "bg"];
const users = [
	{ id: 0, name: "John Doe" },
	{ id: 1, name: "Ellen Doe" },
	{ id: 2, name: "Bob Doe" },
];

function App() {
	const [theme, setTheme] = useState(colorModes[0]);
	const [user, setUser] = useState(users[0]);

	return (
		<CombinedContext.Provider value={[theme, user]}>
			<ThemedComponent
				colorModes={colorModes}
				setTheme={setTheme}
				users={users}
				setUser={setUser}
			>
				<h1>Context switcher</h1>
				<p>
					This is demonstration project of using{" "}
					<code>
						<strong>useContext</strong> React hook
					</code>
					. Try to select different combinations of color modes and
					persons. Your changes in selection makes easily changes
					during whole page without <i>props drilling</i>.
				</p>
			</ThemedComponent>
		</CombinedContext.Provider>
	);
}

export default App;
