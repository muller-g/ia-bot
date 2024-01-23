import { createLogger, format, transports } from 'winston';

const loggerFile = createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: 'error.log' }),
    ],
});

export default loggerFile;
