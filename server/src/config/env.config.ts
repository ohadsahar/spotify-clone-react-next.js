import minimist, { ParsedArgs } from 'minimist';
import * as path from 'path';

const argv: ParsedArgs = minimist(process.argv.slice(2));

const constants = {
	jwt: {
		forgot_password_token_expires: '1h',
		token_expires: '365 days',
		key: 'l23@#shfa1340**@dfg009Alk3#Vk_anlj',
		ignoreExpiration: false
	},
	spotifyAPI: {
		uri: 'http://localhost:3005',
		clientID: '88bcc79b09b040c6b8f86b914ddd739f',
		clientSecret: '5c3521ec0d904cad8eefa45f4db81082'
	}
};

export interface IConfig {
	name: string;
	production: boolean;
	logLevel: string;
	serverUrl: string;
	port: number;
	dbHost: string;
	dbPort: number;
	dbUser: string;
	dbPass: string;
	dbName: string;
	uploadDir: string;
	bucketName: string;
	appName: string;
	ssl: boolean;
	spotifyAPI: {
		uri: string;
		clientID: string;
		clientSecret: string
	}
	awsAuth: {
		accessKeyId: string;
		secretAccessKey: string;
	};
	forgotPasswordUrl: string;
	synchronize: boolean;
	logging: boolean;
	dropSchema: boolean;
	jwt: {
		token_expires: string,
		key: string,
		ignoreExpiration: boolean,
		forgot_password_token_expires?: string;
	},

}

let config: any;
const init = () => {
	let envPath = path.join(path.dirname(__dirname), 'env');
	switch (argv.env) {
		case 'prod':
		case 'production':
			config = require(path.join(envPath, 'prod.json'));
			break;
		case 'dev':
		case 'develop':
			config = require(path.join(envPath, 'dev.json'));
			break;
		default:
			config = require(path.join(envPath, 'dev.json'));
			break;
	}
	return Object.assign(config, constants);
};

const getConfig = (): IConfig => {
	return config || init(); //  "exec": "set TS_NODE_TRANSPILE_ONLY=true&ts-node -r tsconfig-paths/register src/app.ts",
};

export default getConfig;
