export declare enum LogLevel {
    debug = 1,
    info = 2,
    warn = 3,
    error = 4,
    none = 6
}
export declare class Log {
    minlevel: LogLevel;
    static get minLevel(): LogLevel;
    static set minLevel(value: LogLevel);
    /**
     * Returns logger with name
     */
    static for(name: string): Logger;
}
export declare class Logger {
    name: string;
    constructor(name: string);
    debug(message: string): void;
    /**
     *
     * @param {string} message
     */
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
}
