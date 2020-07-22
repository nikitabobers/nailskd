import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Portfolio } from "./components/pages/Portfolio";
import Navbar from "./components/layout/navbar/Navbar";
import "antd/dist/antd.css";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/portfolio" component={Portfolio} />
			</Switch>
		</Router>
	);
}

export default App;
