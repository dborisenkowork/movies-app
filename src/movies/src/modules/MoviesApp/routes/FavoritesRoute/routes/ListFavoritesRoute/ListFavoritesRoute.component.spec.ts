import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {ListFavoritesRouteComponent} from './ListFavoritesRoute.component';
import {Router, Routes} from '@angular/router';

const routerStub: any = {
    navigate: () => {},
};

describe('MoviesApp/routes/FavoritesRoute/routes/ListFavoritesRouteComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListFavoritesRouteComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
            providers: [
                { provide: Router, useValue: routerStub },
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(ListFavoritesRouteComponent).componentInstance).toBeDefined();
    });

    it('will redirect to view page on request', () => {
        const spy: jasmine.Spy = spyOn(routerStub, 'navigate');

        expect(spy).not.toHaveBeenCalled();

        TestBed.createComponent(ListFavoritesRouteComponent).componentInstance.view('my-demo');

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
