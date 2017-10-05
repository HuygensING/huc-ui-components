"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const Section = (props) => React.createElement("section", { style: Object.assign({}, default_styles_1.fontStyle, {}) }, props.children);
const Label = (props) => React.createElement("label", { htmlFor: "full-text-search-input-input", id: "full-text-search-input-label", style: {
        display: 'block',
        fontWeight: 'bold',
    } }, props.children);
const Input = (props) => React.createElement("input", { "aria-labelledby": "full-text-search-input-label", id: "full-text-search-input-input", role: "searchbox", style: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        fontSize: '1em',
        padding: '0.7em',
    } });
const Button = (props) => React.createElement("button", { style: {} }, "S");
class FullTextSearchInput extends React.Component {
    render() {
        return (React.createElement(Section, null,
            React.createElement(Label, null, "Search in text"),
            React.createElement(Input, null),
            React.createElement(Button, null)));
    }
}
exports.default = FullTextSearchInput;
