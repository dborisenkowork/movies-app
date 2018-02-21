import {TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {TranslateModule} from '@ngx-translate/core';

import {ViewFavoriteRouteComponent} from './ViewFavoriteRoute.component';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const routerStub: any = {
    navigate: () => {},
};

const activatedRouteStub: any = {
    params: new BehaviorSubject<any>({ id: 'demo' }),
};

describe('MoviesApp/routes/FavoritesRoute/routes/ViewFavoriteRoute', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule,
            ],
            declarations: [
                ViewFavoriteRouteComponent,
            ],
            schemas: [
                NO_ERRORS_SCHEMA,
            ],
            providers: [
                { provide: Router, useValue: routerStub },
                { provide: ActivatedRoute, useValue: activatedRouteStub },
            ],
        }).compileComponents();
    });

    it('component exists', () => {
        expect(TestBed.createComponent(ViewFavoriteRouteComponent)).toBeDefined();
    });
});
