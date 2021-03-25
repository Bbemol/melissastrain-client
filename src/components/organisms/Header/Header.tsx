import React from "react";
import { Button, Pane, Heading, TrainIcon, Tooltip } from "evergreen-ui";
import { useHistory, useLocation } from "react-router-dom";
import { Container, ContainerDirection } from "components";
import { useDispatch } from "react-redux";
import { arrivalsSlice } from "core/features/sncf/slice/arrivals/Arrivals.slice";

export const Header = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const { fetchArrivals } = arrivalsSlice.actions;
    let location = useLocation();
    console.log("location", location.pathname);
    const handleRefresh = () => {
        dispatch(fetchArrivals());
    };
    return (
        <Container background="tint2" direction={ContainerDirection.Horizontal}>
            <Pane flex={1} alignItems="center" display="flex">
                <TrainIcon color="info" size={20} />
                <Heading size={600} marginLeft={8}>
                    Melissastrain
                </Heading>
            </Pane>
            <Pane>
                <Button marginRight={16} onClick={() => history.push("/")} disabled={location.pathname === "/"}>
                    Arrivals
                </Button>
                <Button
                    marginRight={16}
                    disabled={location.pathname === "/departures"}
                    onClick={() => history.push("/departures")}
                >
                    Departures
                </Button>
                <Tooltip content="Learn more about a feature">
                    <Button appearance="primary" onClick={handleRefresh}>
                        Refresh
                    </Button>
                </Tooltip>
            </Pane>
        </Container>
    );
};
