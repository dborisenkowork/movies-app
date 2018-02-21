import {NgModule} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {MoviesRESTApiConfigurationService} from './internal/MoviesRESTApiConfiguration.service';

@NgModule({
    imports: [
        HttpClient,
    ],
    providers: [
        MoviesRESTApiConfigurationService,
    ],
})
export class MoviesRESTApiModule
{}
