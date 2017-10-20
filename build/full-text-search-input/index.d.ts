/// <reference types="react" />
import * as React from 'react';
export interface IState {
    query: string;
}
export interface IProps {
    onButtonClick: (query: string, ev: MouseEvent) => void;
    onChange: (ev: any) => void;
    onKeyDown: (ev: any) => void;
    query?: string;
}
declare class FullTextSearchInput extends React.Component<IProps, IState> {
    state: {
        query: string;
    };
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
export default FullTextSearchInput;
