import { useQuery } from "react-query";
import { sncfService } from "core/api/services";

export const useNetworks = (stationId: string) => {
    const { data, ...query } = useQuery(["networks", stationId], () => sncfService.getNetworks(stationId));
    return { ...data, ...query };
};
