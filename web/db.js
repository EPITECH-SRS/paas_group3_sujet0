const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'postgres',
	password: 'password',
	database: 'postgres_db',
	host: 'db_postgres',
	port: 5432
});

const createTables = async () => {
	await pool.query("CREATE TABLE IF NOT EXISTS data_sample (id SERIAL, message VARCHAR", (error, results) => {
	if (error) {
		console.log('Cannot create tables data_sample: ' + error.message);
		return;
	}
	console.info('table data_sample created');	
	});
}

module.exports = {
  pool,
  createTables,
}
