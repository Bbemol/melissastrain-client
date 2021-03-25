import { DisplayInformation } from "./DisplayInformation";
import { StopDateTime } from "./StopDateTime";

export interface Arrival {
    display_informations: DisplayInformation;
    stop_date_time: StopDateTime;
}
