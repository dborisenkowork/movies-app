import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {IndexRouteComponent} from './IndexRoute.component';

describe('MoviesApp/routes/IndexRoute', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                IndexRouteComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(IndexRouteComponent)).toBeDefined();
    });
});
