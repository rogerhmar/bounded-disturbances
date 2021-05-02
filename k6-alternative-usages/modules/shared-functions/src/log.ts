export enum LogLevel {
    debug= 1,
    info = 2,
    warn = 3,
    error = 4,
    none = 6,
};

export class Log {
    minlevel: LogLevel = LogLevel.none;

    static get minLevel() : LogLevel {
        return this.minLevel;
    }

    static set minLevel(value: LogLevel) {
        this.minLevel = value;
    }

    /**
     * Returns logger with name
     */
    static for(name: string): Logger {
        return new Logger(name);
    }
}

export class Logger {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

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