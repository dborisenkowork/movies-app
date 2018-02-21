import {ENVIRONMENT, EnvironmentConfiguration} from './environments';

export const environment: EnvironmentConfiguration = {
    env: ENVIRONMENT.Dev,
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
