import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import { Home } from "./components/pages/home/Home";
import { Portfolio } from "./components/pages/portfolio/Portfolio";
import { Contact } from "./components/pages/contact/Contact";

function App() {
	return (
		<Router>
			<div className="container">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
