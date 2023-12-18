import sql from 'mssql';
import config from '../configs/config.js';

export async function connect() {
  try {
    sql.connect(config.sql, (err) => {
      if (err) {
        console.error('Error connection to SQL Server', err);
      } else {
        console.log('Connection successfully :)');
      }
    });
    console.log('Database connection successful');
  } catch (error) {
    console.error(`Error connecting to database: ${JSON.stringify(error)}`);
  }
}
