import { IsEmail, IsString } from 'class-validator';

export class SendOtpDTO {

	@IsString()
	@IsEmail()
	email: string;
}
