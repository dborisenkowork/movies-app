import {Inject, Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/shareReplay';

import {OMDB_SEARCH_FIXTURE} from '../fixtures/omdb-search.fixture';

import {OMDBApiSearchItem, OMDBApiSearchRequest, OMDBApiSearchResponse200, OMDBApiSearchResponseError, OMDBApiService} from '../services/OMDBApi.service';

@Injectable()
export class MockOMDBApiService implements OMDBApiService
{
    constructor(
        @Inject(OMDB_SEARCH_FIXTURE) private fixture: Array<OMDBApiSearchItem>,
    ) {}

    search(request: OMDBApiSearchRequest): Observable<OMDBApiSearchResponse200> {
        return Observable.create(observer => {
            if (request.filmTitle.length === 0) {
                observer.error(<OMDBApiSearchResponseError>{
                    Error: 'No film title provided.',
                    Response: 'False',
                });
            } else {
                const result: Array<OMDBApiSearchItem> = this.fixture.filter(i => !!~i.Title.indexOf(request.filmTitle));

                if (result.length > 0) {
                    observer.next(<OMDBApiSearchResponse200>{
                        Response: 'True',
                        Search: result,
                        totalResults: result.length,
                    });

                    observer.complete();
                } else {
                    observer.error(<OMDBApiSearchResponseError>{
                        Error: 'Movie not found!',
                        Response: 'False',
                    });
                }
            }
        }).shareReplay(0);
    }
}
