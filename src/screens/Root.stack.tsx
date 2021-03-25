import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Header } from "components";
import { DeparturesScreen } from "./Departures/Departures.screen";
import { HomeScreen } from "./Home/Home.screen";
import { useArrivals, useNetworks } from "hooks";

export const RootStack = () => {
    useArrivals();
    useNetworks();
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
