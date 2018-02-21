"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const A = (props) => React.createElement("a", { href: props.href, style: Object.assign({ color: 'inherit', textDecoration: 'none' }, props.style) }, props.children);
const ColorBar = () => React.createElement("div", { style: {
        backgroundColor: '#268f75',
        height: '5px',
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
    } });
const Header = (props) => React.createElement("header", { style: Object.assign({}, default_styles_1.fontStyle, { alignItems: 'center', backgroundColor: '#323232', color: '#FFF', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', height: '60px', paddingTop: '5px', position: 'relative', width: '100%', zIndex: 1 }) }, props.children);
const Menu = (props) => React.createElement("ul", { role: "menubar" }, props.children);
const MenuItem = (props) => React.createElement("li", { role: "menuitem", style: {
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '0.85em',
        marginLeft: '1em',
    } },
    React.createElement(A, { href: props.href }, props.children));
const Logo = (props) => React.createElement(A, { href: props.href, style: {
        height: '2em',
        justifySelf: 'end',
        marginRight: '2em',
    } },
    React.createElement("img", { alt: "HuygensING logo", src: "/static/graphics/ui/huygens-logo.png" }));
const Title = (props) => React.createElement("h1", { style: {
        fontWeight: 'normal',
        fontSize: '1em',
    } },
    React.createElement(A, { href: props.href }, props.children));
const HucHeader = (props) => React.createElement(Header, null,
    React.createElement(ColorBar, null),
    React.createElement(Logo, { href: props.logoLocation }),
    React.createElement(Title, { href: props.titleLocation }, props.title),
    React.createElement("nav", { role: "navigation" },
        React.createElement(Menu, null, props.menuItems.map(mi => React.createElement(MenuItem, { href: props.menuLocations[mi] || '/', key: mi }, mi)))));
HucHeader.defaultProps = {
    logoLocation: '/',
    menuItems: [],
    menuLocations: {},
    titleLocation: '/',
};
exports.default = HucHeader;
