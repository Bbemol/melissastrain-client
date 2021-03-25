import { RootState } from "core/Root.state";

import { ArrivalsState } from "core/features/arrivals/slice/Arrivals.state";

export const selectArrivals = ({ arrivals }: RootState): ArrivalsState => arrivals;
