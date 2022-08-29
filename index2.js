//import { configuration } from "./config";
//module.exports = require('./config.js')

/*const configuration ={
    PGHOST :'http://staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com/',
    PGUSER :process.env.USER , //gis
    PGPASSWORD : gis,     //null or secretpassword,
    PGDATABASE : gis,     //process.env.USER or 'mydb'
    PGPORT : 3211,         //5432 3211
}*/
// 1-Collegare node.js al server PostgreSQL:
const { Pool, Client } = require('pg');
const connectionString = 'postgresql://doadmin:@staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require';


const pool = new Pool({
    /*user: configuration.PGUSER,
    host: configuration.PGHOST,
    database: configuration.PGDATABASE,
    password: configuration.PGPASSWORD,
    port: configuration.port,*/
    connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
    //console.log(err, res);
    console.log('err pool_query: ', err);
    console.log('res pool_query: ', res);
    pool.end()
})
const client = new Client({
    /*user: configuration.PGUSER,
    host: configuration.PGHOST,
    database: configuration.PGDATABASE,
    password: configuration.PGPASSWORD,
    port: configuration.port,*/
    connectionString,
    
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
    //console.log(err, res);
    console.log('err client_query: ', err);
    console.log('res client_query: ', res);
    client.end()
})


