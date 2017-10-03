"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ColorBar = () => React.createElement("div", { style: {
        backgroundColor: '#268f75',
        height: '5px',
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
    } });
const Header = (props) => React.createElement("header", { style: {
        alignItems: 'center',
        backgroundColor: '#323232',
        color: '#FFF',
        display: 'grid',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '18px',
        gridTemplateColumns: '1fr 2fr 1fr',
        height: '60px',
        paddingTop: '5px',
        width: '100%',
    } }, props.children);
const Menu = (props) => React.createElement("ul", null, props.children);
const MenuItem = (props) => React.createElement("li", { onClick: (ev) => props.onClickMenuItem(props.children, ev), style: {
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '0.85em',
        marginLeft: '1em',
    } }, props.children);
const Logo = () => React.createElement("img", { alt: "HuygensING logo", src: "http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/logo-huygens-ing-inv.svg", style: {
        justifySelf: 'end',
        height: '2em',
        marginRight: '2em',
    } });
const HucHeader = (props) => React.createElement(Header, null,
    React.createElement(ColorBar, null),
    React.createElement(Logo, null),
    React.createElement("h1", { style: {
            fontWeight: 'normal',
            fontSize: '1em',
        } }, props.title),
    React.createElement(Menu, null, props.menuItems.map(mi => React.createElement(MenuItem, { key: mi, onClickMenuItem: props.onClickMenuItem }, mi))));
HucHeader.defaultProps = {
    menuItems: [],
    onClickMenuItem: () => { console.error('Not implemented'); },
};
exports.default = HucHeader;
