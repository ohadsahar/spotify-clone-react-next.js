import {INTERNAL_SERVER_ERROR} from "http-status-codes";
import ExtendableError from "./error.error";

export class GeneralServerError extends ExtendableError {

    constructor(errorMsgCode: string, logMessage: string, error: Error) {
        super(errorMsgCode, logMessage, error, INTERNAL_SERVER_ERROR)
    }
}

