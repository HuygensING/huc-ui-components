"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Panel = (props) => React.createElement("div", null,
    props.title &&
        React.createElement("h2", { style: {
                marginBottom: '1em',
            } }, props.title),
    props.children);
exports.default = Panel;
