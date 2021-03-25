import { Arrival } from "./Arrival";

export interface Station {
    name: string;
    id: string;
    arrivals: Arrival;
}
