import { Request, Response } from 'express';
import { Container } from 'typedi';
import { ResHandlerService } from '../services/res-handler.service';

const resService = Container.get(ResHandlerService);

export const me = (req: Request, res: Response) => {
	resService.handleSuccess(res, req.user);
};
