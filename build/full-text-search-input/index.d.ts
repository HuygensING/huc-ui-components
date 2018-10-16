import * as React from 'react';
export interface IProps {
    autoSuggest: (query: string) => Promise<string[]>;
    minimalQueryLength: number;
    onChange: (q: string) => void;
    onKeyDown: (ev: any) => void;
    query: string;
    search: (query: string, ev?: MouseEvent) => void;
}
export interface IState {
    activeSuggestion: string | null;
    query: string;
    suggestions: string[];
}
declare class FullTextSearchInput extends React.Component<IProps, IState> {
    static defaultProps: {
        minimalQueryLength: number;
        query: string;
    };
    state: {
        activeSuggestion: any;
        query: string;
        suggestions: any[];
    };
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    private activateSuggestion;
    private search;
    private setActiveSuggestion;
}
export default FullTextSearchInput;
