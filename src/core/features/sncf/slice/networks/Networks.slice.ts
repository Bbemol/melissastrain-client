import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Network } from "core/api/models/Network";

import { initialState } from "./InitialState";

export const networksSlice = createSlice({
    name: "networks",
    initialState,
    reducers: {
        fetchNetworks: (state) => {
            state.isLoading = true;
        },
        fetchNetworksSuccess: (state, { payload }: PayloadAction<Array<Network>>) => {
            state.isLoading = false;
            state.data = payload;
        },
        fetchNetworksFailure: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false;
            state.errorMessage = payload;
        }
    }
});
