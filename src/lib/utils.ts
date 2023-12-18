import sql, { ConnectionPool } from 'mssql';
import config from '../configs/config.js';

let connection: ConnectionPool;

export async function connect() {
  try {
    connection = await sql.connect(config.sql);
    console.log('Connection successfully :)');
  } catch (error) {
    console.error(`Error connecting to database: ${JSON.stringify(error)}`);
  }
}

export async function getEmployee() {
  try {
    await connect();
    const request = new sql.Request(connection);
    const res = await request.query('SELECT * FROM employee');
    console.log('🛑 ~ getEmployee ~ res:', res);
  } catch (error) {
    console.error(`Error executing query: ${JSON.stringify(error)}`);
  }
}
