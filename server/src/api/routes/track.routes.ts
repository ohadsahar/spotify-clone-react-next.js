import { Router } from 'express';
import { findLyrics } from '../controllers/track.controller';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { GetLyricsDTO } from '../dto/track/getLyricsDTO';

export const router = Router();

router.get('/lyrics', validationMiddleware(GetLyricsDTO), findLyrics);
