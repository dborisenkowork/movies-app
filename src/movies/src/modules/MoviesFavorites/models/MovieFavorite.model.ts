export const MOVIE_ID_LENGTH: number = 32;

export type MovieFavoriteID = string;

export type NotAvailable = 'N/A';
export type StringOrNotAvailable = string | NotAvailable;

export interface MovieFavoriteMetadata
{
    Title: StringOrNotAvailable;
    Year: StringOrNotAvailable;
    imdbID: StringOrNotAvailable;
    Type: StringOrNotAvailable;
    Poster: StringOrNotAvailable;
}

export interface MovieFavorite
{
    id: MovieFavoriteID;
    metadata: MovieFavoriteMetadata;
}
