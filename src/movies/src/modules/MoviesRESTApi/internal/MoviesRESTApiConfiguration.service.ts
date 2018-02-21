import {Inject, Injectable} from '@angular/core';

import {MOVIES_REST_API_MODULE_CONFIG, MoviesRESTApiEnvironmentConfiguration} from '../models/MoviesRESTApiEnvironmentConfiguration.model';

@Injectable()
export class MoviesRESTApiConfigurationService
{
    constructor(
        @Inject(MOVIES_REST_API_MODULE_CONFIG) private moduleConfig: MoviesRESTApiEnvironmentConfiguration,
    ) {}

    get apiKey(): string {
        return this.moduleConfig.omdbApiKey;
    }

    get apiEndpoint(): string {
        return this.moduleConfig.omdbApiEndpoint;
    }
}
