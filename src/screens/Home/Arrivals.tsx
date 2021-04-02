import React from "react";
import { Alert, AlertIcon, Flex, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Tag } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";

import { selectArrivals } from "core/features/sncf/selectors/selectArrivals";
import { Date } from "utils/Date";

export const Arrivals = () => {
    const { isLoading, data } = useSelector(selectArrivals, shallowEqual);
    return (
        <>
            {isLoading ? (
                <Flex justify="center">
                    <Alert status="warning" maxWidth="400">
                        <AlertIcon />
                        Be patient, this might be a cold start
                    </Alert>
                </Flex>
            ) : (
                <Table variant="simple " size="sm">
                    <Thead>
                        <Tr>
                            <Th>headsign</Th>
                            <Th>name</Th>
                            <Th>direction</Th>
                            <Th>network</Th>
                            <Th>arrival_date_time</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((arrival, index) => (
                            <Tr key={index}>
                                <Td>{arrival.display_informations.headsign}</Td>
                                <Td>{arrival.display_informations.name.substring(0, 12)}</Td>
                                <Td>{arrival.display_informations.direction}</Td>
                                <Td>
                                    <Tag colorScheme="gray">{arrival.display_informations.network}</Tag>
                                </Td>
                                <Td>{Date.getHour(arrival.stop_date_time.arrival_date_time)}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>name</Th>
                            <Th>direction</Th>
                            <Th>network</Th>
                            <Th>arrival_date_time</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            )}
        </>
    );
};
