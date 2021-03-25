import { AxiosInstance, AxiosPromise } from "axios";
import { ISNCFService } from "core/features/arrivals/services/IArrivals.service";
import { Station } from "core/api/models/Station";

export class SNCFService implements ISNCFService {
    constructor(private api: AxiosInstance) {}

    getArrivals = (): AxiosPromise<Array<Station>> => {
        return this.api.get("/");
    };
}
