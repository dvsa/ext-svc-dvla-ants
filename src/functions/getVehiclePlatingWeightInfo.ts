import {VehiclePlatingWeightInfoDAO} from "../models/VehiclePlatingWeightInfoDAO";
import {VehiclePlatingWeightInfoService} from "../services/VehiclePlatingWeightInfoService";
import { HTTPResponse } from "../models/HTTPResponse";

export const getVehiclePlatingWeightInfo = (event: {queryStringParameters: {fromDate: string|number|Date; toDate: string|number|Date} }) => {
  const vehiclePlatingWeightInfoDAO = new VehiclePlatingWeightInfoDAO();
  const vehiclePlatingWeightInfoService = new VehiclePlatingWeightInfoService(vehiclePlatingWeightInfoDAO);

  return vehiclePlatingWeightInfoService.getVehiclePlatingWeightInfo(event.queryStringParameters.fromDate, event.queryStringParameters.toDate)
  .then((data) => {
      return new HTTPResponse(200, data);
    }).catch((error: any) => {
      return new HTTPResponse(error.statusCode, error.body);
    });

};
