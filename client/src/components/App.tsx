import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./layout/header/Header";
import { Home } from "./pages/home/Home";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Contact } from "./pages/contact/Contact";
import { ReservationDate } from "./pages/reservation/dateInfo/ReservationDate";
import { ReservationUser } from "./pages/reservation/userInfo/ReservationUser";
import { ReservationConfirm } from "./pages/reservation/confirm/ReservationConfirm";
import { ReservationConfirmed } from "./pages/reservation/confirmed/ReservationConfirmed";
import { ValidationProvider } from "./layout/form/validation/Validation";
import AppState from "./context/AppState";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql?",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppState>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route
                exact
                path="/reservation/date"
                component={ReservationDate}
              />
              <Route exact path="/reservation/user">
                <ValidationProvider>
                  <ReservationUser />
                </ValidationProvider>
              </Route>
              <Route
                exact
                path="/reservation/confirm"
                component={ReservationConfirm}
              />
              <Route
                exact
                path="/reservation/confirmed"
                component={ReservationConfirmed}
              />
            </Switch>
          </div>
        </Router>
      </AppState>
    </ApolloProvider>
  );
}

export default App;
