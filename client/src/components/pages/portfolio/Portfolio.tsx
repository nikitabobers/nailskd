import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioList from "./portfolioList/PortfolioList";
import { Button } from "../../layout/button/Button";
import { FiInstagram } from "react-icons/fi";
import "./_portfolio.scss";

function Portfolio() {
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		async function getData() {
			const result = await axios(
				"https://www.instagram.com/nailskd/?__a=1"
			);
			setData(
				result.data.graphql.user.edge_owner_to_timeline_media.edges
			);
		}
		getData();
	}, []);

	return (
		<section className="portfolio--section">
			<PortfolioList list={data} />
			<Button btnStyle="btn--primary">
				<a
					href="https://www.instagram.com/nailskd/"
					rel="noopener noreferrer"
					target="_blank"
					className="btn btn--primary"
				>
					View more
					<FiInstagram />
				</a>
			</Button>
		</section>
	);
}

export { Portfolio };
