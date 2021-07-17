import { Router } from 'express';
import { login, refreshLogin } from '../controllers/auth.controller';

export const router = Router();

router.post('/login', login);
router.post('/refreshLogin', refreshLogin);


