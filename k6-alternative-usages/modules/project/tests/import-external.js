// Pure load-testing, no polly, no simmy, just a simple run to see how the workshop is structured and make sure things run
// Start the API with running the build task called watch (it will start the API and reload it on changes)
// Try to read and look at the stats... If you want to you can play with parameters such as the delay in the controller, length of test-run,
// concurrency etc and see how it affects the max RPS (requests pr second) 

import http from "k6/http";
import { check } from "k6";
import { Scenario, setupFromScenario } from "../utils/helpers.js"; // PS: .js is required!
import { Log, LogLevel } from "../node_modules/k6-shared-functions" // PS ../node_modules/ is required 

export let options = setupFromScenario(Scenario.local);

Log.minLevel = LogLevel.debug
const logger = Log.for("import-external")

export function setup() {
  logger.info("Getting started")
  return {
    message: "setupdata"
  }
}

export default function (data) {
  logger.info(`Inside function with ${data.message}`);

  let response = http.get("http://localhost:5000/weatherforecast_intro");

  logger.debug(response)

  check(response, { "200 OK": res => res.status === 200 });
};

export function teardown(data) {
  logger.info(`done with ${data.message}`)
}

