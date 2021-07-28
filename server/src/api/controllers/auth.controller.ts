import { Request, Response } from 'express';
import { Container } from 'typedi';
import { AuthService } from '../services/auth.service';
import { ResHandlerService } from '../services/res-handler.service';
import { plainToClass } from 'class-transformer';
import { LoginDTO } from '../dto/auth/loginDTO';

const authService = Container.get(AuthService);
const resService = Container.get(ResHandlerService);

export const login = async (req: Request, res: Response) => {
	try {

		const transformed = plainToClass(LoginDTO, req.body);
		const result = await authService.login(transformed);
		return resService.handleSuccess(res, result);
	} catch (e) {
		return resService.handleError(res, e);
	}
};

export const refreshLogin = async (req: Request, res: Response) => {
	try {
		const transformed = plainToClass(LoginDTO, req.body);
		const result = await authService.refreshLogin(transformed);
		return resService.handleSuccess(res, result);
	} catch (e) {
		return resService.handleError(res, e);
	}
};








