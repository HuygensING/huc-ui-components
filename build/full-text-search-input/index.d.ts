/// <reference types="react" />
import * as React from 'react';
export interface IState {
    query: string;
    suggestions: string[];
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
