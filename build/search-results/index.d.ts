/// <reference types="react" />
import * as React from 'react';
export declare type SearchResults = {
    hits: any[];
    id: string;
    query: Object;
    total: number;
};
export interface IResultBody {
    result: number;
}
export interface IHucSearchResults {
    onClickResult: (result: any, ev: React.MouseEvent<HTMLLIElement>) => void;
    resultBodyComponent: React.SFC<IResultBody>;
    searchResults: SearchResults;
}
declare const HucSearchResults: React.SFC<IHucSearchResults>;
export default HucSearchResults;
