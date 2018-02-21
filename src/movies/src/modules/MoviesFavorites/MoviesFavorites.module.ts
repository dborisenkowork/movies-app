import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';

import {MatAutocompleteModule, MatButtonModule, MatCommonModule, MatInputModule, MatListModule} from '@angular/material';

import {TranslateModule} from '@ngx-translate/core';

import {MoviesRESTApiModule} from '../MoviesRESTApi/MoviesRESTApi.module';

import {SearchForMoviesFormComponent} from './forms/SearchForMoviesForm/SearchForMoviesForm.component';

import {SearchForMoviesInputComponent} from './components/SearchForMoviesInput/SearchForMoviesInput.component';
import {MovieFavoritesListComponent} from './components/MovieFavoritesList/MovieFavoritesList.component';

import {MoviesFavoritesStore} from './store/MoviesFavoritesStore.service';
import {MoviesFavoritesService} from './services/MoviesFavoritesService';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,

        ReactiveFormsModule,

        FlexLayoutModule,

        TranslateModule.forChild(),

        MoviesRESTApiModule,

        MatCommonModule,
        MatInputModule,
        MatAutocompleteModule,
        MatListModule,
        MatButtonModule,
    ],
    declarations: [
        SearchForMoviesFormComponent,

        SearchForMoviesInputComponent,
        MovieFavoritesListComponent,
    ],
    exports: [
        SearchForMoviesFormComponent,
    ],
    providers: [
        MoviesFavoritesStore,
        MoviesFavoritesService,
    ],
})
export class MoviesFavoritesModule
{
}
