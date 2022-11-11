const Pool = require('pg').Pool;

const pool = new Pool({
    user : 'postgres',
    password:'Balatarin21',
    host:'localhost',
    port:'2000',
    database:'testingskills'
});

module.exports = pool;