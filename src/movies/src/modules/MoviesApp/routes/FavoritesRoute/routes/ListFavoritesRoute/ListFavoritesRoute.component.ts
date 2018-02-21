import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {MovieFavoriteID} from '../../../../../MoviesFavorites/models/MovieFavorite.model';

@Component({
    templateUrl: './ListFavoritesRoute.component.html',
    styleUrls: [
        './ListFavoritesRoute.component.less',
    ],
})
export class ListFavoritesRouteComponent
{
    constructor(
        private router: Router,
    ) {}

    view(id: MovieFavoriteID): void {
        this.router.navigate(['/favorites/view', id]);
    }
}
