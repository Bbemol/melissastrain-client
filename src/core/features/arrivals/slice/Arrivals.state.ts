import { Arrival } from "core/api/models/Arrival";
import { CrudState } from "core/interfaces/CrudState";

export interface ArrivalsState extends CrudState {
    data?: Array<Arrival>;
}
