/*
SQL query : ' pour les values
            ” pour les colonnes

ex: SELECT * FROM "gtfsRoutes" WHERE "agencyId" = 'delijn' LIMIT 10

*/

//export const aQuery = "SELECT * FROM \"gtfsRoutes\"WHERE \"agencyId\" = 'delijn' LIMIT 10"; 
/*
    id: 'delijn:64280',
    tsCreatedAt: 2022-08-22T00:00:30.338Z,
    agencyId: 'delijn',
    lastUpdated: 2022-08-21T18:13:01.000Z,
    shortName: 'PM',
    longName: 'Pendel Malinas',
    description: 'Malinas - Mechelen Station/Mechelen Station - Malinas',
    type: '3',
    line: null,
    color: 'FFCCAA',
    textColor: '000000',
    url: '',
    entityType: 'GtfsRoute'
*/
//export const aQuery = "SELECT \"id\",\"shortName\",\"longName\",\"description\" FROM \"gtfsRoutes\"WHERE \"agencyId\" = 'delijn' LIMIT 10"; 
//export const aQuery = "SELECT * FROM \"gtfsStops\" LIMIT 10";
/*
    id: 'tec:s-laforeteglise',
    tsCreatedAt: 2022-08-22T00:21:31.176Z,
    agencyId: 'tec',
    lastUpdated: null,
    name: 'LAFORET Eglise',
    code: null,
    zoneId: null,
    description: null,
    location: '0101000020E6100000E1D05B3CBCB713404E0AF31E67EE4840',
    url: null,
    locationType: 1,
    parentStation: null,
    platformCode: null,
    stopTimezone: null,
    wheelchairBoarding: null,
    entityType: 'GtfsStop'*/
export const aQuery = "SELECT \"id\",\"name\",\"location\",\"locationType\" FROM \"gtfsStops\"WHERE \"agencyId\" = 'stibmivb' LIMIT 10"; 

//JOIN

//export const aQuery = "SELECT * FROM \"gtfsStops\" JOIN \"gtfsRoutes\" ON \"gtfsStops.locationType\" = \"gtfsRoutes.type\" LIMIT 10"; 
//export const aQuery = "SELECT \"locationType\" FROM \"gtfsStops\" LIMIT 10"; 

//GTFS Routes > GTFS Trips > GTFS Stoptimes > GTFS stops