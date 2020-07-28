import React, { useState } from "react";
import { Link } from "react-router-dom";
import { magenta } from "@ant-design/colors";

import { Layout, Menu } from "antd";

function Navbar() {
	return (
		<Menu mode="horizontal" defaultSelectedKeys={["2"]}>
			<Menu.Item key="">
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item key="">
				<Link to="/portfolio">Portfolio</Link>
			</Menu.Item>
			<Menu.Item key="">
				<Link to="/portfolio">Contact</Link>
			</Menu.Item>
		</Menu>
	);
}

export { Navbar };
