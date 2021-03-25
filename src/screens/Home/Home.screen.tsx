import React from "react";
import { Spinner, Text, Pane, Table } from "evergreen-ui";
import { shallowEqual, useSelector } from "react-redux";

import { selectArrivals } from "core/features/arrivals/selectors/selectArrivals";

export const HomeScreen = () => {
    const { isLoading, data } = useSelector(selectArrivals, shallowEqual);
    return (
        <>
            {isLoading ? (
                <Pane display="flex" justifyContent="center">
                    <Spinner size={24} />
                </Pane>
            ) : (
                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>headsign</Table.TextHeaderCell>
                        <Table.TextHeaderCell>name</Table.TextHeaderCell>
                        <Table.TextHeaderCell>direction</Table.TextHeaderCell>
                        <Table.TextHeaderCell>network</Table.TextHeaderCell>
                        <Table.TextHeaderCell>arrival_date_time</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body>
                        {data?.map((arrival) => (
                            <Table.Row key={arrival.display_informations.headsign}>
                                <Table.TextCell>{arrival.display_informations.headsign}</Table.TextCell>
                                <Table.TextCell>{arrival.display_informations.name}</Table.TextCell>
                                <Table.TextCell>{arrival.display_informations.direction}</Table.TextCell>
                                <Table.TextCell>{arrival.display_informations.network}</Table.TextCell>
                                <Table.TextCell>{arrival.stop_date_time.arrival_date_time}</Table.TextCell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </>
    );
};
