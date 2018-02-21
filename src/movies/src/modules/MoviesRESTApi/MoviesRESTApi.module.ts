import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {MoviesRESTApiConfigurationService} from './internal/MoviesRESTApiConfiguration.service';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        MoviesRESTApiConfigurationService,
    ],
})
export class MoviesRESTApiModule
{}
