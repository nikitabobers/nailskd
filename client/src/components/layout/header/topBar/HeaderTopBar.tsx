import React from "react";
import { FiInstagram } from "react-icons/fi";

const HeaderTopBar = () => {
	return (
		<div className="header__top">
			<div className="header__top-logo">NailsKD</div>
			<div className="header__top-social">
				<a href="https://www.instagram.com/nailskd/">
					<FiInstagram />
					<span>Instagram</span>
				</a>
			</div>
			<div className="header__top-language">EN</div>
		</div>
	);
};

export { HeaderTopBar };
