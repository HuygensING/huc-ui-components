/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    menuItems: string[];
    onClickMenuItem: (string, MouseEvent) => void;
    title: string;
}
declare const HucHeader: React.SFC<IProps>;
export default HucHeader;
