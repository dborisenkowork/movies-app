import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from '../../../environments/environment.config';

import {MoviesAppModule} from '../MoviesApp.module';

if (environment.angular.enableProductionMode) {
    enableProdMode();
}

// noinspection TsLint
platformBrowserDynamic()
    .bootstrapModule(MoviesAppModule)
    .catch(err => console.log(err));
