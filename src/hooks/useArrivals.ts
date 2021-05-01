import { useQuery } from "react-query";
import { sncfService } from "core/api/services";

export const useArrivals = (stationId: string) => {
    const { data, ...query } = useQuery(["arrivals", stationId], () => sncfService.getArrivals(stationId));
    return { ...data, ...query };
};
