import { Router } from 'express';
import { router as AuthRoutes } from './auth.routes';
import {router as TrackRoutes} from './track.routes';

const APIRouter = Router({ mergeParams: true });

APIRouter.use('/auth', AuthRoutes);
APIRouter.use('/track', TrackRoutes);

export default APIRouter;
