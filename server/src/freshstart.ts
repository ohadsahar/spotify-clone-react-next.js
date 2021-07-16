// import bootstrapDb from "./config/db.config";
// import {initJWT} from "./config/jwt.config";
// import Logger from "./config/logger.config";
// import {Container} from "typedi";
// import {CountryService} from "./api/services/country.service";
// import {ChannelService} from "./api/services/channel.service";
// import {TvShowService} from "./api/services/tvShow.service";
// import {EChannelType} from "./api/dto/util/enums";

// const countryService = Container.get(CountryService);
// const channelService = Container.get(ChannelService);
// const tvShowService = Container.get(TvShowService);

// const countries = [
//     {name: 'Israel'},
//     {name: 'USA'}
// ];

// const channels = [
//     {name: 'ערוץ 12', type: EChannelType.core, country: 1},
//     {name: 'ערוץ 13', type: EChannelType.core, country: 1},
//     {name: 'CNN', type: EChannelType.core, country: 2},
//     {name: 'AXN', type: EChannelType.core, country: 2},
// ];

// const tvShows = [
//     {tvShowName: 'ארץ נהדרת', startHour: '12:50', endHour: '12:52', country: 1, channel: 1},
//     {tvShowName: 'חתונה ממבט ראשון', startHour: '12:52', endHour: '12:54', country: 1, channel: 1},
//     {tvShowName: 'Ninja USA', startHour: '2021-01-08 17:01:52.291766+02', endHour: '2021-01-08 17:01:52.291766+02', country: 2, channel: 4},
// ];

// async function init() {
//     let db = await bootstrapDb();
//     initJWT()
//     if (db) {
//         Logger.info("DB is connected");
//         await startFreshStart();
//     } else {
//         Logger.error("Cannot connect to db. this could be fatal");
//     }
// }

// async function startFreshStart() {

//     Logger.info('Create Countries');
//     for (const country of countries) {
//         await countryService.upsert(country);
//     }
//     Logger.info('Created Countries');

//     Logger.info('Create Channels');
//     for (const channel of channels) {
//         await channelService.upsert(channel);
//     }
//     Logger.info('Created Channels');

//     Logger.info('Create Tv Shows');
//     for (const tvShow of tvShows) {
//         await tvShowService.upsert(tvShow);
//     }
//     Logger.info('Created Tv Shows');
// }

// init();