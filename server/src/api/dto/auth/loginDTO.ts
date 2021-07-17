import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {

	@IsString()
	code: string;
}
