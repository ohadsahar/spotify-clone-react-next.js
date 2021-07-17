import { Request, Response } from 'express';
import { Container } from 'typedi';
import { ResHandlerService } from '../services/res-handler.service';
import { plainToClass } from 'class-transformer';
import { TrackService } from '../services/track.service';
import { GetLyricsDTO } from '../dto/track/getLyricsDTO';

const trackService = Container.get(TrackService);
const resService = Container.get(ResHandlerService);

export const findLyrics = async (req: Request, res: Response) => {
	try {
		const transformed = plainToClass(GetLyricsDTO, req.query);
		const result = await trackService.findLyrics(transformed);
		return resService.handleSuccess(res, result);
	} catch (e) {
		return resService.handleError(res, e);
	}
};









