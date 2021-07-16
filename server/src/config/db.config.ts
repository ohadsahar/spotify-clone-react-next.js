import { createConnection } from 'typeorm';
import Logger from './logger.config';
import ormConfig from "./orm.config";

const bootstrapDb = async () => {
  let conn;
  try {
    conn = await createConnection({...ormConfig, type: "postgres"});
  } catch (e) {
    conn = false;
    Logger.error(e.message);
    
  }
  return conn;
};

export default bootstrapDb;
