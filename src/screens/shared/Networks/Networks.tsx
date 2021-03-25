import React from "react";
import { Spinner, Text, Pane, Table, Alert, Heading, Checkbox } from "evergreen-ui";

import { shallowEqual, useSelector } from "react-redux";
import { selectNetworks } from "core/features/sncf/selectors/selectNetworks";

export const Networks = () => {
    const { isLoading, data } = useSelector(selectNetworks, shallowEqual);
    return (
        <Pane>
            {isLoading ? (
                <Pane display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                    <Spinner size={24} />
                </Pane>
            ) : (
                <>
                    <Heading>Networks</Heading>
                    {data?.map((network, index) => (
                        <Checkbox key={index} checked label={network.name} />
                    ))}
                </>
            )}
        </Pane>
    );
};
