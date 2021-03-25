import { AxiosInstance, AxiosPromise } from "axios";
import { ISNCFService } from "core/api/services/ISNCF.service";
import { Station } from "core/api/models/Station";
import { Network } from "core/api/models/Network";

export class SNCFService implements ISNCFService {
    constructor(private api: AxiosInstance) {}

    getArrivals = (): AxiosPromise<Array<Station>> => {
        return this.api.get("/");
    };
    getNetworks = (): AxiosPromise<Array<Network>> => {
        return this.api.get("/linetypes");
    };
}
