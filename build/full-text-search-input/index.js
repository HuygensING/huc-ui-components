"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const Section = (props) => React.createElement("section", { style: Object.assign({}, default_styles_1.fontStyle, {}) }, props.children);
const Label = (props) => React.createElement("label", { htmlFor: "full-text-search-input-input", id: "full-text-search-input-label", style: {
        display: 'block',
        fontWeight: 'bold',
    } }, props.children);
const Input = (props) => React.createElement("input", { "aria-labelledby": "full-text-search-input-label", id: "full-text-search-input-input", onChange: props.onChange, role: "searchbox", style: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        fontSize: '1em',
        padding: '0.7em',
    }, value: props.value });
const Button = (props) => React.createElement("button", { onClick: props.onClick, style: {} }, "S");
class FullTextSearchInput extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            query: this.props.query || '',
        };
    }
    render() {
        return (React.createElement(Section, null,
            React.createElement(Label, null, "Search in text"),
            React.createElement(Input, { onChange: (ev) => this.setState({ query: ev.target.value }), value: this.state.query }),
            React.createElement(Button, { onClick: (ev) => this.props.onButtonClick(this.state.query, ev) })));
    }
}
exports.default = FullTextSearchInput;
