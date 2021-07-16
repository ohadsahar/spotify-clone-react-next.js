import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import nocache from 'nocache';
import passport from 'passport';
import 'reflect-metadata';
import APIRouter from './api/routes';
import bootstrapDb from './config/db.config';
import getConfig from './config/env.config';
import { initJWT } from './config/jwt.config';
import Logger from './config/logger.config';

// Load configurations
const config = getConfig();
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const socket = require('./socket');

Logger.info('Starting server...');
Logger.info(`Env: ${config.name}`);

// Express configuration

app.use(helmet());
app.use(cors());
app.use(nocache());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(config.logLevel || 'tiny'));

app.use(APIRouter);

async function init() {
	let db = await bootstrapDb();
	initJWT();
	if (db) {
		Logger.info('DB is connected');
		Logger.info(config.dbHost);
	} else {
		Logger.error('Cannot connect to db. this could be fatal');
	}
	socket(io);
	http.listen(process.env.PORT || config.port || 8096,
		() =>
			Logger.info(`Server listening on port ${process.env.PORT || config.port || 8096}. Enjoy!`));
}

init();
export default app;
