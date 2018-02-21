import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {MoviesFavoritesState, MoviesFavoritesStore} from '../../MoviesFavorites/store/MoviesFavoritesStore.service';

@Injectable()
export class MoviesFavoritesLocalStorageService
{
    static LOCAL_STORAGE_KEY: string = 'movies-favorites-sync';

    constructor(
        private store: MoviesFavoritesStore,
        private localStorage: LocalStorageService,
    ) {}

    setupSync(): void {
        const fetchFromPreviousSessions: Function = () => {
            const prev: string | null = this.localStorage.get(MoviesFavoritesLocalStorageService.LOCAL_STORAGE_KEY);

            if (prev !== null) {
                this.store.setState((orig: MoviesFavoritesState): MoviesFavoritesState => {
                    return {
                        ...orig,
                        currentList: JSON.parse(prev),
                    };
                });
            }
        };

        const subscribeToStoreChanges: Function = () => {
            let prevList: any;

            this.store.state$.subscribe(next => {
                if (next.currentList !== prevList) {
                    this.localStorage.set(MoviesFavoritesLocalStorageService.LOCAL_STORAGE_KEY, JSON.stringify(next.currentList));
                }

                prevList = next.currentList;
            });
        };

        fetchFromPreviousSessions();
        subscribeToStoreChanges();
    }
}
