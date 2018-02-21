import {inject, TestBed} from '@angular/core/testing';

import {MoviesRESTApiConfigurationService} from './MoviesRESTApiConfiguration.service';

import {MOVIES_REST_API_MODULE_CONFIG} from '../models/MoviesRESTApiEnvironmentConfiguration.model';

describe('MoviesRESTApi/internal/MoviesRESTApiConfigurationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: MOVIES_REST_API_MODULE_CONFIG,
                    useValue: {
                        omdbApiKey: 'my-demo-key',
                        omdbApiEndpoint: 'http://0.0.0.0/',
                    },
                },
                MoviesRESTApiConfigurationService,
            ],
        }).compileComponents();
    });

    it('returns api key', inject([MoviesRESTApiConfigurationService], (service: MoviesRESTApiConfigurationService) => {
        expect(service.apiKey).toBe('my-demo-key');
    }));

    it('returns api endpoint', inject([MoviesRESTApiConfigurationService], (service: MoviesRESTApiConfigurationService) => {
        expect(service.apiEndpoint).toBe('http://0.0.0.0/');
    }));
});
