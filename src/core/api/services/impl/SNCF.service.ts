import { AxiosInstance, AxiosResponse } from "axios";
import { ISNCFService } from "core/api/services/ISNCF.service";
import { Network } from "core/api/models/Network";
import { Arrival } from "core/api/models/Arrival";

export class SNCFService implements ISNCFService {
    constructor(private api: AxiosInstance) {}

    getArrivals = async (stationId: string): Promise<AxiosResponse<Array<Arrival>>> => {
        return await this.api.get(`/station/${stationId}/arrivals`);
    };
    getNetworks = async (stationId: string): Promise<AxiosResponse<Array<Network>>> => {
        return await this.api.get(`/station/${stationId}/networks`);
    };
}
