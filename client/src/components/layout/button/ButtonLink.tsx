import React from "react";
import "./_button.scss";

const ButtonLink = ({ btnStyle, children, link }: any) => {
	return (
		<a className={`btn ${btnStyle ? btnStyle : ""}`} href={`${link}`}>
			{children}
		</a>
	);
};

export { ButtonLink };
