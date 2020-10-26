import React from "react";
import { FiInstagram } from "react-icons/fi";

const HeaderTopBar = () => {
	return (
		<div className="header__top">
			<div className="header__top-logo">NailsKD</div>
			<div className="header__top-social">
				<FiInstagram />
				<span>Instagram</span>
			</div>
			<div className="header__top-language">EN</div>
		</div>
	);
};

export { HeaderTopBar };
