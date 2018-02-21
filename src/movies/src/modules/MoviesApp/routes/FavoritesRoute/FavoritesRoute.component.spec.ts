import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {FavoritesRouteComponent} from './FavoritesRoute.component';

describe('MoviesApp/routes/FavoritesRoute', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                FavoritesRouteComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(FavoritesRouteComponent)).toBeDefined();
    });
});
