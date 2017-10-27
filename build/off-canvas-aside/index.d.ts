/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    fullScreen: boolean;
    onChangeActiveAside: (a: Aside) => void;
    open: boolean;
}
export declare enum Aside {
    None = 0,
    Annotations = 1,
    Visualisations = 2,
}
export interface IState {
    activeAside: Aside;
    fullScreen: boolean;
}
declare class HucOffCanvasAside extends React.Component<IProps, IState> {
    static defaultProps: {
        fullScreen: boolean;
        open: boolean;
    };
    state: {
        activeAside: any;
        fullScreen: boolean;
    };
    componentWillReceiveProps(nextProps: any): void;
    componentWillUpdate(nextProps: any, nextState: any): void;
    render(): JSX.Element;
    private handleClose;
    private tabs(name);
}
export default HucOffCanvasAside;
