import React, { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Loader() {
	return (
		<div>
			<Spin indicator={antIcon} />
		</div>
	);
}

export { Loader };
