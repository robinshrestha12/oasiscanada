const Pool = require('pg').Pool;

const pool = new Pool({
  user:'robinshrestha',

  host: 'localhost',

  database: 'oasisdatabase',

  password: 'development',

  port: 5432
})

module.exports = pool;