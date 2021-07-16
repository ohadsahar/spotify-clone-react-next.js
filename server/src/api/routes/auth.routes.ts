import { Router } from 'express';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { SendOtpDTO } from '../dto/auth/sendOtpDTO';
import { sendOTP, verifySms } from '../controllers/auth.controller';
import { VerifySmsDTO } from '../dto/auth/verifySmsDTO';

export const router = Router();

router.post('/sendOtp', validationMiddleware(SendOtpDTO), sendOTP);
router.post('/verifySms', validationMiddleware(VerifySmsDTO), verifySms);


