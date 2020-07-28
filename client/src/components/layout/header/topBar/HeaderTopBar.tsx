import React from "react";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const HeaderTopBar = () => {
	return (
		<div className="header__top">
			<div className="header__top-logo">logo</div>
			<div className="header__top-social">
				<FacebookOutlined />
				<InstagramOutlined />
			</div>
			<div className="header__top-address">Riga</div>
		</div>
	);
};

export { HeaderTopBar };
