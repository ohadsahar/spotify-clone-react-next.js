import * as path from "path";
import { createLogger, format, transports } from "winston";

const { combine, timestamp, printf } = format;

const customFormat = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});


const Logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        customFormat
    ),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File({
            filename: path.join(path.dirname(path.dirname(__dirname)), 'logs', 'error.log'),
            level: 'error'
        }),
        new transports.File({ filename: path.join(path.dirname(path.dirname(__dirname)), 'logs', 'combined.log') })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    Logger.add(new transports.Console({
        level: 'debug',
        format: combine(
            format.colorize(),
            customFormat,
        )
    }));
}

export default Logger;