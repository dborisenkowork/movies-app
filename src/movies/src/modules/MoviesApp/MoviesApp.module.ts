import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {environment} from '../../environments/environment.config';
import {MoviesAppRouting} from './configs/MoviesAppRouting.config';

import {en_GB} from './translations/en_GB';

import {tsToTranslations} from './functions/ts-to-translations.function';

import {AppRootComponent} from './components/AppRoot/AppRoot.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,

        TranslateModule.forRoot(),
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
{
    constructor(
        private translate: TranslateService,
    ) {
        this.initTranslationModule();
    }

    private initTranslationModule(): void {
        this.translate.setDefaultLang('en_GB');
        this.translate.setTranslation('en_GB', tsToTranslations(en_GB));
    }
}
