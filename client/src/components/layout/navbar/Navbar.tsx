import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";

function Navbar() {
	return (
		<Menu mode="horizontal" defaultSelectedKeys={["2"]}>
			<Menu.Item key="1">
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item key="2">
				<Link to="/portfolio">Portfolio</Link>
			</Menu.Item>
		</Menu>
	);
}

export default Navbar;
