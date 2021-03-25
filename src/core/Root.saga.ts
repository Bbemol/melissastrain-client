import { all } from "redux-saga/effects";

import { watchSNCF } from "./features/sncf/SNCF.watcher";

export function* rootSaga() {
    yield all([watchSNCF()]);
}
