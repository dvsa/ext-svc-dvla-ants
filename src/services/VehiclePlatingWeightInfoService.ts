import { VehiclePlatingWeightInfoDAO } from "../models/VehiclePlatingWeightInfoDAO";

/**
 * Service for retrieving Vehicle plating weight information for ANTS
 * @returns Promise
 */
export class VehiclePlatingWeightInfoService {
  public readonly vehiclePlatingWeightInfoDAO: VehiclePlatingWeightInfoDAO;

  constructor(vhclPlatingWeightInfoDAO: VehiclePlatingWeightInfoDAO) {
    this.vehiclePlatingWeightInfoDAO = vhclPlatingWeightInfoDAO;
  }
  public async getVehiclePlatingWeightInfo(fromDate: string | number | Date, toDate: string | number | Date) {
    return await this.vehiclePlatingWeightInfoDAO.getVehiclePlatingWeightInfo(fromDate, toDate);
  }

}
