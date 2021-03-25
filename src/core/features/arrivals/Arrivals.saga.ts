import { sncfService } from "./services";
import { call, put } from "redux-saga/effects";

import { arrivalsSlice } from "./slice/Arrivals.slice";

const { fetchArrivalsSuccess, fetchArrivalsFailure } = arrivalsSlice.actions;

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
