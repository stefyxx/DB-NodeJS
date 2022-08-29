// 1-Collegare node.js al server PostgreSQL:
const pg = require('pg');
//const connectionString = 'postgresql://doadmin:@staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require';

async function myConnection(query) {
    const client = new pg.Client({
        user: 'gis',
        host: 'staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com',
        database: 'defaultdb',
        password: 'gis',
        port: 25060
        //connectionString,
    })
    await client.connect();
    const result = await client.query(query);
    await client.end();
    return result;
}

function ProcessData() {
    myConnection('SELECT $1::text as message', ['Hello world!'])
        .then(function success(result) {
            console.log(result)
        })
        .catch(function error(err) {
            console.error('failure', err)
        })
}

ProcessData();