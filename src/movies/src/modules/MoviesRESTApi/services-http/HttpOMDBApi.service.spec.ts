import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestRequest} from '@angular/common/http/testing/src/request';

import {MoviesRESTApiConfigurationService} from '../internal/MoviesRESTApiConfiguration.service';

import {HttpOMDBApiService} from './HttpOMDBApi.service';
import {OMDBApiSearchResponse200, OMDBApiSearchResponseError} from '../services/OMDBApi.service';

import {MOVIES_REST_API_MODULE_CONFIG} from '../models/MoviesRESTApiEnvironmentConfiguration.model';

describe('MoviesRESTApi/services-http/HttpOMDBApiService', () => {
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
                MoviesRESTApiConfigurationService,
                HttpOMDBApiService,
            ],
        }).compileComponents();
    });

    it('search // will response correctly on valid query', inject([HttpTestingController, HttpOMDBApiService], (http: HttpTestingController, service: HttpOMDBApiService) => {
        service.search({ filmTitle: 'Foo' })
            .subscribe(next => {
                expect(next.Response).toBe('True');
                expect(next.totalResults).toBe(1);
                expect(next.Search.length).toBe(1);
                expect(next.Search[0].Title).toBe('Foo');
            });

        const testRequest: TestRequest = http.expectOne(req => {
            return req.method === 'GET'
                && req.url === 'http://0.0.0.0/'
            ;
        });

        testRequest.flush(<OMDBApiSearchResponse200>{
            Response: 'True',
            Search: [
                {
                    imdbID: 'none',
                    Poster: 'poster',
                    Title: 'Foo',
                    Type: 'movie',
                    Year: '2000',
                },
            ],
            totalResults: 1,
        });

        http.verify();
    }));

    it('search // can handle with expected error (with 200 status)', inject([HttpTestingController, HttpOMDBApiService], (http: HttpTestingController, service: HttpOMDBApiService) => {
        service.search({ filmTitle: 'Foo' })
            .subscribe(undefined, (error: OMDBApiSearchResponseError) => {
                expect(error.Response).toBe('False');
                expect(error.Error).toBe('Movie not found!');
            });

        const testRequest: TestRequest = http.expectOne(req => {
            return req.method === 'GET'
                && req.url === 'http://0.0.0.0/'
                ;
        });

        testRequest.flush(<OMDBApiSearchResponseError>{
            Response: 'False',
            Error: 'Movie not found!',
        });

        http.verify();
    }));

    it('search // can handle with unexpected error (non-200 status)', inject([HttpTestingController, HttpOMDBApiService], (http: HttpTestingController, service: HttpOMDBApiService) => {
        service.search({ filmTitle: 'Foo' })
            .subscribe(undefined, (error: OMDBApiSearchResponseError) => {
                expect(error.Response).toBe('False');
                expect(error.Error).toBe('Movie not found!');
            });

        const testRequest: TestRequest = http.expectOne(req => {
            return req.method === 'GET'
                && req.url === 'http://0.0.0.0/'
                ;
        });

        testRequest.flush(<OMDBApiSearchResponseError>{
            Response: 'False',
            Error: 'Movie not found!',
        }, { status: 404, statusText: '404 NOT FOUND' });

        http.verify();
    }));

    it('search // will not send request in case no title provided', inject([HttpTestingController, HttpOMDBApiService], (http: HttpTestingController, service: HttpOMDBApiService) => {
        service.search({ filmTitle: '' })
            .subscribe(undefined, (error: OMDBApiSearchResponseError) => {
                expect(error.Response).toBe('False');
                expect(error.Error).toBe('No film title provided');
            });

        http.expectNone(req => {
            return req.method === 'GET'
                && req.url === 'http://0.0.0.0/'
                ;
        });

        http.verify();
    }));
});
