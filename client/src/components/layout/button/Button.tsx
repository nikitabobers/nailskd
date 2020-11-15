import React from "react";
import "./_button.scss";

const Button = ({ btnStyle, children }: any) => {
	return (
		<button className={`btn ${btnStyle ? btnStyle : ""}`}>
			{children}
		</button>
	);
};

export { Button };
