/// <reference types="react" />
import * as React from 'react';
export interface IProps {
}
export declare enum Aside {
    None = 0,
    Annotations = 1,
    Visualisations = 2,
}
export interface IState {
    activeAside: Aside;
}
declare class HucOffCanvasAside extends React.Component<IProps, IState> {
    static defaultProps: {};
    state: {
        activeAside: Aside;
    };
    render(): JSX.Element;
    private tabs(name);
}
export default HucOffCanvasAside;
