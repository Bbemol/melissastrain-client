import { RootState } from "core/Root.state";

import { ArrivalsState } from "../slice/Arrivals.state";

export const selectArrivals = ({ arrivals }: RootState): ArrivalsState => arrivals;
