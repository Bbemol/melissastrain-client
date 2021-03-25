import { all } from "redux-saga/effects";

import { watchArrivals } from "./features/arrivals/Arrivals.watcher";

export function* rootSaga() {
    yield all([watchArrivals()]);
}
