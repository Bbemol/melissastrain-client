import React from "react";
import { Pane, Heading } from "evergreen-ui";

import { Networks } from "screens/shared";
import { Arrivals } from "./Arrivals";

export const HomeScreen = () => {
    return (
        <>
            <Heading size={600} marginBottom={24}>
                /Arrivals
            </Heading>
            <Pane display="flex" alignItems="flex-start">
                <Pane width={200} flexShrink={0} padding={16} elevation={1}>
                    <Networks />
                </Pane>
                <Pane display="flex" flexGrow={1} marginLeft={32} borderColor="tint2">
                    <Arrivals />
                </Pane>
            </Pane>
        </>
    );
};
