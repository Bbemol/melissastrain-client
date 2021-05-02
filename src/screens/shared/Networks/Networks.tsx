import React from "react";
import { Box, Checkbox, Heading } from "@chakra-ui/react";

import { useNetworks } from "hooks";

export const Networks = () => {
    const { data, isSuccess } = useNetworks("stop_area:SNCF:87384008");
    return (
        <Box width={200}>
            {isSuccess && (
                <>
                    <Heading as="h3" size="sm" marginBottom="4">
                        Networks
                    </Heading>
                    {data?.length &&
                        data?.map((network, index) => (
                            <Checkbox d="flex" key={index}>
                                {network.name}
                            </Checkbox>
                        ))}
                </>
            )}
        </Box>
    );
};
