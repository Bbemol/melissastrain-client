import { sncfService } from "../../api/services";
import { call, put } from "redux-saga/effects";

import { arrivalsSlice } from "./slice/arrivals/Arrivals.slice";
import { networksSlice } from "./slice/networks/Networks.slice";

const { fetchArrivalsSuccess, fetchArrivalsFailure } = arrivalsSlice.actions;
const { fetchNetworksSuccess, fetchNetworksFailure } = networksSlice.actions;

export function* getArrivalsSaga() {
    try {
        const { data, status, error } = yield call(sncfService.getArrivals);
        if (status === 200) {
            yield put(fetchArrivalsSuccess(data));
        } else {
            yield put(fetchArrivalsFailure(error.toString()));
        }
    } catch (error) {
        yield put(fetchArrivalsFailure(error.toString()));
    }
}
export function* getNetworksSaga() {
    try {
        const { data, status, error } = yield call(sncfService.getNetworks);
        if (status === 200) {
            yield put(fetchNetworksSuccess(data));
        } else {
            yield put(fetchArrivalsFailure(error.toString()));
        }
    } catch (error) {
        yield put(fetchNetworksFailure(error.toString()));
    }
}
