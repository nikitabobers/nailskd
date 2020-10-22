import React from "react";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const HeaderTopBar = () => {
	return (
		<div className="header__top">
			<div className="header__top-language">EN</div>
			<div className="header__top-logo">NailsKD</div>
			<div className="header__top-social">
				<FacebookOutlined style={{ fontSize: "18px" }} />
				<InstagramOutlined style={{ fontSize: "18px" }} />
			</div>
			<div className="header__top-address">Riga</div>
		</div>
	);
};

export { HeaderTopBar };
