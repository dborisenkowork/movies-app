import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {SearchForMoviesFormComponent} from './SearchForMoviesForm.component';

import {MoviesFavoritesStore} from '../../store/MoviesFavoritesStore.service';
import {MoviesFavoritesService} from '../../services/MoviesFavoritesService';

describe('MoviesFavorites/forms/SearchForMoviesFormComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchForMoviesFormComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
            providers: [
                MoviesFavoritesStore,
                MoviesFavoritesService,
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(SearchForMoviesFormComponent).componentInstance).toBeDefined();
    });
});
