import { BAD_REQUEST } from "http-status-codes";
import ExtendableError from "./error.error";

export class BadRequestError extends ExtendableError {

    constructor(errorMsgCode: string, logMessage: string, error?: Error) {
        super(errorMsgCode, logMessage, error ? error : new Error(logMessage), BAD_REQUEST)
    }
}
