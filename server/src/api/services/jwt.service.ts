import { Service } from 'typedi';
import getConfig from '../../config/env.config';
import * as jwt from 'jsonwebtoken';

@Service()
export class JwtService {

	createJWT(payload, expiration?: string) {
		let token_expires = getConfig().jwt.token_expires;
		if (expiration)
			token_expires = expiration;
		return jwt.sign({ id: payload }, getConfig().jwt.key, { expiresIn: token_expires });
	}
}
