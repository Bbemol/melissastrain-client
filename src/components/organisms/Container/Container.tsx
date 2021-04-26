import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { ContainerProperties } from "./Container.properties";
import { ContainerDirection } from "./ContainerDirection";

export const Container: FC<ContainerProperties> = ({
    background = "white",
    direction = ContainerDirection.Vertical,
    paddingVertical = 8,
    children
}) => {
    return (
        <Box
            d="flex"
            flexDir={direction}
            maxW={1000}
            marginX="auto"
            paddingY={paddingVertical}
            backgroundColor={background}
        >
            <Box d="flex">{children}</Box>
        </Box>
    );
};
