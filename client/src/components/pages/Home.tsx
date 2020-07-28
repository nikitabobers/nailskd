import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Footer } from "../layout/footer/Footer";
import { Loader } from "../layout/Loader";

function Home() {
	return (
		<div>
			<Loader />
			<Footer />
		</div>
	);
}

export { Home };
