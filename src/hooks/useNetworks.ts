import { useQuery } from "react-query";
import { sncfService } from "core/api/services";

export const useNetworks = () => {
    const { data, ...query } = useQuery("networks", sncfService.getNetworks);
    return { ...data, ...query };
};
