import React from "react";
import "./_button.scss";

const Button = ({ style, children }: any) => {
	return <button className={`btn ${style ? style : ""}`}>{children}</button>;
};

export { Button };
