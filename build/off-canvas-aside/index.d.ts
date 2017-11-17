/// <reference types="react" />
import * as React from 'react';
export declare const tabLabelWidth: number;
export declare enum Aside {
    None = 0,
    Annotations = 1,
    Metadata = 2,
    Visualisations = 3,
}
export interface IProps {
    fullScreen: boolean;
    onChangeActiveAside: (a: Aside) => void;
    onClose: () => void;
    open: boolean;
    width: number;
}
export interface IState {
    activeAside: Aside;
}
declare class HucOffCanvasAside extends React.Component<IProps, IState> {
    static defaultProps: {
        fullScreen: boolean;
        open: boolean;
        style: {};
        width: number;
    };
    state: {
        activeAside: any;
    };
    componentWillUpdate(nextProps: any, nextState: any): void;
    render(): JSX.Element;
    private handleClose;
    private tabs(name);
}
export default HucOffCanvasAside;
