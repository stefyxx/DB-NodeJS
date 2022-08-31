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
//export const aQuery = "SELECT \"id\",\"name\",\"location\",\"locationType\" FROM \"gtfsStops\"WHERE \"agencyId\" = 'stibmivb' LIMIT 10"; 

//JOIN

//export const aQuery = "SELECT * FROM \"gtfsStops\" JOIN \"gtfsRoutes\" ON \"gtfsStops.locationType\" = \"gtfsRoutes.type\" LIMIT 10"; //non funziona, il primo é un number, il secondo una stringa
//export const aQuery = "SELECT \"locationType\" FROM \"gtfsStops\" LIMIT 10"; 

//GTFS Routes > GTFS Trips > GTFS StopTimes > GTFS stops

    //1) GTFS Routes > GTFS Trips >
    //export const aQuery = "SELECT * FROM \"gtfsTrips\" LIMIT 10";
    /*
        id: 'stibmivb:52',
        tsCreatedAt: 2022-08-22T00:00:47.483Z,
        agencyId: 'stibmivb',
        lastUpdated: 2022-08-21T01:15:05.000Z,
    ->     routeId: 'stibmivb:52',
        serviceId: 'stibmivb:247069601',
        shapeId: 'stibmivb:056b0023',
        headsign: 'BUDA',
    ->  shortName: '56',
        directionId: '0',
        blockId: '9123319',
        wheelchairAccessible: null,
        type: '3',
        bikesAllowed: null,
        entityType: 'GtfsRoute',
    ->    longName: 'SCHUMAN - BUDA',
        description: '',
        line: null,
        color: 'ED7807',
        textColor: 'FFFFFF',
        url: ''
    */

//export const aQuery = "SELECT * FROM \"gtfsTrips\" JOIN \"gtfsRoutes\" ON \"gtfsTrips\".\"routeId\" = \"gtfsRoutes\".\"id\" WHERE \"gtfsRoutes\".\"agencyId\" = 'stibmivb' LIMIT 10";

    //2)GTFS Trips > GTFS gtfsStopTimes >
/*
    id: 'nmbssncb:88____:049::8895802:8892601:12:2530:20221027-7-8895430',
    tsCreatedAt: 2022-08-22T00:00:33.731Z,
    agencyId: 'nmbssncb',
    lastUpdated: 2022-08-21T04:02:30.000Z,
    ->  stopId: 'nmbssncb:8895430',
    tripId: 'nmbssncb:88____:049::8895802:8892601:12:2530:20221027',
    arrivalTime: PostgresInterval { hours: 24, minutes: 33 },
    departureTime: PostgresInterval { hours: 24, minutes: 33 },
    stopSequence: 7,
    stopHeadsign: '',
    pickupType: 0,
    dropOffType: 0,
    shapeDistTraveled: null,
    entityType: 'GtfsStopTime'*/ 
//export const aQuery = "SELECT * FROM \"gtfsStopTimes\" LIMIT 10";

//export const aQuery = "SELECT * FROM \"gtfsStopTimes\" JOIN \"gtfsTrips\" ON \"gtfsTrips\".\"id\" = \"gtfsStopTimes\".\"tripId\"  WHERE \"gtfsTrips\".\"agencyId\" = 'delijn' LIMIT 10";

    //3) GTFS StopTimes > GTFS stops
//export const aQuery = "SELECT * FROM \"gtfsStops\" WHERE \"agencyId\" = 'stibmivb' LIMIT 10";
//export const aQuery = "SELECT \"id\",\"name\",\"location\",\"locationType\" FROM \"gtfsStops\"WHERE \"agencyId\" = 'stibmivb' LIMIT 10"; 
//export const aQuery = "SELECT * FROM \"gtfsStops\" JOIN \"gtfsStopTimes\" ON \"gtfsStops\".\"id\" = \"gtfsStopTimes\".\"stopId\" WHERE \"gtfsStopTimes\".\"agencyId\" = 'stibmivb' LIMIT 10";

//GTFS Routes > GTFS Trips > GTFS StopTimes > GTFS stops
export const aQuery = "SELECT \"gtfsRoutes\".\"id\" AS \"routeID\",\"gtfsRoutes\".\"shortName\",\"gtfsRoutes\".\"longName\",\"gtfsStops\".\"id\" AS \"stopID\",\"gtfsStops\".\"name\",\"gtfsStops\".\"locationType\" FROM \"gtfsRoutes\" LEFT JOIN \"gtfsTrips\" ON \"gtfsTrips\".\"routeId\" = \"gtfsRoutes\".\"id\" LEFT JOIN \"gtfsStopTimes\" ON \"gtfsTrips\".\"id\" = \"gtfsStopTimes\".\"tripId\" LEFT JOIN \"gtfsStops\" ON \"gtfsStops\".\"id\" = \"gtfsStopTimes\".\"stopId\" LIMIT 10";

//WHERE \"gtfsRoutes\".\"name\" ='LEMONNIER'


