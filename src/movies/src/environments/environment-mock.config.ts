import {ENVIRONMENT, EnvironmentConfiguration} from './environments';

// noinspection JSUnusedGlobalSymbols
export const environment: EnvironmentConfiguration = {
    env: ENVIRONMENT.Mock,
    angular: {
        enableProductionMode: false,
        enableRouterDebug: false,
    },
    modules: {
        MoviesApp: {},
        MoviesRESTApi: {
            omdbApiEndpoint: '',
        },
    },
};
