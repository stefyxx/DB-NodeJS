// 1-Collegare node.js al server PostgreSQL:
const { Client } = require('pg');
//const connectionString = 'postgresql://doadmin:@staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require';

const main = async (app) => {
    const client = new Client({
        user: 'gis',
        host: 'staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com',
        database: 'gis',
        password: 'gis',
        port: 5432
    })
    await client.connect();
    console.log('I am');
    await client.end();
};

const mainConnectionDB = {
    name: 'myConnectionDB',
    program: main,
};

mainConnectionDB


