import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {MovieFavorite} from '../models/MovieFavorite.model';

export type MoviesFavoritesList = Array<MovieFavorite>;

export interface MoviesFavoritesState
{
    currentList: MoviesFavoritesList;
}

function initialState(): MoviesFavoritesState {
    return {
        currentList: [],
    };
}

@Injectable()
export class MoviesFavoritesStore
{
    public state$: BehaviorSubject<MoviesFavoritesState> = new BehaviorSubject(initialState());
    public snapshot: MoviesFavoritesState;

    constructor() {
        const subscribeToSnapshots: Function = () => {
            this.state$.subscribe(next => this.snapshot = next);
        };

        subscribeToSnapshots();
    }

    setState(next: (orig: MoviesFavoritesState) => MoviesFavoritesState): void {
        this.state$.next({
            ...next(this.snapshot),
        });
    }
}
