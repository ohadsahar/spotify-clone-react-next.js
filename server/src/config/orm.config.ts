import getConfig from './env.config';

const config = getConfig();

const ormConfig = {
	type: 'postgres',
	host: config.dbHost,
	port: config.dbPort,
	username: config.dbUser,
	password: config.dbPass,
	database: config.dbName,
	entities: [],
	ssl: config.ssl,
	synchronize: config.synchronize || false,
	logging: config.logging || false,
	dropSchema: config.dropSchema || false,
};

export = ormConfig;

