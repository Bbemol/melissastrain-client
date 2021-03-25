import { Network } from "core/api/models/Network";
import { CrudState } from "core/interfaces/CrudState";

export interface NetworksState extends CrudState {
    data?: Array<Network>;
}
