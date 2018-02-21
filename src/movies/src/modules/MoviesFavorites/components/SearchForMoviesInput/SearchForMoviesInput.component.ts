import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material';

import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';

import {MovieFavoriteMetadata} from '../../models/MovieFavorite.model';

import {
    OMDBApiSearchItem, OMDBApiSearchResponse200,
    OMDBApiService,
} from '../../../MoviesRESTApi/services/OMDBApi.service';

interface State
{
    options: Array<OMDBApiSearchItem>;
}

@Component({
    selector: 'movies-favorites-search-for-movies-input',
    templateUrl: './SearchForMoviesInput.component.html',
    styleUrls: [
        './SearchForMoviesInput.component.less',
    ],
})
export class SearchForMoviesInputComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() minLengthTrigger: number = 3;
    @Input() maxOptions: number = 10;
    @Input() debounceTime: number = 200;

    @Output('next') nextEvent: EventEmitter<MovieFavoriteMetadata> = new EventEmitter<MovieFavoriteMetadata>();

    private ngOnDestroy$: Subject<void> = new Subject<void>();
    private ngOnChanges$: Subject<void> = new Subject<void>();

    public state: State = {
        options: [],
    };

    public textInput: FormControl = new FormControl();

    constructor(
        private api: OMDBApiService,
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        this.ngOnChanges$.next(undefined);
        this.setupTextInput();
    }

    ngOnInit(): void {
        this.setupTextInput();
    }

    ngOnDestroy(): void {
        this.ngOnDestroy$.next(undefined);
    }

    onOptionSelected($event: MatAutocompleteSelectedEvent): void {
        this.textInput.setValue('');
        this.nextEvent.emit($event.option.value);
    }

    private setupTextInput(): void {
        this.textInput.valueChanges
            .takeUntil(this.ngOnChanges$.merge(this.ngOnDestroy$))
            .distinctUntilChanged()
            .debounceTime(this.debounceTime)
            .filter(v => v && v.length >= this.minLengthTrigger)
            .switchMap(value => {
                return this.api.search({ filmTitle: value })
                    .catch(() => {
                        return Observable.of(undefined);
                    });
            })
            .subscribe((next: OMDBApiSearchResponse200 | undefined) => {
                if (next) {
                    this.state = {
                        ...this.state,
                        options: next.Search.slice(0, this.maxOptions),
                    };
                } else {
                    this.state = {
                        ...this.state,
                        options: [],
                    };
                }
            });
    }
}
