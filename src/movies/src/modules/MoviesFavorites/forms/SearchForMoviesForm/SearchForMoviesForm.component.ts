import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

import {Subject} from 'rxjs/Subject';

import {MovieFavoriteID, MovieFavoriteMetadata} from '../../models/MovieFavorite.model';

import {MovieFavoritesListComponentProps} from '../../components/MovieFavoritesList/MovieFavoritesList.component';

import {MoviesFavoritesService} from '../../services/MoviesFavoritesService';
import {MoviesFavoritesStore} from '../../store/MoviesFavoritesStore.service';

interface State
{
    listProps: MovieFavoritesListComponentProps;
}

@Component({
    selector: 'movies-favorites-search-for-movies-form',
    templateUrl: './SearchForMoviesForm.component.html',
    styleUrls: [
        './SearchForMoviesForm.component.less',
    ],
})
export class SearchForMoviesFormComponent implements OnInit, OnDestroy
{
    @Output('view') viewEvent: EventEmitter<MovieFavoriteID> = new EventEmitter<MovieFavoriteID>();

    private ngOnDestroy$: Subject<void> = new Subject<void>();

    public state: State = {
        listProps: {
            favorites: [],
        },
    };

    constructor(
        private store: MoviesFavoritesStore,
        private service: MoviesFavoritesService,
    ) {}

    ngOnInit(): void {
        this.store.state$
            .takeUntil(this.ngOnDestroy$)
            .subscribe(() => {
                this.state = {
                    ...this.state,
                    listProps: {
                        ...this.state.listProps,
                        favorites: this.service.getAllAsArray(),
                    },
                };
            });
    }

    ngOnDestroy(): void {
        this.ngOnDestroy$.next(undefined);
    }

    onNext($event: MovieFavoriteMetadata): void {
        this.service.push($event);
    }

    onView($event: MovieFavoriteID): void {
        this.viewEvent.emit($event);
    }

    onRemove($event: MovieFavoriteID): void {
        this.service.removeFromList($event);
    }
}
