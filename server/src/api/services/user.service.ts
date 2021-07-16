import { Service } from 'typedi';
import { User } from '../models/user.model';
import { SendOtpDTO } from '../dto/auth/sendOtpDTO';

@Service()
export class UserService {

	async register(sendOtpDTO: SendOtpDTO): Promise<User> {
		const existsUser = await this.getUserByEmail(sendOtpDTO.email);
		if (!existsUser) {
			const user = new User();
			user.email = sendOtpDTO.email;
			return await User.create(user).save();
		} else {
			return await User.create(existsUser).save();
		}
	}

	async getUserByEmail(email: string): Promise<User> {
		return await User.findOne({ email: email });
	}

}
