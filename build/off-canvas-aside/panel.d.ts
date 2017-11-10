/// <reference types="react" />
import * as React from 'react';
import { Aside } from './index';
export interface IPanel {
    style: React.CSSProperties;
    title: string;
    type: Aside;
}
declare const Panel: React.SFC<IPanel>;
export default Panel;
