import { RootState } from "core/Root.state";

import { ArrivalsState } from "core/features/sncf/slice/arrivals/Arrivals.state";

export const selectArrivals = ({ arrivals }: RootState): ArrivalsState => arrivals;
