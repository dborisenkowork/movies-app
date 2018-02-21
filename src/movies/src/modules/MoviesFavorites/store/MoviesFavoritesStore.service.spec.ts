import {inject, TestBed} from '@angular/core/testing';

import {Subject} from 'rxjs/Subject';

import {MoviesFavoritesState, MoviesFavoritesStore} from './MoviesFavoritesStore.service';

describe('MoviesFavorites/store/MoviesFavoritesStore', () => {
    const unsubscribe$: Subject<void> = new Subject<void>();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MoviesFavoritesStore,
            ],
        });
    });

    afterEach(() => {
        unsubscribe$.next(undefined);
    });

    it('creates with initial state', inject([MoviesFavoritesStore], (store: MoviesFavoritesStore) => {
        expect(store.snapshot).toEqual({
            currentList: [],
        });

        store.state$
            .takeUntil(unsubscribe$)
            .subscribe(next => {
                expect(next).toBe(store.snapshot);
                expect(next).toEqual({
                    currentList: [],
                });
            });
    }));

    it('can change state', inject([MoviesFavoritesStore], (store: MoviesFavoritesStore) => {
        const prevState: MoviesFavoritesState = store.snapshot;

        store.setState((orig: MoviesFavoritesState): MoviesFavoritesState => {
            return {
                ...orig,
                currentList: [
                    {
                        id: 'myId',
                        metadata: {
                            Title: 'My Title',
                            imdbID: 'My IMDB ID',
                            Poster: 'My Poster',
                            Type: 'My Type',
                            Year: '2018',
                        },
                    },
                ],
            };
        });

        store.state$
            .takeUntil(unsubscribe$)
            .subscribe(next => {
                expect(next).not.toBe(prevState);
                expect(next.currentList).toEqual([
                    {
                        id: 'myId',
                        metadata: {
                            Title: 'My Title',
                            imdbID: 'My IMDB ID',
                            Poster: 'My Poster',
                            Type: 'My Type',
                            Year: '2018',
                        },
                    },
                ]);
            });
    }));
});
