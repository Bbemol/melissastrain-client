import React, { FC } from "react";
import { Pane } from "evergreen-ui";
import { ContainerProperties } from "./Container.properties";
import { ContainerDirection } from "./ContainerDirection";

export const Container: FC<ContainerProperties> = ({
    background = "white",
    direction = ContainerDirection.Vertical,
    paddingVertical = 0,
    children
}) => {
    return (
        <Pane
            display="flex"
            background={background}
            justifyContent="center"
            paddingTop={paddingVertical}
            paddingBottom={paddingVertical}
        >
            <Pane flex={1} display="flex" flexDirection={direction} padding={16} maxWidth={1000}>
                {children}
            </Pane>
        </Pane>
    );
};