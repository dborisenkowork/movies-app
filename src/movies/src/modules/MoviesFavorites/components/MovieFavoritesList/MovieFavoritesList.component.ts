import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {MovieFavorite, MovieFavoriteID} from '../../models/MovieFavorite.model';

export interface MovieFavoritesListComponentProps
{
    favorites: Array<MovieFavorite>;
}

@Component({
    selector: 'movies-favorites-list',
    templateUrl: './MovieFavoritesList.component.html',
    styleUrls: [
        './MovieFavoritesList.component.less',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieFavoritesListComponent
{
    @Input() props: MovieFavoritesListComponentProps;

    @Output('view') viewEvent: EventEmitter<MovieFavoriteID> = new EventEmitter<MovieFavoriteID>();
    @Output('remove') removeEvent: EventEmitter<MovieFavoriteID> = new EventEmitter<MovieFavoriteID>();

    onView(id: MovieFavoriteID): void {
        this.viewEvent.emit(id);
    }

    onRemove(id: MovieFavoriteID): void {
        this.removeEvent.emit(id);
    }
}
