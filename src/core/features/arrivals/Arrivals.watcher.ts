import { takeLatest } from "redux-saga/effects";
import { arrivalsSlice } from "./slice/Arrivals.slice";

import { getArrivalsSaga } from "./Arrivals.saga";

const { fetchArrivals } = arrivalsSlice.actions;

export function* watchArrivals() {
    yield takeLatest(fetchArrivals, getArrivalsSaga);
}
