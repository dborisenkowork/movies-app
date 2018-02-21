import {MoviesAppEnvironmentConfiguration} from '../modules/MoviesApp/models/MoviesAppEnvironmentConfiguration.model';
import {MoviesRESTApiEnvironmentConfiguration} from '../modules/MoviesRESTApi/models/MoviesRESTApiEnvironmentConfiguration.model';

export enum ENVIRONMENT
{
    Dev = <any>'dev',
    Mock = <any>'mock',
    Test = <any>'test',
}

export interface EnvironmentConfiguration
{
    env: ENVIRONMENT;
    angular: {
        enableProductionMode: boolean;
        enableRouterTracing: boolean;
    };
    modules: {
        MoviesApp: MoviesAppEnvironmentConfiguration;
        MoviesRESTApi: MoviesRESTApiEnvironmentConfiguration;
    };
}
