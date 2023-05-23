import React from "react";
import { Route, Routes } from "react-router-dom";
import Lists from "./Lists";
import BarCode from "./BarCode";
import Setting from "./Settings";
import SimpleBottomNavigation from "./NavBar";
import Header from "./Header";
import "./styles/styles.css";

function App() {
	return (
		<>
			<React.StrictMode>
				<Header />
				<Routes>
					<Route path='/' element={<Lists />} />
					<Route path='/loy' element={<BarCode />} />
					<Route path='/aboutus' element={<Setting />} />
				</Routes>

				<footer>
					<SimpleBottomNavigation />
				</footer>
			</React.StrictMode>
		</>
	);
}
export default App;
