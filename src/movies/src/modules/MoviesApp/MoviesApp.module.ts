import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRootComponent} from './components/AppRoot/AppRoot.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppRootComponent,
    ],
    bootstrap: [
        AppRootComponent,
    ],
})
export class MoviesAppModule
{}
