import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {ListFavoritesRouteComponent} from './ListFavoritesRoute.component';

describe('MoviesApp/routes/FavoritesRoute/routes/ListFavoritesRouteComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListFavoritesRouteComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(ListFavoritesRouteComponent)).toBeDefined();
    });
});
