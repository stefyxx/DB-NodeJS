// 1-Collegare node.js al server PostgreSQL:
const pg = require('pg');
//const connectionString = 'postgresql://doadmin:@staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require';

async function myConnection(query) {
    const client = new pg.Client({
        user: 'gis',
        //IMPORTANTE// NO http or https
        host: 'staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com',
        database: 'gis',
        password: 'gis',
        port: 25060,
        //mode STRICT:
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
            /*
            Result {
                command: 'SELECT',
                rowCount: 10,
                oid: null,
                rows: [ {objResult},{objResult}, ... 10 obj come da query],
                fields: [
                    Field {name: 'id', columnID: 1,......, format: 'text'},
                    Field {},
                    Field {},
                    ...
                ],
                Field -> ogni Field é una colonna (quindi prima colonna := columnID: 1, decima colonna := columnID: 10 ) con il suo nome e le sue caratteristiche
                In altre parole, OGNI FIELD é UNA PROPRIETà del mio 'objResult' di 'rows'; -> 
                Quindi avro' tanti Field quane properties in 'objResult'
                
                C’est un objet exposé par la librairie que tu utilises pour intéragir avec la DB (node-pg)

                _parsers: [ [Function: noParse],[Function: parseDate], ...],
                _types: TypeOverrides {
                    _types: { getTypeParser: [Function: getTypeParser], setTypeParser: [Function: setTypeParser],
                        arrayParser: [Object], builtins: [Object]},
                    text: {},
                    binary: {}
                },
            RowCtor: null,
            rowAsArray: false
        }
        */
        })
        .catch(function error(err) {
            console.error('failure', err)
        })
}

ProcessData();