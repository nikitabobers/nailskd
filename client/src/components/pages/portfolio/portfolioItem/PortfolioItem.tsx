import React from "react";
import "./_portfolioItem.scss";

interface ItemProp {
	name: string;
	image: string;
	link: string;
}

const PortfolioItem: React.FC<ItemProp> = ({ name, image, link }) => {
	return (
		<div className="portfolio--item">
			<img src={image} alt="key" />
		</div>
	);
};

export { PortfolioItem };
