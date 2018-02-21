import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

import {MovieFavorite, MovieFavoriteID} from '../../models/MovieFavorite.model';
import {DomSanitizer} from '@angular/platform-browser';

function notNullOrUndefined(input): boolean {
    return input !== undefined && input !== null;
}

@Component({
    selector: 'movies-favorite-details',
    templateUrl: './MovieFavoriteDetails.component.html',
    styleUrls: [
        './MovieFavoriteDetails.component.less',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieFavoriteDetailsComponent implements OnChanges
{
    @Input() favorite: MovieFavorite;

    @Output('remove') removeEvent: EventEmitter<MovieFavoriteID> = new EventEmitter<MovieFavoriteID>();
    @Output('go-list') goListEvent: EventEmitter<void> = new EventEmitter<void>();

    public imageUrl: any;

    constructor(
        private sanitizer: DomSanitizer,
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (notNullOrUndefined(this.favorite.metadata.Poster)) {
            this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(this.favorite.metadata.Poster);
        } else {
            this.imageUrl = undefined;
        }
    }

    hasImage(): boolean {
        return notNullOrUndefined(this.favorite.metadata.Poster);
    }

    onGoList(): void {
        this.goListEvent.emit(undefined);
    }

    onRemove(): void {
        this.removeEvent.emit(this.favorite.id);
    }
}
