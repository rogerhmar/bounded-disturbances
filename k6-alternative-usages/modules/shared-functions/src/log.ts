enum LogLevel {
  debug = 1,
  info = 2,
  warn = 3,
  error = 4,
  none = 6,
}

class Log {
  public static minLevel: number = LogLevel.none;

  static for(name: string): Logger {
    return new Logger(name);
  }
}

class Logger {
  constructor(public name: string) {}

  debug(message: string) {
    if (Log.minLevel > LogLevel.debug) {
      return;
    }
    console.debug(`${this.name}: ${message}`);
  }

  /**
   *
   * @param {string} message
   */
  info(message: string) {
    if (Log.minLevel > LogLevel.info) {
      return;
    }
    console.info(`${this.name}: ${message}`);
  }

  warn(message: string) {
    if (Log.minLevel > LogLevel.warn) {
      return;
    }
    console.warn(`${this.name}: ${message}`);
  }

  error(message: string) {
    if (Log.minLevel > LogLevel.error) {
      return;
    }
    console.error(`${this.name}: ${message}`);
  }
}

export { LogLevel, Log, Logger };
