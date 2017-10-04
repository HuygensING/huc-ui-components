"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const ColorBar = () => React.createElement("div", { style: {
        backgroundColor: '#268f75',
        height: '5px',
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
    } });
const Header = (props) => React.createElement("header", { style: Object.assign({}, default_styles_1.fontStyle, {
        alignItems: 'center',
        backgroundColor: '#323232',
        color: '#FFF',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        height: '60px',
        paddingTop: '5px',
        width: '100%',
    }) }, props.children);
const Menu = (props) => React.createElement("ul", { role: "menu" }, props.children);
const MenuItem = (props) => React.createElement("li", { onClick: (ev) => props.onClickMenuItem(props.children, ev), role: "menuitem", style: {
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '0.85em',
        marginLeft: '1em',
    } }, props.children);
const Logo = (props) => React.createElement("img", { alt: "HuygensING logo", onClick: props.onClick, src: "http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/logo-huygens-ing-inv.svg", style: {
        cursor: props.onClick == null ? 'default' : 'pointer',
        height: '2em',
        justifySelf: 'end',
        marginRight: '2em',
    } });
const Title = (props) => React.createElement("h1", { onClick: props.onClick, style: {
        cursor: props.onClick == null ? 'default' : 'pointer',
        fontWeight: 'normal',
        fontSize: '1em',
    } }, props.children);
const HucHeader = (props) => React.createElement(Header, null,
    React.createElement(ColorBar, null),
    React.createElement(Logo, { onClick: props.onClickLogo }),
    React.createElement(Title, { onClick: props.onClickTitle }, props.title),
    React.createElement("nav", { role: "navigation" },
        React.createElement(Menu, null, props.menuItems.map(mi => React.createElement(MenuItem, { key: mi, onClickMenuItem: props.onClickMenuItem }, mi)))));
HucHeader.defaultProps = {
    menuItems: [],
    onClickMenuItem: () => { console.error('Not implemented'); },
};
exports.default = HucHeader;
