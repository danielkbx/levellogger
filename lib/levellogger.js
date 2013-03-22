var dateFormat = require('dateformat');
var cliColor = require('cli-color');

var Levellogger = function Levellogger() {
    "use strict";

    this.level = 1;
    this.includeTime = true;
    this.dateFormat = 'yy-mm-dd HH:MM:ss';
    this.useColors = true;

    this.setLevel = function (level) {
        if (0 <= level && level <= 5) {
            console.log('Setting log level to >' + this.nameOfLevel(level) + '<');
            this.level = level;
        }
        return this;
    };


    this.logNothing = function () {
        return this.setLevel(0);
    };

    this.logAll = function () {
        return this.setLevel(1);
    };

    this.logFromSystem = function () {
        return this.setLevel(2);
    };

    this.logFromWarn = function () {
        return this.setLevel(3);
    };

    this.logFromError = function () {
        return this.setLevel(4);
    };

    this.logCriticalOnly = function () {
        return this.setLevel(5);
    };

    this.info = function (log, context) {
        return this.log(log, 1, context);
    };

    this.system = function (log, context) {
        return this.log(log, 2, context);
    };

    this.warn = function (log, context) {
        return this.log(log, 3, context);
    };

    this.error = function (log, context) {
        return this.log(log, 4, context);
    };

    this.critical = function (log, context) {
        return this.log(log, 5, context);
    };

    this.nameOfLevel = function (level) {
        var name = '';
        switch (level) {
            case 5:
                name = 'crit';
                break;
            case 4:
                name = 'error';
                break;
            case 3:
                name = 'warn';
                break;
            case 2:
                name = 'system';
                break;
            case 1:
                name = 'info';
                break;
        }
        return name;
    };

    this.log = function (log, level, context) {
        if (level >= this.level) {

            var prefix = this.nameOfLevel(level);
            if (this.includeTime) {
                prefix += "\t" + dateFormat(new Date(), this.dateFormat);
            }

            if (context) {
                prefix += "\t" + context;
            }

            var content = log;

            if (this.useColors) {
                switch (level) {
                    case 5:
                        content = cliColor.white.bgRed(content);
                        break;
                    case 4:
                        content = cliColor.red(content);
                        break;
                    case 3:
                        content = cliColor.yellow(content);
                        break;
                    case 2:
                        content = cliColor.cyan(content);
                        break;
                    case 1:
                        //content = cliColor.white(content);
                        break;
                }
            }

            console.log(prefix.toUpperCase() + "\t" + content);
        }
        return this;
    };
};

Levellogger.instance = null;
Levellogger.getInstance = function () {
    "use strict";
    if (this.instance === null) {
        console.log('Starting levellogger.');
        this.instance = new Levellogger();
    }
    return this.instance;
};

module.exports = Levellogger.getInstance();