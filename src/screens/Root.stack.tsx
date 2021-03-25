import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Header } from "components";
import { AboutScreen } from "./About/About.screen";
import { HomeScreen } from "./Home/Home.screen";
import { useArrivals } from "hooks";

export const RootStack = () => {
    useArrivals();
    return (
        <Router>
            <Header />
            <Container paddingVertical={24}>
                <Switch>
                    <Route exact path="/about">
                        <AboutScreen />
                    </Route>
                    <Route path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};
