import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
	return (
		<nav className="navbar">
			<Link className="navbar--item" to="/">
				Home
			</Link>
			<Link className="navbar--item" to="/portfolio">
				Portfolio
			</Link>
			<Link className="navbar--item" to="/contact">
				Contacts
			</Link>
		</nav>
	);
}

export { Navbar };
