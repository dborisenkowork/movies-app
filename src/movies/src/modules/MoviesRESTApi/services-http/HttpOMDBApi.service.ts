import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/shareReplay';

import {MoviesRESTApiConfigurationService} from '../internal/MoviesRESTApiConfiguration.service';

import {OMDBApiSearchRequest, OMDBApiSearchResponse200, OMDBApiSearchResponseError, OMDBApiService} from '../services/OMDBApi.service';

@Injectable()
export class HttpOMDBApiService implements OMDBApiService
{
    constructor(
        private http: HttpClient,
        private config: MoviesRESTApiConfigurationService,
    ) {}

    search(request: OMDBApiSearchRequest): Observable<OMDBApiSearchResponse200> {
        return Observable.create(observer => {
            const unsubscribe$: Subject<void> = new Subject<void>();

            if (request.filmTitle.length === 0) {
                observer.error(<OMDBApiSearchResponseError>{
                    Error: 'No film title provided',
                    Response: 'False',
                });
            } else {
                this.http.get(`${this.config.apiEndpoint}`, {
                    params: {
                        s: request.filmTitle,
                        apiKey: this.config.apiKey,
                    },
                })
                    .takeUntil(unsubscribe$)
                    .subscribe(
                        (response: OMDBApiSearchResponse200 | OMDBApiSearchResponseError) => {
                            if (response.Response === 'True') {
                                observer.next(response);
                            } else {
                                observer.error(response);
                            }
                        },
                        (error: HttpErrorResponse) => {
                            if (error.error && error.error.Error !== undefined) {
                                observer.error(<OMDBApiSearchResponseError>{
                                    Error: error.error.Error,
                                    Response: error.error.Response,
                                });
                            } else {
                                observer.error(<OMDBApiSearchResponseError>{
                                    Error: 'Unexpected error',
                                    Response: 'False',
                                });
                            }
                        },
                        () => {
                            observer.complete();
                        },
                    )
                ;
            }

            return () => {
                unsubscribe$.next(undefined);
            };
        }).shareReplay(0);
    }
}
