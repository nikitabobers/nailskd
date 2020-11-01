import React, { useEffect, useState } from "react";
import "./_portfolioItem.scss";

interface ItemProp {
	name: string;
	image: string;
	link: string;
}

const PortfolioItem: React.FC<ItemProp> = ({ name, image, link }) => {
	const [style, setStyle] = useState({});

	useEffect(() => {
		setStyle({ backgroundImage: `url(${image})` });
	}, []);

	return (
		<div className="item--container">
			<img src={image} alt="key" />
		</div>
	);
};

export { PortfolioItem };
