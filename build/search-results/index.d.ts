import * as React from 'react';
export interface ISearchResults {
    hits: any[];
    id?: string;
    query?: Object;
    total: number;
}
export interface IResultBody {
    result: number;
}
export interface IHucSearchResults {
    onClickResult?: (result: any, ev: React.MouseEvent<HTMLLIElement>) => void;
    resultBodyComponent: React.SFC<IResultBody>;
    searchResults: ISearchResults;
}
declare const HucSearchResults: React.SFC<IHucSearchResults>;
export default HucSearchResults;
