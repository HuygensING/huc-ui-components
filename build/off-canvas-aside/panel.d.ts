/// <reference types="react" />
import * as React from 'react';
import { Aside } from './index';
export declare const PanelContainer: (props: any) => JSX.Element;
export interface IPanel {
    style: React.CSSProperties;
    title: string;
    type: Aside;
}
export declare const Panel: React.SFC<IPanel>;
