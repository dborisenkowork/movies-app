import {InjectionToken, Provider} from '@angular/core';

export const MOVIES_REST_API_MODULE_CONFIG: InjectionToken<MoviesRESTApiEnvironmentConfiguration> = new InjectionToken<MoviesRESTApiEnvironmentConfiguration>('MoviesRESTApiModule environment configuration');

export interface MoviesRESTApiEnvironmentConfiguration
{
    omdbApiKey: string;
    omdbApiEndpoint: string;
    angularProviders: Array<Provider>;
}
