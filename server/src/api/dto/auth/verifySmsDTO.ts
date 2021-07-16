import { IsEmail, IsString } from 'class-validator';

export class VerifySmsDTO {

	@IsString()
	@IsEmail()
	email: string;

	@IsString()
	verificationCode: string;
}
