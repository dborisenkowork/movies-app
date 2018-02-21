import {MoviesAppEnvironmentConfiguration} from '../modules/MoviesApp/models/MoviesAppEnvironmentConfiguration.model';
import {MoviesRESTApiEnvironmentConfiguration} from '../modules/MoviesRESTApi/models/MoviesRESTApiEnvironmentConfiguration.model';

export enum ENVIRONMENT
{
    Dev = <any>'dev',
    Mock = <any>'prod',
}

export interface EnvironmentConfiguration
{
    env: ENVIRONMENT;
    angular: {
        enableProductionMode: boolean;
        enableRouterDebug: boolean;
    };
    modules: {
        MoviesApp: MoviesAppEnvironmentConfiguration;
        MoviesRESTApi: MoviesRESTApiEnvironmentConfiguration;
    };
}
