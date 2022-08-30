// 1-Collegare node.js al server PostgreSQL:
const pg = require('pg');
//const connectionString = 'postgresql://doadmin:@staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require';

async function myConnection(query) {
    const client = new pg.Client({
        user: 'gis',
        host: 'staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com',
        database: 'gis',
        password: 'gis',
        port: 25060,
        ssl: {
            rejectUnauthorized: false,
        }
        //connectionString,
    })
    await client.connect();
    const result = await client.query(query);
    await client.end();
    return result;
}
/*
les colonnes sont CASE SENSITIVE en SQL :
' pour les values
” pour les colonnes

Et alors: 
SELECT * FROM "gtfsRoutes" WHERE "agencyId" = 'delijn' LIMIT 10

*/
function ProcessData() {
    myConnection("SELECT * FROM \"gtfsRoutes\"WHERE \"agencyId\" = 'delijn' LIMIT 10")
        .then(function success(result) {
            console.log(result)
        })
        .catch(function error(err) {
            console.error('failure', err)
        })
}

ProcessData();