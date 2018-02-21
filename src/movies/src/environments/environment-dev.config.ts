import {ENVIRONMENT, EnvironmentConfiguration} from './environments';

import {OMDBApiService} from '../modules/MoviesRESTApi/services/OMDBApi.service';
import {HttpOMDBApiService} from '../modules/MoviesRESTApi/services-http/HttpOMDBApi.service';

export const environment: EnvironmentConfiguration = {
    env: ENVIRONMENT.Dev,
    angular: {
        enableProductionMode: false,
        enableRouterTracing: false,
    },
    modules: {
        MoviesApp: {},
        MoviesRESTApi: {
            omdbApiKey: 'f830aff6',
            omdbApiEndpoint: 'http://www.omdbapi.com/',
            angularProviders: [
                { provide: OMDBApiService, useClass: HttpOMDBApiService },
            ],
        },
    },
};
