import React from "react";
import { Pane, Heading, Text } from "evergreen-ui";

import { Networks } from "screens/shared";

export const DeparturesScreen = () => {
    return (
        <>
            <Heading size={600} marginBottom={24}>
                /Departures
            </Heading>
            <Pane display="flex" alignItems="flex-start">
                <Pane width={200} flexShrink={0} padding={16} elevation={1}>
                    <Networks />
                </Pane>
                <Pane display="flex" flexGrow={1} marginLeft={32} borderColor="tint2">
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus ex laudantium similique.
                        Temporibus deleniti cum, voluptatibus officiis eaque expedita iste numquam doloribus ratione
                        dolorum quaerat et vel alias harum.
                    </Text>
                </Pane>
            </Pane>
        </>
    );
};
