"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.PanelContainer = (props) => React.createElement("section", { role: "tabpanel", style: {
        backgroundColor: '#EEE',
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'auto',
        padding: '1.5em',
    } }, props.children);
exports.Panel = (props) => React.createElement("div", { style: props.style },
    props.title &&
        React.createElement("h2", { style: {
                marginBottom: '1em',
            } }, props.title),
    props.children);
