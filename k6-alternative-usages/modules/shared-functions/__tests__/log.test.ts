import { Log, LogLevel } from "../src/log";

test("can set loglevel", () => {
  Log.minLevel = 1;

  expect(Log.minLevel).toBe(1);
});

test("can get logger", () => {
  const logger = Log.for("Test");
  expect(logger.name).toBe("Test");
});

test("can filter on loglevel", () => {
  jest.spyOn(global.console, "debug");
  jest.spyOn(global.console, "info");

  const logger = Log.for("Test");
  Log.minLevel = LogLevel.info;

  logger.debug("Message");
  logger.info("another message");

  expect(global.console.info).toBeCalled();
  expect(global.console.debug).not.toBeCalled();
});
