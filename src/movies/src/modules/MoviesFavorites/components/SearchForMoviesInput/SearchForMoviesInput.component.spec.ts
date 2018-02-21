import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {MatAutocompleteModule, MatCommonModule, MatInputModule} from '@angular/material';

import {SearchForMoviesInputComponent} from './SearchForMoviesInput.component';

import {OMDBApiService} from '../../../MoviesRESTApi/services/OMDBApi.service';
import {MockOMDBApiService} from '../../../MoviesRESTApi/services-mock/MockOMDBApi.service';

import {OMDB_SEARCH_FIXTURE, omdbSearchFixture} from '../../../MoviesRESTApi/fixtures/omdb-search.fixture';

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
                MatCommonModule,
                MatInputModule,
                MatAutocompleteModule,

                { provide: OMDBApiService, useClass: MockOMDBApiService },
                { provide: OMDB_SEARCH_FIXTURE, useValue: omdbSearchFixture },
            ],
        });
    });

    it('component exists', () => {
        expect(TestBed.createComponent(SearchForMoviesInputComponent).componentInstance).toBeDefined();
    });
});
