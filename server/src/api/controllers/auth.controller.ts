import { Request, Response } from 'express';
import { Container } from 'typedi';
import { AuthService } from '../services/auth.service';
import { ResHandlerService } from '../services/res-handler.service';
import { plainToClass } from 'class-transformer';
import { SendOtpDTO } from '../dto/auth/sendOtpDTO';
import { VerifySmsDTO } from '../dto/auth/verifySmsDTO';

const authService = Container.get(AuthService);
const resService = Container.get(ResHandlerService);

export const sendOTP = async (req: Request, res: Response) => {
	try {
		const transformed = plainToClass(SendOtpDTO, req.body);
		const result = await authService.sendOTP(transformed);
		return resService.handleSuccess(res, result);
	} catch (e) {
		return resService.handleError(res, e);
	}
};

export const verifySms = async (req: Request, res: Response) => {
	try {
		const transformed = plainToClass(VerifySmsDTO, req.body);
		const result = await authService.verifySms(transformed);
		return resService.handleSuccess(res, result);
	} catch (e) {
		return resService.handleError(res, e);
	}
};







