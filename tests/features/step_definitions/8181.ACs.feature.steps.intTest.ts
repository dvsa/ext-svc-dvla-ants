import {defineFeature, loadFeature} from "jest-cucumber";
import supertest from "supertest";
import path from "path";

const url = "http://localhost:3006/";
const request = supertest(url);

import mockData from "../../resources/dvla-ants.json";
import * as _ from "lodash";

const feature = loadFeature(path.resolve(__dirname, "../8181.ACs.feature"));

defineFeature(feature, (test) => {
  test("AC1.1 Fetch vehicle plating weight details", ({given, when, then, and}) => {
    let requestUrl: string;
    let response: any;
    let expectedResponse: any;
    let timePeriod: string;
    given("I am an API Consumer", () => {
      requestUrl = "dvla-ants?";
    });
    and("I provide a startDate and an endDate as query parameters", () => {
       timePeriod = "fromDate='2019-9-20'&toDate='2019-10-20'";
    });
    when("I send a GET request to AWS_CVS_DOMAIN/dvla-ants", async () => {
      response = await request.get(requestUrl + timePeriod);
    });
    then("the the system returns array of vehiclePlatingWeightInfos stub data", () => {
      expectedResponse = _.cloneDeep(mockData);
      expect(expectedResponse).toEqual(response.body);
    });
    and("the system returns an HTTP status code 200 OK", () => {
      expect(response.status).toEqual(200);
    });
  });
});
