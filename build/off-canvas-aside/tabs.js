"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const index_1 = require("./index");
exports.Tabs = (props) => React.createElement("ul", { role: "tablist", style: {
        alignSelf: 'center',
        justifySelf: 'end',
        margin: 0,
        padding: 0,
        listStyle: 'none',
    } }, props.children);
exports.Tab = (props) => React.createElement("li", { onClick: props.onClick, role: "tab", style: {
        backgroundColor: '#eee',
        borderTopLeftRadius: '3px',
        borderBottomLeftRadius: '3px',
        cursor: 'pointer',
        marginBottom: '.5em',
        padding: '.5em .5em .2em .5em',
        width: index_1.tabLabelWidth,
    } }, props.children);
