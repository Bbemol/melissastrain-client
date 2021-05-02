import { AxiosResponse } from "axios";
import { Network } from "core/api/models/Network";
import { Arrival } from "../models/Arrival";

export interface ISNCFService {
    getArrivals(stationId: string): Promise<AxiosResponse<Array<Arrival>>>;
    getNetworks(stationId: string): Promise<AxiosResponse<Array<Network>>>;
}
