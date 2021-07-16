import { Router } from 'express';
import { router as AuthRoutes } from './auth.routes';
import { router as UserRoutes } from './user.routes';

const APIRouter = Router({ mergeParams: true });

APIRouter.use('/auth', AuthRoutes);
APIRouter.use('/user', UserRoutes);

export default APIRouter;
