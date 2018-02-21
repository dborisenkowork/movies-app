import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {GetByIdResult, MoviesFavoritesService} from '../services/MoviesFavoritesService';
import {MovieFavorite, MovieFavoriteID} from '../models/MovieFavorite.model';

interface State
{
    favorite: MovieFavorite | undefined;
}

@Component({
    selector: 'movies-favorites-details-container',
    template: '<ng-content></ng-content>',
})
export class MovieFavoriteDetailsContainerComponent implements OnChanges
{
    @Input() id: string;

    @Output('go-list') goListEvent: EventEmitter<void> = new EventEmitter<void>();
    @Output('not-found') notFoundEvent: EventEmitter<void> = new EventEmitter<void>();

    public state: State = {
        favorite: undefined,
    };

    constructor(
        private service: MoviesFavoritesService,
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (this.id) {
            const result: GetByIdResult = this.service.getById(this.id);

            if (result.found) {
                this.state = {
                    ...this.state,
                    favorite: result.favorite,
                };
            } else {
                this.notFoundEvent.emit(undefined);
            }
        } else {
            this.state = {
                ...this.state,
                favorite: undefined,
            };
        }
    }

    onGoList(): void {
        this.goListEvent.emit(undefined);
    }

    // noinspection JSUnusedGlobalSymbols
    onRemove($event: MovieFavoriteID): void {
        this.service.removeFromList($event);
        this.onGoList();
    }
}
