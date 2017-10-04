/// <reference types="react" />
import * as React from 'react';
export interface IProps {
}
export declare enum Asides {
    None = 0,
    Annotations = 1,
    Visualisations = 2,
}
export interface IState {
    activeAside: Asides;
}
declare class HucOffCanvasAside extends React.Component<IProps, IState> {
    static defaultProps: {};
    state: {
        activeAside: Asides;
    };
    render(): JSX.Element;
}
export default HucOffCanvasAside;
