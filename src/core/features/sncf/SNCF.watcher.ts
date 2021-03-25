import { takeLatest } from "redux-saga/effects";
import { arrivalsSlice } from "./slice/arrivals/Arrivals.slice";

import { getArrivalsSaga, getNetworksSaga } from "./SNCF.saga";
import { networksSlice } from "./slice/networks/Networks.slice";

const { fetchArrivals } = arrivalsSlice.actions;
const { fetchNetworks } = networksSlice.actions;

export function* watchSNCF() {
    yield takeLatest(fetchArrivals, getArrivalsSaga);
    yield takeLatest(fetchNetworks, getNetworksSaga);
}
