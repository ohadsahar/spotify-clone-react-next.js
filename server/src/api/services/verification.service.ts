import { Service } from 'typedi';
import { Verification } from '../models/verification.model';
import { SendOtpDTO } from '../dto/auth/sendOtpDTO';
import * as chance from 'chance';
import { createQueryBuilder } from 'typeorm';
import { VerifySmsDTO } from '../dto/auth/verifySmsDTO';
import moment from 'moment';

@Service()
export class VerificationService {

	async createVerificationCode(sendOtpDTO: SendOtpDTO) {
		const pool = '0123456789';
		const verificationCode = new chance.Chance().string({ length: 6, pool: pool });
		const verification = new Verification();
		verification.email = sendOtpDTO.email;
		verification.verificationCode = verificationCode;
		await Verification.create(verification).save();
		return verificationCode;
	}

	async getVerificationCode(verifySmsDTO: VerifySmsDTO) {
		const d = new Date();
		const startTime = moment(d).subtract(1000, 'minutes').toDate();
		return await createQueryBuilder('Verification')
			.where('Verification.email = :email', { email: verifySmsDTO.email })
			.andWhere('Verification._createdAt >= :startTime', { startTime: startTime })
			.andWhere('Verification._createdAt <= :endTime', { endTime: d })
			.andWhere('Verification.verificationCode = :code', { code: verifySmsDTO.verificationCode })
			.getOne() as any;
	}
}
