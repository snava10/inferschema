import { readFileSync } from "fs";
import * as inferschema from "src/index";
import logger from "@navadt/common/dist/logger/loggerFactory";

const getMemoryUsageReport = (entityName: string, memoryUsage: any) => {
  const jsonMemoryUsageReport = JSON.parse(JSON.stringify(memoryUsage));

  let outputString = " - " + entityName + "\n";

  for (const key of Object.keys(jsonMemoryUsageReport)) {
    outputString =
      outputString +
      `${key}: ${
        Math.round((jsonMemoryUsageReport[key] / 1024 / 1024) * 100) / 100
      } MB \n`;
  }

  return outputString;
};

describe("memory usage test", () => {
  it("airline csv memory usage test", async () => {
    const file = readFileSync("test/resources/airline.csv", "utf-8");
    await inferschema.infer(file);
    logger.info(getMemoryUsageReport("airline csv", process.memoryUsage()));
  });

  it("uk properties csv memory usage test", async () => {
    const file = readFileSync("test/resources/pp-2018-part2.csv", "utf-8");
    await inferschema.infer(file);
    logger.info(
      getMemoryUsageReport("uk properties csv", process.memoryUsage())
    );
  });
});
