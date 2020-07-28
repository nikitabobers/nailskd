import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import { Header } from "./components/layout/header/Header";
import { Home } from "./components/pages/Home";
import { Portfolio } from "./components/pages/Portfolio";
import "./App.less";
import "antd/dist/antd.less";
=======
import { Home } from "./components/pages/Home";
import { Portfolio } from "./components/pages/Portfolio";
import Navbar from "./components/layout/navbar/Navbar";
import "antd/dist/antd.css";
>>>>>>> 7f11c9f4bd42b435df643094b1fa5ae9c74d01b8

function App() {
	return (
		<Router>
<<<<<<< HEAD
			<div className="container">
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/portfolio" component={Portfolio} />
				</Switch>
			</div>
=======
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/portfolio" component={Portfolio} />
			</Switch>
>>>>>>> 7f11c9f4bd42b435df643094b1fa5ae9c74d01b8
		</Router>
	);
}

export default App;
