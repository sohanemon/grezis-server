import sql from 'mssql';
// import { sqlConfig } from '../configs/sql.config.js';

export async function connect() {
  try {
    console.log(`Database connecting...`);

    // const poolconnection = await sql.connect(sqlConfig);

    console.log('Database connection successful');
  } catch (error) {
    console.error(`Error connecting to database: ${JSON.stringify(error)}`);
  }
}
