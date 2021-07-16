import { Response } from 'express';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status-codes';
import { Service } from 'typedi';

import ExtendableError from '../errors/error.error';
import { ValidationError } from 'class-validator';

@Service()
export class ResHandlerService {
	constructor() {
	}

	handleError(res: Response, error: ExtendableError, status = INTERNAL_SERVER_ERROR) {
		console.log(error);
		// @ts-ignore
		error.errInUse = error?.code?.includes('ROW_IS_REFERENCED');
		return res.status(error?.httpStatus ? error.httpStatus : status).json({
			error: error,
			success: false,
		});

	}

	handleSuccess(res: Response, data: any, status = OK) {
		return res.status(status).json({
			data,
			success: true
		});
	}

	handleValidationErrors(res: Response, errors: ValidationError[]) {
		let validateFields = errors.map((err: ValidationError, index) => {
			let msg = err.property;
			if (index != errors.length - 1)
				msg += ', ';
			return msg;
		});
		res.status(INTERNAL_SERVER_ERROR).json({
			success: false,
			errors: errors.map((err: ValidationError) => {
				return {
					property: err.property,
					constraints: err.constraints
				};
			}),
			error: {
				errorMsgCode: 'Fields validation error',
				logMessage: `The following fields should be validated: ${validateFields}`
			}
		});
	}
}
