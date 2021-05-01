import { AxiosResponse } from "axios";
import { Network } from "core/api/models/Network";
import { Station } from "core/api/models/Station";
import { Arrival } from "../models/Arrival";

export interface ISNCFService {
    getArrivals(stationId: string): Promise<AxiosResponse<Array<Arrival>>>;
    getNetworks(): Promise<AxiosResponse<Array<Network>>>;
}
