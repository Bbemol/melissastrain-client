import { arrivalsSlice } from "core/features/sncf/slice/arrivals/Arrivals.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useArrivals = () => {
    const dispatch = useDispatch();

    const { fetchArrivals } = arrivalsSlice.actions;

    useEffect(() => {
        dispatch(fetchArrivals());
    }, [dispatch, fetchArrivals]);

    return;
};
