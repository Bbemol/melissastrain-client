import React from "react";
import {
    Heading,
    Box,
    Flex,
    InputLeftElement,
    Input,
    InputGroup,
    FormControl,
    FormLabel,
    Switch
} from "@chakra-ui/react";

import { Networks } from "screens/shared";
import { Arrivals } from "./Arrivals";
import { PhoneIcon, Search2Icon } from "@chakra-ui/icons";

export const HomeScreen = () => {
    return (
        <Flex direction="column" width="full">
            <Flex justify="space-between">
                <Box>
                    <Heading as="h1" size="md" marginBottom="8">
                        /Arrivals
                    </Heading>
                    <Networks />
                </Box>
                <Box flexGrow={1}>
                    <Flex justify="center" align="center" marginBottom="6" maxWidth="600">
                        <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
                            <Input type="text" placeholder="Phone number" />
                        </InputGroup>
                        <FormControl display="flex" alignItems="start" marginLeft="4">
                            <FormLabel htmlFor="email-alerts" mb="0">
                                Only
                            </FormLabel>
                            <Switch size="lg" id="email-alerts" colorScheme="red" />
                        </FormControl>
                    </Flex>
                    <Arrivals />
                </Box>
            </Flex>
        </Flex>
    );
};
