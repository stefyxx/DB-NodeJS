export const configuration ={
    PGHOST :'staging-readonly1-do-user-211558-0.b.db.ondigitalocean.com',
    PGDATABASE : 'gis',     //process.env.USER or 'mydb'
    PGUSER :'gis',      //process.env.USER or database.server.com,
    PGPASSWORD : 'gis',     //null or secretpassword,
    PGPORT : 25060,
    //mode STRICT:  
    PGSTRICT: {
        rejectUnauthorized: false,
    }        
}