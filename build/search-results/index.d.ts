/// <reference types="react" />
import * as React from 'react';
export interface IResultBody {
    result: number;
}
export interface IHucSearchResults {
    resultBodyComponent: React.SFC<IResultBody>;
    searchResults: any[];
}
declare const HucSearchResults: React.SFC<IHucSearchResults>;
export default HucSearchResults;
