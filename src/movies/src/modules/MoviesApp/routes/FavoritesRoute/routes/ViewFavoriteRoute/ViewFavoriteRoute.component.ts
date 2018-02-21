import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Subject} from 'rxjs/Subject';

@Component({
    templateUrl: './ViewFavoriteRoute.component.html',
    styleUrls: [
        './ViewFavoriteRoute.component.less',
    ],
})
export class ViewFavoriteRouteComponent implements OnInit, OnDestroy
{
    private ngOnDestroy$: Subject<void> = new Subject<void>();

    public id: string;

    constructor(
        private router: Router,
        private activeRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.activeRoute.params
            .takeUntil(this.ngOnDestroy$)
            .subscribe(next => {
                this.id = next.id;
            });
    }

    ngOnDestroy(): void {
        this.ngOnDestroy$.next(undefined);
    }

    goList(): void {
        this.router.navigate(['/favorites/list']);
    }

    notFound(): void {
        this.router.navigate(['/favorites/list']);
    }
}
