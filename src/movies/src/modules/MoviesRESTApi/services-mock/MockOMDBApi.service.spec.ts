import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {MOVIES_REST_API_MODULE_CONFIG} from '../models/MoviesRESTApiEnvironmentConfiguration.model';

import {MoviesRESTApiConfigurationService} from '../internal/MoviesRESTApiConfiguration.service';

import {MockOMDBApiService} from './MockOMDBApi.service';

import {OMDB_SEARCH_FIXTURE, omdbSearchFixture} from '../fixtures/omdb-search.fixture';
import {OMDBApiSearchResponseError} from '../services/OMDBApi.service';

describe('MoviesRESTApi/services-mock/MockOMDBApi', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: MOVIES_REST_API_MODULE_CONFIG,
                    useValue: {
                        omdbApiKey: 'demo',
                        omdbApiEndpoint: 'http://0.0.0.0/',
                    },
                },
                {
                    provide: OMDB_SEARCH_FIXTURE,
                    useValue: omdbSearchFixture,
                },
                MoviesRESTApiConfigurationService,
                MockOMDBApiService,
            ],
        }).compileComponents();
    });

    it('will returns correct response in case if 1 movie found', inject([MockOMDBApiService], (service: MockOMDBApiService) => {
        service.search({ filmTitle: 'Bar' })
            .subscribe(next => {
                expect(next.Search.length).toBe(1);
                expect(next.totalResults).toBe(1);
            });
    }));

    it('will returns correct response in case if several movies found', inject([MockOMDBApiService], (service: MockOMDBApiService) => {
        service.search({ filmTitle: 'Foo' })
            .subscribe(next => {
                expect(next.Search.length).toBe(2);
                expect(next.totalResults).toBe(2);
            });
    }));

    it('will return error in case no movies was found', inject([MockOMDBApiService], (service: MockOMDBApiService) => {
        service.search({ filmTitle: 'NoMoviesShouldBeFound' })
            .subscribe(undefined, (error: OMDBApiSearchResponseError) => {
                expect(error.Response).toBe('False');
                expect(error.Error).toBe('Movie not found!');
            });
    }));

    it('will return error in case no title provided', inject([MockOMDBApiService], (service: MockOMDBApiService) => {
        service.search({ filmTitle: '' })
            .subscribe(undefined, (error: OMDBApiSearchResponseError) => {
                expect(error.Response).toBe('False');
                expect(error.Error).toBe('No film title provided.');
            });
    }));
});
