import React from "react";
import { Navbar } from "./navbar/Navbar";
import "./_header.scss";

const Header = () => {
	return (
		<header className="header">
			<Navbar />
		</header>
	);
};

export { Header };
