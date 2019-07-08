const { Pool } = require('pg');
const pool = new Pool({ database: 'test' });

pool.query('SELECT * from quotes', (err, res) => {
  console.log(res['rows']);
  pool.end();
});
