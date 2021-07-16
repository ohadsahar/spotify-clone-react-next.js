import { Service } from 'typedi';
import { SendOtpDTO } from '../dto/auth/sendOtpDTO';
import { EmailService } from './email.service';
import { VerifySmsDTO } from '../dto/auth/verifySmsDTO';
import { User } from '../models/user.model';
import { ForbiddenError } from '../errors';
import { VerificationService } from './verification.service';
import { UserService } from './user.service';
import { JwtService } from './jwt.service';
import { ErrosType } from '../dto/util/enums';

@Service()
export class AuthService {

	constructor(private emailService: EmailService, private verificationService: VerificationService,
	            private userService: UserService, private jwtService: JwtService) {
	}

	async sendOTP(sendOTP: SendOtpDTO): Promise<User> {
		const verificationCode = await this.verificationService.createVerificationCode(sendOTP);
		await this.emailService.sendMail(sendOTP.email, '', 'sendOTP', null,
			{ verificationCode: verificationCode });
		return this.userService.register(sendOTP);

	}

	async verifySms(verifySmsDTO: VerifySmsDTO): Promise<any> {
		const verificationCode = await this.verificationService.getVerificationCode(verifySmsDTO);
		if (verificationCode) {
			const existUser = await this.userService.getUserByEmail(verifySmsDTO.email);
			return this.jwtService.createJWT(existUser.id);
		} else {
			throw new ForbiddenError(ErrosType.FORBIDDEN,
				'Wrong code', new Error('Cannot verify sms'));
		}
	}
}


