/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    activateSuggestion: (s: string) => void;
    activeSuggestion: string | null;
    suggestions: string[];
}
declare const AutoSuggest: React.SFC<IProps>;
export default AutoSuggest;
