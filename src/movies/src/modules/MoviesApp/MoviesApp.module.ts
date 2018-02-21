import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LocalStorageModule} from 'angular-2-local-storage';

import {environment} from '../../environments/environment.config';
import {MoviesAppRouting} from './configs/MoviesAppRouting.config';

import {MoviesFavoritesModule} from '../MoviesFavorites/MoviesFavorites.module';

import {en_GB} from './translations/en_GB';

import {MOVIES_REST_API_MODULE_CONFIG} from '../MoviesRESTApi/models/MoviesRESTApiEnvironmentConfiguration.model';

import {tsToTranslations} from './functions/ts-to-translations.function';

import {AppRootComponent} from './components/AppRoot/AppRoot.component';

import {MoviesFavoritesLocalStorageService} from './services/MoviesFavoritesLocalStorage.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,

        LocalStorageModule.withConfig({
            prefix: 'movies-app',
            storageType: 'localStorage',
        }),
        TranslateModule.forRoot(),
        RouterModule.forRoot(MoviesAppRouting.routes, {
            enableTracing: environment.angular.enableRouterTracing,
        }),

        MoviesFavoritesModule,
    ],
    declarations: [
        AppRootComponent,

        MoviesAppRouting.declarations,
    ],
    providers: [
        MoviesAppRouting.providers,
        environment.modules.MoviesRESTApi.angularProviders,

        MoviesFavoritesLocalStorageService,

        { provide: MOVIES_REST_API_MODULE_CONFIG, useValue: environment.modules.MoviesRESTApi },
    ],
    bootstrap: [
        AppRootComponent,
    ],
})
export class MoviesAppModule
{
    constructor(
        private translate: TranslateService,
        private localStorageSync: MoviesFavoritesLocalStorageService,
    ) {
        this.initTranslationModule();
        this.initMoviesFavoritesSync();
    }

    private initTranslationModule(): void {
        this.translate.setDefaultLang('en_GB');
        this.translate.setTranslation('en_GB', tsToTranslations(en_GB));
    }

    private initMoviesFavoritesSync(): void {
        this.localStorageSync.setupSync();
    }
}
