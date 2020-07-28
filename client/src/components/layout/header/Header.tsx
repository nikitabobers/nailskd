import React from "react";
import { Navbar } from "./navbar/Navbar";
import { HeaderTopBar } from "./topBar/HeaderTopBar";
import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<HeaderTopBar />
			<Navbar />
		</div>
	);
};

export { Header };
