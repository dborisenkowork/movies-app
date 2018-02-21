import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import {MatAutocompleteModule, MatInputModule} from '@angular/material';

import {SearchForMoviesInputComponent} from './SearchForMoviesInput.component';

import {OMDBApiService} from '../../../MoviesRESTApi/services/OMDBApi.service';
import {MockOMDBApiService} from '../../../MoviesRESTApi/services-mock/MockOMDBApi.service';

import {OMDB_SEARCH_FIXTURE, omdbSearchFixture} from '../../../MoviesRESTApi/fixtures/omdb-search.fixture';

class TranslateServiceStub
{
    // noinspection JSUnusedGlobalSymbols
    public get(key: any): any {
        Observable.of(key);
    }
}

describe('MoviesFavorites/components/SearchForMoviesInput', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchForMoviesInputComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
            providers: [
                { provide: OMDBApiService, useClass: MockOMDBApiService },
                { provide: OMDB_SEARCH_FIXTURE, useValue: omdbSearchFixture },
                { provide: TranslateService, useValue: TranslateServiceStub },
            ],
            imports: [
                TranslateModule,
                MatAutocompleteModule,
                MatInputModule,
            ],
        });
    });

    it('component exists', () => {
        expect(TestBed.createComponent(SearchForMoviesInputComponent).componentInstance).toBeDefined();
    });
});
