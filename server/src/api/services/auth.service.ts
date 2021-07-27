import { Service } from 'typedi';

import getConfig from '../../config/env.config';
import { LoginDTO } from '../dto/auth/loginDTO';
import SpotifyWebApi from 'spotify-web-api-node';

@Service()
export class AuthService {

	constructor() {
	}

	async login(loginDTO: LoginDTO): Promise<any> {
		const spotifyApi = new SpotifyWebApi({
			redirectUri: getConfig().spotifyAPI.uri,
			clientId: getConfig().spotifyAPI.clientID,
			clientSecret: getConfig().spotifyAPI.clientSecret
		});
		const result = await spotifyApi.authorizationCodeGrant(loginDTO.code);
		return {
			accessToken: result.body.access_token,
			refreshToken: result.body.refresh_token,
			expiresIn: result.body.expires_in
		};
	}

	async refreshLogin(loginDTO: LoginDTO): Promise<any> {
		const spotifyApi = new SpotifyWebApi({
			redirectUri: getConfig().spotifyAPI.uri,
			clientId: getConfig().spotifyAPI.clientID,
			clientSecret: getConfig().spotifyAPI.clientSecret,
			refreshToken: loginDTO.code
		});
		const result = await spotifyApi.refreshAccessToken();
		return {
			accessToken: result.body.access_token,
			refreshToken: result.body.refresh_token,
			expiresIn: result.body.expires_in,
		};
	}

}


