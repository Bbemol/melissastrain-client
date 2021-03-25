import { RootState } from "core/Root.state";

import { NetworksState } from "../slice/networks/Networks.state";

export const selectNetworks = ({ networks }: RootState): NetworksState => networks;
