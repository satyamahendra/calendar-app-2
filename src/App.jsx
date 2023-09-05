import React, { useState } from "react";

import MainContainer from "./components/MainContainer";
import Activities from "./pages/Activities/Activities";
import Calendar from "./components/Calendar/Calendar";
import NavbarMobile from "./components/NavbarMobile";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const [toggleCalendar, setToggleCalendar] = useState(false);

	return (
		<>
			<MainContainer>
				<Activities />
			</MainContainer>

			<AnimatePresence>
				{toggleCalendar && <Calendar setToggleCalendar={setToggleCalendar} />}
			</AnimatePresence>
			<NavbarMobile setToggleCalendar={setToggleCalendar} />
		</>
	);
};

export default App;
