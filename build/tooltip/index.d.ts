/// <reference types="react" />
import * as React from "react";
export interface IProps {
    bodyStyle?: React.CSSProperties;
    orientation?: "top" | "right" | "bottom" | "left";
    shift?: number;
    style?: React.CSSProperties;
}
declare class Tooltip extends React.Component<IProps, null> {
    private svgEl;
    private el;
    static defaultProps: IProps;
    componentDidMount(): void;
    render(): JSX.Element;
    private getTipStyle;
}
export default Tooltip;
