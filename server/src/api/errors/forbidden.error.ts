import { FORBIDDEN } from "http-status-codes";
import ExtendableError from "./error.error";

export class ForbiddenError extends ExtendableError {

    constructor(errorMsgCode: string, logMessage: string, error: Error) {
        super(errorMsgCode, logMessage, error, FORBIDDEN)
    }
}

