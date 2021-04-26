import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";

import { Networks } from "screens/shared";

export const DeparturesScreen = () => {
    return (
        <Box d="flex" flexDir="column">
            <Box d="flex">
                <Box>
                    <Heading as="h1" size="md" marginBottom="8">
                        /Departures
                    </Heading>
                    <Networks />
                </Box>
                <Box d="flex">
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam delectus ex laudantium similique.
                        Temporibus deleniti cum, voluptatibus officiis eaque expedita iste numquam doloribus ratione
                        dolorum quaerat et vel alias harum.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};
