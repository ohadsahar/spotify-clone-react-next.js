import {UNAUTHORIZED} from "http-status-codes";
import ExtendableError from "./error.error";

export class UnauthorizedError extends ExtendableError {

    constructor(errorMsgCode: string, logMessage: string, error: Error) {
        super(errorMsgCode, logMessage, error, UNAUTHORIZED)
    }
}

