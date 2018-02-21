import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {environment} from '../../environments/environment.config';
import {MoviesAppRouting} from './configs/MoviesAppRouting.config';

import {AppRootComponent} from './components/AppRoot/AppRoot.component';

@NgModule({
    imports: [
        BrowserModule,

        RouterModule.forRoot(MoviesAppRouting.routes, {
            enableTracing: environment.angular.enableRouterTracing,
        }),
    ],
    declarations: [
        AppRootComponent,

        MoviesAppRouting.declarations,
    ],
    bootstrap: [
        AppRootComponent,

        MoviesAppRouting.providers,
    ],
})
export class MoviesAppModule
{}
