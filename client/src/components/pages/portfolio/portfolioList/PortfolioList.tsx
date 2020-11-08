import React from "react";
import { PortfolioItem } from "../portfolioItem/PortfolioItem";
import { Skeleton } from "../skeleton/Skeleton";

interface IPortfolioList {
	list: { node: any }[];
}

const PortfolioList: React.FC<IPortfolioList> = ({ list }) => {
	const loadBoxNumber = [1, 2, 3, 4, 5, 6];

	return (
		<div className="portfolio--list">
			{list.length === 0
				? loadBoxNumber.map(() => <Skeleton />)
				: list.map((item) => (
						<PortfolioItem
							key={item.node.id}
							name={item.node.id}
							image={item.node.display_url}
							link="link"
						/>
				  ))}
		</div>
	);
};

export default PortfolioList;
