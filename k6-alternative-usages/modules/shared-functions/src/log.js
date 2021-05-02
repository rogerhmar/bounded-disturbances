"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.Log = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["debug"] = 1] = "debug";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["warn"] = 3] = "warn";
    LogLevel[LogLevel["error"] = 4] = "error";
    LogLevel[LogLevel["none"] = 6] = "none";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
;
var Log = /** @class */ (function () {
    function Log() {
        this.minlevel = LogLevel.none;
    }
    Object.defineProperty(Log, "minLevel", {
        get: function () {
            return this.minLevel;
        },
        set: function (value) {
            this.minLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns logger with name
     */
    Log.for = function (name) {
        return new Logger(name);
    };
    return Log;
}());
exports.Log = Log;
var Logger = /** @class */ (function () {
    function Logger(name) {
        this.name = name;
    }
    Logger.prototype.debug = function (message) {
        if (Log.minLevel > LogLevel.debug) {
            return;
        }
        console.debug(this.name + ": " + message);
    };
    /**
     *
     * @param {string} message
     */
    Logger.prototype.info = function (message) {
        if (Log.minLevel > LogLevel.info) {
            return;
        }
        console.info(this.name + ": " + message);
    };
    Logger.prototype.warn = function (message) {
        if (Log.minLevel > LogLevel.warn) {
            return;
        }
        console.warn(this.name + ": " + message);
    };
    Logger.prototype.error = function (message) {
        if (Log.minLevel > LogLevel.error) {
            return;
        }
        console.error(this.name + ": " + message);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=log.js.map