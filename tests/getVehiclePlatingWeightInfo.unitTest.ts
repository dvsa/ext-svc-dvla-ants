import { expect } from "chai";
import {VehiclePlatingWeightInfoService} from "../src/services/VehiclePlatingWeightInfoService";
import fs from "fs";
import path from "path";
import { IVehiclePlatingWeightInfo } from "../@Types/IVehiclePlatingWeightInfo";

describe("getVehiclePlatingWeightInfo", () => {
  let vehiclePlatingWeightInfoService: VehiclePlatingWeightInfoService | any;
  let MockTestResultsDAO: jest.Mock;
  let vehiclePlatingWeightInfoMockDB: any;
  beforeEach(() => {
    vehiclePlatingWeightInfoMockDB = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./resources/dvla-ants.json"), "utf8"));
    MockTestResultsDAO = jest.fn().mockImplementation(() => {
      return {};
    });
    vehiclePlatingWeightInfoService = new VehiclePlatingWeightInfoService(new MockTestResultsDAO());
  });
  afterEach(() => {
    vehiclePlatingWeightInfoMockDB = null;
    vehiclePlatingWeightInfoService = null;
    MockTestResultsDAO.mockReset();
  });

  context("when records are found", () => {
    it("should return a populated response and status code 200", () => {
      MockTestResultsDAO = jest.fn().mockImplementation(() => {
        return {
          getVehiclePlatingWeightInfo: (fromDate: string | number | Date, toDate: string | number | Date) => {
            return Promise.resolve(vehiclePlatingWeightInfoMockDB);
          }
        };
      });

      vehiclePlatingWeightInfoService = new VehiclePlatingWeightInfoService(new MockTestResultsDAO());
      return vehiclePlatingWeightInfoService.getVehiclePlatingWeightInfo("2017-01-01", new Date().toString())
        .then((returnedRecords: IVehiclePlatingWeightInfo[]) => {
          expect(returnedRecords).to.not.equal(undefined);
          expect(returnedRecords).to.not.equal({});
          expect(JSON.stringify(returnedRecords)).to.equal(JSON.stringify(vehiclePlatingWeightInfoMockDB));
        });
    });
  });
});
