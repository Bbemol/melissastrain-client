import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { networksSlice } from "core/features/sncf/slice/networks/Networks.slice";

export const useNetworks = () => {
    const dispatch = useDispatch();

    const { fetchNetworks } = networksSlice.actions;

    useEffect(() => {
        dispatch(fetchNetworks());
    }, [dispatch, fetchNetworks]);

    return;
};
