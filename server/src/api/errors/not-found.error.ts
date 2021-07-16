import { NOT_FOUND } from "http-status-codes";
import ExtendableError from "./error.error";

export class NotFoundError extends ExtendableError {

    constructor(errorMsgCode: string, logMessage: string, error: Error) {
        super(errorMsgCode, logMessage, error, NOT_FOUND)
    }
}