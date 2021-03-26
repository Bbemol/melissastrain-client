import React from "react";
import { Spinner, Pane, Table, Alert } from "evergreen-ui";
import { shallowEqual, useSelector } from "react-redux";

import { selectArrivals } from "core/features/sncf/selectors/selectArrivals";
import { Date } from "utils/Date";

export const Arrivals = () => {
    const { isLoading, data } = useSelector(selectArrivals, shallowEqual);
    return (
        <>
            {isLoading ? (
                <Pane display="flex" justifyContent="center" flexDirection="column" flexGrow={1} alignItems="center">
                    <Spinner size={24} />
                    <Alert
                        appearance="card"
                        marginTop={16}
                        intent="none"
                        title="Be patient, this might be a cold start"
                        marginBottom={32}
                    />
                </Pane>
            ) : (
                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>name</Table.TextHeaderCell>
                        <Table.TextHeaderCell>direction</Table.TextHeaderCell>
                        <Table.TextHeaderCell>network</Table.TextHeaderCell>
                        <Table.TextHeaderCell>arrival_date_time</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body>
                        {data?.map((arrival, index) => (
                            <Table.Row key={index}>
                                <Table.TextCell>{arrival.display_informations.name}</Table.TextCell>
                                <Table.TextCell>{arrival.display_informations.direction}</Table.TextCell>
                                <Table.TextCell>{arrival.display_informations.network}</Table.TextCell>
                                <Table.TextCell>
                                    {Date.getHour(arrival.stop_date_time.arrival_date_time)}
                                </Table.TextCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </>
    );
};
