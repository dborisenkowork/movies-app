import {ENVIRONMENT, EnvironmentConfiguration} from './environments';

// noinspection JSUnusedGlobalSymbols
export const environment: EnvironmentConfiguration = {
    env: ENVIRONMENT.Mock,
    angular: {
        enableProductionMode: false,
        enableRouterTracing: false,
    },
    modules: {
        MoviesApp: {},
        MoviesRESTApi: {
            omdbApiEndpoint: '',
        },
    },
};
