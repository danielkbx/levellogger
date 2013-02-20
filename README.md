# General
Levellogger is a simple console logger which respects a simple kind of level. There are five levels:

* CRITICAL
* ERROR
* WARN
* SYSTEM
* INFO

After the level off the logger has been set, all log entries 'below' this level do not get printed to the console.

# Install

    npm install levellogger
   
# Usage

First, create a logger object and pass log message to it:

    var logger = require('levellogger');
    
    // Log a general info message.
    logger.info('I am a info message!');
    
    // Log a system message.
    logger.system('Starting server at port 80');
    
    // Log a warning.
    logger.system('Revision mismatch, data not saved');
    
    // Log an error.
    logger.system('Could not fetch data from source.');
    
    // Log a critical message.
    logger.critical('Lost database connection.');
    
The logger object is a singleton so you can use 'require' where you need it.
    
# Configuration

You can change the current log level by calling:

    // Show all logs.
    logger.logAll();
    
    // Show only system, warning, error and critical messages.
    logger.logFromSystem();
    
    // Show only warning, error and critical messages.
    logger.logFromWarn();
    
    // Show only error and critical messages.
    logger.logFromError();
    
    // Show only critical messages.
    logger.logCriticalOnly();
    
    // Show nothing at all.
    logger.logNothing();
    