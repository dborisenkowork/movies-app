import {Observable} from 'rxjs/Observable';

export type NotAvailable = 'N/A';
export type StringOrNotAvailable = string | NotAvailable;

export interface OMDBApiSearchRequest
{
    filmTitle: string;
}

export interface OMDBApiSearchResponseError
{
    Error: string;
    Response: 'False';
}

export interface OMDBApiSearchResponse200
{
    Search: Array<OMDBApiSearchItem>;
    totalResults: number;
    Response: 'True';
}

export interface OMDBApiSearchItem
{
    Title: StringOrNotAvailable;
    Year: StringOrNotAvailable;
    imdbID: StringOrNotAvailable;
    Type: StringOrNotAvailable;
    Poster: StringOrNotAvailable;
}

export /* interface */ abstract class OMDBApiService
{
    abstract search(request: OMDBApiSearchRequest): Observable<OMDBApiSearchResponse200>;
}
