import {Injectable} from '@angular/core';
import {MOVIE_ID_LENGTH, MovieFavorite, MovieFavoriteID, MovieFavoriteMetadata} from '../models/MovieFavorite.model';

import {generateSID} from '../functions/generate-sid.function';

import {MoviesFavoritesState, MoviesFavoritesStore} from '../store/MoviesFavoritesStore.service';

export type GetByIdResult = { found: true; favorite: MovieFavorite } | { found: false };

@Injectable()
export class MoviesFavoritesService
{
    constructor(
        private store: MoviesFavoritesStore,
    ) {}

    push(movieMetadata: MovieFavoriteMetadata): void {
        this.store.setState((orig: MoviesFavoritesState): MoviesFavoritesState => {
            return {
                ...orig,
                currentList: [
                    ...orig.currentList,
                    {
                        id: generateSID(MOVIE_ID_LENGTH),
                        metadata: {
                            ...movieMetadata,
                        },
                    },
                ],
            };
        });
    }

    removeFromList(movieId: MovieFavoriteID): void {
        this.store.setState((orig: MoviesFavoritesState): MoviesFavoritesState => {
            return {
                ...orig,
                currentList: orig.currentList.filter(m => m.id !== movieId),
            };
        });
    }

    getById(movieId: MovieFavoriteID): GetByIdResult {
        const result: Array<MovieFavorite> = this.store.snapshot.currentList.filter(m => m.id === movieId);

        if (result.length === 0) {
            return {
                found: false,
            };
        } else if (result.length === 1) {
            return {
                found: true,
                favorite: result[0],
            };
        } else {
            throw new Error(`State error: duplicates found for ${movieId}!`);
        }
    }

    getAllAsArray(): Array<MovieFavorite> {
        return [...this.store.snapshot.currentList];
    }
}
