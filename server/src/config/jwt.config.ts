import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { ForbiddenError } from '../api/errors';
import getConfig from './env.config';
import Logger from './logger.config';
import { User } from '../api/models/user.model';

const config = getConfig();

export const initJWT = () => {
	Logger.info('Initiating jwt');
	const options = {
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: config.jwt.key,
		ignoreExpiration: config.jwt.ignoreExpiration
	};

	let strategy = new JwtStrategy(options, async function (jwt_payload, done) {
		let userAdmin = await User.findOne({ id: jwt_payload.id });
		if (userAdmin) {
			return done(null, { userAdmin });
		}
		let user = await User.findOne({ id: jwt_payload.id },);
		if (!user) {
			return done(null, false, new ForbiddenError(
				'auth.error.invalid_token',
				'User wasn\'t found',
				new Error('No user with id' + jwt_payload.id)));
		}
		return done(null, { user });
	});

	passport.use(strategy);
};
