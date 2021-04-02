import React from "react";
import { Heading, Box, Grid, Tooltip, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { arrivalsSlice } from "core/features/sncf/slice/arrivals/Arrivals.slice";
import { selectArrivals } from "core/features/sncf/selectors/selectArrivals";

export const Header = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const { isLoading } = useSelector(selectArrivals);
    const { fetchArrivals } = arrivalsSlice.actions;
    const handleRefresh = () => {
        dispatch(fetchArrivals());
    };
    return (
        <Box backgroundColor="gray.50" borderBottom="4px" borderColor="gray.300">
            <Box maxWidth={1000} marginX="auto" d="flex" justifyContent="space-between" alignItems="center" py={5}>
                <Link to="/">
                    <Box d="flex" alignItems="center" marginRight={4}>
                        <Heading color="gray.600" as="h2" size="lg">
                            Melissastrain
                        </Heading>
                    </Box>
                </Link>
                <Grid templateColumns="repeat(3, 1fr)" columnGap={4}>
                    <Button colorScheme="gray" onClick={() => history.push("/")} variant="ghost">
                        Arrivals
                    </Button>
                    <Button colorScheme="gray" onClick={() => history.push("/departures")} variant="ghost">
                        Departures
                    </Button>
                    <Tooltip label="Click here to refresh arrivals" aria-label="Refresh arrivals tooltip">
                        <Button
                            colorScheme="red"
                            onClick={handleRefresh}
                            isLoading={isLoading}
                            loadingText="Loading"
                            variant="outline"
                        >
                            Refresh
                        </Button>
                    </Tooltip>
                </Grid>
            </Box>
        </Box>
    );
};
