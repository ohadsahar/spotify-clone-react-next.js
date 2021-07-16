import { INTERNAL_SERVER_ERROR } from "http-status-codes";
import Logger from "../../config/logger.config";

class ExtendableError extends Error{
    costumeError = true;

    constructor(public errorMsgCode: string, public logMessage: string, public error: Error, public httpStatus: number = INTERNAL_SERVER_ERROR) {
        super(logMessage);
        Logger.error(logMessage);
        Logger.error(error.message);
        console.log(error);
    }

    toJson() {
        return {
            msgCode: this.errorMsgCode,
            msg: this.logMessage,
            originalErrorMsg: this.error.message,
            httpStatus: this.httpStatus
        }
    }
}

export default ExtendableError;
