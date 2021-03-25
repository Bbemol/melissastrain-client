import { SNCFInstance } from "core/api/Sncf";
import { SNCFService } from "./impl/SNCF.service";

export const sncfService = new SNCFService(SNCFInstance);
