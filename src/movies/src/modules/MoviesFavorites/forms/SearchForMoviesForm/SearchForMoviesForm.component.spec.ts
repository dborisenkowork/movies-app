import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {SearchForMoviesFormComponent} from './SearchForMoviesForm.component';

describe('MoviesFavorites/forms/SearchForMoviesFormComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchForMoviesFormComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(SearchForMoviesFormComponent).componentInstance).toBeDefined();
    });
});
