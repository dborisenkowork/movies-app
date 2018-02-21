import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {NotFoundRouteComponent} from './NotFoundRoute.component';

describe('MoviesApp/routes/NotFoundRoute', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                NotFoundRouteComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(NotFoundRouteComponent)).toBeDefined();
    });
});
