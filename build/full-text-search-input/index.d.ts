/// <reference types="react" />
import * as React from 'react';
export interface ISuggestion {
    text: string;
    weight: number;
}
export interface IState {
    query: string;
    suggestions: ISuggestion[];
}
export interface IProps {
    onButtonClick: (query: string, ev: MouseEvent) => void;
    query?: string;
}
declare class FullTextSearchInput extends React.Component<IProps, IState> {
    state: {
        query: string;
        suggestions: any[];
    };
    render(): JSX.Element;
}
export default FullTextSearchInput;
