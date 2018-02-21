import {ENVIRONMENT, EnvironmentConfiguration} from './environments';

export const environment: EnvironmentConfiguration = {
    env: ENVIRONMENT.Dev,
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
