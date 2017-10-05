/// <reference types="react" />
import * as React from 'react';
export interface IResultBody {
    result: number;
}
export interface IHucSearchResults {
    onClickResult: (result: any, ev: React.MouseEvent<HTMLLIElement>) => void;
    resultBodyComponent: React.SFC<IResultBody>;
    searchResults: {
        hits: any[];
        total: number;
    };
}
declare const HucSearchResults: React.SFC<IHucSearchResults>;
export default HucSearchResults;
