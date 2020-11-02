import React, { useState, useEffect } from "react";
import axios from "axios";
import { PortfolioItem } from "./portfolioItem/PortfolioItem";
import { Loader } from "../../layout/loader/Loader";
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

	return data.length === 0 ? (
		<Loader />
	) : (
		<section className="portfolio--section">
			<div className="item--list">
				{data.length > 0 &&
					data.map((item) => (
						<PortfolioItem
							key={item.node.id}
							name={item.node.id}
							image={item.node.display_url}
							link="link"
						/>
					))}
			</div>
			<Button style="btn--primary">
				<a href="https://www.instagram.com/nailskd/" target="_blank">
					View more
					<FiInstagram />
				</a>
			</Button>
		</section>
	);
}

export { Portfolio };
