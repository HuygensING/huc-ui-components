import * as React from 'react';
export interface IProps {
    logoLocation?: string;
    titleLocation?: string;
    menuItems: string[];
    menuLocations: {
        [item: string]: string;
    };
    title: string;
}
declare const HucHeader: React.SFC<IProps>;
export default HucHeader;
