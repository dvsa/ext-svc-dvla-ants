import fs from "fs";
import path from "path";
/* tslint:enable */

export class VehiclePlatingWeightInfoDAO {
  // tslint:disable-next-line: no-empty
  constructor() {
  }

  public getVehiclePlatingWeightInfo(fromDate: string | Date | number, toDate: string | Date |number) {
    return Promise.resolve(JSON.parse(fs.readFileSync(path.resolve(__dirname, "../resources/dvla-ants.json"), "utf8")));
  }
}
