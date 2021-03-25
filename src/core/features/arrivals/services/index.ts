import { SNCFInstance } from "core/api/Sncf";
import { SNCFService } from "./impl/Arrivals.service";

export const sncfService = new SNCFService(SNCFInstance);
