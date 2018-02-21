import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {ViewFavoriteRouteComponent} from './ViewFavoriteRoute.component';

describe('MoviesApp/routes/FavoritesRoute/routes/ViewFavoriteRoute', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ViewFavoriteRouteComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(ViewFavoriteRouteComponent)).toBeDefined();
    });
});
