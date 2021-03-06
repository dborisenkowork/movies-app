import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {TranslateModule} from '@ngx-translate/core';

import {MovieFavoritesListComponent} from './MovieFavoritesList.component';

describe('MoviesFavorites/components/MovieFavoritesList', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MovieFavoritesListComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
            imports: [
                TranslateModule,
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(MovieFavoritesListComponent).componentInstance).toBeDefined();
    });
});
