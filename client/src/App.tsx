import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import { Home } from "./components/pages/Home";
import { Portfolio } from "./components/pages/Portfolio";

function App() {
	return (
		<Router>
			<div className="container">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/portfolio" component={Portfolio} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
