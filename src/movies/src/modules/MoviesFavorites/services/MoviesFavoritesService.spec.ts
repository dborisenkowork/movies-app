import {inject, TestBed} from '@angular/core/testing';

import {Subject} from 'rxjs/Subject';

import {MoviesFavoritesStore} from '../store/MoviesFavoritesStore.service';
import {MoviesFavoritesService} from './MoviesFavoritesService';

describe('MoviesFavorites/services/MoviesFavoritesService', () => {
    const unsubscribe$: Subject<void> = new Subject<void>();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MoviesFavoritesStore,
                MoviesFavoritesService,
            ],
        });
    });

    afterEach(() => {
        unsubscribe$.next(undefined);
    });

    it('can add new favorite to the list', inject([MoviesFavoritesService, MoviesFavoritesStore], (service: MoviesFavoritesService, store: MoviesFavoritesStore) => {

    }));

    it('can add new favorite to the list', inject([MoviesFavoritesService, MoviesFavoritesStore], (service: MoviesFavoritesService, store: MoviesFavoritesStore) => {

    }));

    it('can add new favorite to the list', inject([MoviesFavoritesService, MoviesFavoritesStore], (service: MoviesFavoritesService, store: MoviesFavoritesStore) => {

    }));

    it('can add new favorite to the list', inject([MoviesFavoritesService, MoviesFavoritesStore], (service: MoviesFavoritesService, store: MoviesFavoritesStore) => {

    }));

    it('can add new favorite to the list', inject([MoviesFavoritesService, MoviesFavoritesStore], (service: MoviesFavoritesService, store: MoviesFavoritesStore) => {

    }));
});
