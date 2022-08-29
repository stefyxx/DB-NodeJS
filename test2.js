// 1-Collegare node.js al server PostgreSQL:
const { Pool, Client } = require('pg');

const connectionString = 'postgresql://doadmin:@staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require';


const pool = new Pool({
    connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
const client = new Client({
    connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})


