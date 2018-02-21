import {OMDBApiSearchItem} from '../services/OMDBApi.service';
import {InjectionToken} from '@angular/core';

export const OMDB_SEARCH_FIXTURE: InjectionToken<Array<OMDBApiSearchItem>> = new InjectionToken<Array<OMDBApiSearchItem>>('OMDB Fixture');

export const omdbSearchFixture: Array<OMDBApiSearchItem> = [
  {
      Title: 'Foo',
      Year: '2018',
      imdbID: 'demo-1',
      Type: 'movie',
      Poster: 'N/A',
  },
  {
      Title: 'Bar',
      Year: '2014',
      imdbID: 'demo-2',
      Type: 'movie',
      Poster: 'N/A',
  },
  {
      Title: 'Baz',
      Year: '2018',
      imdbID: 'demo-3',
      Type: 'movie',
      Poster: 'N/A',
  },
  {
      Title: 'Foo Baz',
      Year: '2008',
      imdbID: 'demo-4',
      Type: 'movie',
      Poster: 'N/A',
  },
];
