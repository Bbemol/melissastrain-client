import React from "react";
import { Spinner, Box, Alert, AlertIcon, Checkbox, Heading } from "@chakra-ui/react";

import { shallowEqual, useSelector } from "react-redux";
import { selectNetworks } from "core/features/sncf/selectors/selectNetworks";

export const Networks = () => {
    const { isLoading, data } = useSelector(selectNetworks, shallowEqual);
    return (
        <Box width={200}>
            {!isLoading && (
                <>
                    <Heading as="h3" size="sm" marginBottom="4">
                        Networks
                    </Heading>
                    {data?.map((network, index) => (
                        <Checkbox d="flex" key={index}>
                            {network.name}
                        </Checkbox>
                    ))}
                </>
            )}
        </Box>
    );
};
