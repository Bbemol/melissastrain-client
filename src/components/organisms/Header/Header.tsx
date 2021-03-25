import React from "react";
import { Button, Pane, Heading, TrainIcon } from "evergreen-ui";
import { useHistory } from "react-router-dom";
import { Container, ContainerDirection } from "components";

export const Header = () => {
    let history = useHistory();
    return (
        <Container background="tint2" direction={ContainerDirection.Horizontal}>
            <Pane flex={1} alignItems="center" display="flex">
                <TrainIcon color="info" size={20} />
                <Heading size={600} marginLeft={8}>
                    Melissastrain
                </Heading>
            </Pane>
            <Pane>
                <Button marginRight={16} onClick={() => history.push("/")}>
                    Home
                </Button>
                <Button appearance="primary" onClick={() => history.push("/about")}>
                    About
                </Button>
            </Pane>
        </Container>
    );
};
