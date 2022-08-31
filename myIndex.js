import { configuration } from "./config.js";
import { aQuery } from "./aQuery";

const pg = require('pg');


async function myConnection(query) {
    const client = new pg.Client({
        user: configuration.PGUSER,
        host: configuration.PGHOST,
        database: configuration.PGDATABASE,
        password: configuration.PGPASSWORD,
        port: configuration.PGPORT,
        ssl: configuration.PGSTRICT,

    })
    await client.connect();
    const result = await client.query(query);
    await client.end();
    return result;
}

let myArray = [];
function ProcessData(query) {
    myConnection(query)
    .then(function success(result) {
        // key rows : [{},{},..]
        //console.log(result.rows)
        const res= result.rows;
        console.log(res);
        if(res){

            res.forEach(element => {
                const myObj = {
                    myId : element.id,
                    myStopName: element.name,
                    myLocation : element.location
                }
            
                myArray.push(myObj)
            });
            
            myArray.forEach(el=>{
                console.log(el.myLocation)
            })
        }
        
    })
    .catch(function error(err) {
        console.error('failure', err)
    })
}

ProcessData(aQuery);
//id\",\"name\",\"location\",\"locationType
//const result = ProcessData(aQuery);
