import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./layout/header/Header";
import { Home } from "./pages/home/Home";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Contact } from "./pages/contact/Contact";
import { ReservationDate } from "./pages/reservation/dateInfo/ReservationDate";
import { ReservationUser } from "./pages/reservation/userInfo/ReservationUser";
import AppState from "./context/AppState";

function App() {
	return (
		<AppState>
			<Router>
				<div className="container">
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/reservation/date" component={ReservationDate} />
						<Route exact path="/reservation/user" component={ReservationUser} />
					</Switch>
				</div>
			</Router>
		</AppState>
	);
}

export default App;
