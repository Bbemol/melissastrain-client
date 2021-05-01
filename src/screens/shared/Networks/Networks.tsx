import React from "react";
import { Box, Checkbox, Heading } from "@chakra-ui/react";

import { useNetworks } from "hooks";

export const Networks = () => {
    const { data, isSuccess } = useNetworks();
    return (
        <Box width={200}>
            {isSuccess && (
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
