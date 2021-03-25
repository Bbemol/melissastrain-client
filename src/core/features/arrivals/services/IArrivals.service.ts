import { AxiosPromise } from "axios";
import { Station } from "core/api/models/Station";

export interface ISNCFService {
    getArrivals(): AxiosPromise<Array<Station>>;
}
