import {ENVIRONMENT, EnvironmentConfiguration} from './environments';

import {OMDBApiService} from '../modules/MoviesRESTApi/services/OMDBApi.service';
import {MockOMDBApiService} from '../modules/MoviesRESTApi/services-mock/MockOMDBApi.service';
import {OMDB_SEARCH_FIXTURE, omdbSearchFixture} from '../modules/MoviesRESTApi/fixtures/omdb-search.fixture';

// noinspection JSUnusedGlobalSymbols
export const environment: EnvironmentConfiguration = {
    env: ENVIRONMENT.Test,
    angular: {
        enableProductionMode: false,
        enableRouterTracing: false,
    },
    modules: {
        MoviesApp: {},
        MoviesRESTApi: {
            omdbApiKey: '<none>',
            omdbApiEndpoint: '<none>',
            angularProviders: [
                { provide: OMDBApiService, useClass: MockOMDBApiService },
                { provide: OMDB_SEARCH_FIXTURE, useValue: omdbSearchFixture },
            ],
        },
    },
};
