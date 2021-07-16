import { Router } from 'express';
import { isAuthenticatedGuard } from '../guards';
import { me } from '../controllers/user.controller';

export const router = Router()
	.post('/me', isAuthenticatedGuard, me);

