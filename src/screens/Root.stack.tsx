import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Header } from "components";
import { DeparturesScreen } from "./Departures/Departures.screen";
import { HomeScreen } from "./Home/Home.screen";

export const RootStack = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Switch>
                    <Route exact path="/departures">
                        <DeparturesScreen />
                    </Route>
                    <Route path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};
