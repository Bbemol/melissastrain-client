import { AxiosPromise } from "axios";
import { Network } from "core/api/models/Network";
import { Station } from "core/api/models/Station";

export interface ISNCFService {
    getArrivals(): AxiosPromise<Array<Station>>;
    getNetworks(): AxiosPromise<Array<Network>>;
}
