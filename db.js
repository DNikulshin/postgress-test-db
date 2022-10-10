const Pool = require('pg').Pool
const pool = new Pool( {
    user: 'dmn',
    password: '@Valeria09',
    host: 'localhost',
    port: 5432,
    database: 'test_base'

})


module.exports = pool