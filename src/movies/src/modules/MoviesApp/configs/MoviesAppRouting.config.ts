import {Route, Routes} from '@angular/router';
import {Provider} from '@angular/core';

import {NotFoundRouteComponent} from '../routes/NotFoundRoute/NotFoundRoute.component';
import {IndexRouteComponent} from '../routes/IndexRoute/IndexRoute.component';
import {ViewFavoriteRouteComponent} from '../routes/FavoritesRoute/routes/ViewFavoriteRoute/ViewFavoriteRoute.component';
import {FavoritesRouteComponent} from '../routes/FavoritesRoute/FavoritesRoute.component';
import {ListFavoritesRouteComponent} from '../routes/FavoritesRoute/routes/ListFavoritesRoute/ListFavoritesRoute.component';

const routeNotFound: Route = {
    path: '**',
    component: NotFoundRouteComponent,
};

export const MoviesAppRouting: {
    routes: Routes,
    declarations: Array<Function>,
    providers: Array<Provider>,
} = {
    routes: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: '/favorites/list',
        },
        {
            path: 'favorites',
            pathMatch: 'prefix',
            component: FavoritesRouteComponent,
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'list',
                },
                {
                    path: 'list',
                    pathMatch: 'full',
                    component: ListFavoritesRouteComponent,
                },
                {
                    path: 'view/:id',
                    pathMatch: 'full',
                    component: ViewFavoriteRouteComponent,
                },
                { ...routeNotFound },
            ],
        },
        { ...routeNotFound },
    ],
    declarations: [
        IndexRouteComponent,
        NotFoundRouteComponent,
        FavoritesRouteComponent,
        ListFavoritesRouteComponent,
        ViewFavoriteRouteComponent,
    ],
    providers: [],
};
