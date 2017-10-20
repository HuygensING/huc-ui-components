"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const Section = (props) => React.createElement("section", { style: Object.assign({}, default_styles_1.fontStyle, {}) }, props.children);
const Label = (props) => React.createElement("label", { htmlFor: "full-text-search-input-input", id: "full-text-search-input-label", style: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '.5em',
    } }, props.children);
const Input = (props) => React.createElement("input", { "aria-labelledby": "full-text-search-input-label", id: "full-text-search-input-input", onChange: props.onChange, onKeyDown: props.onKeyDown, role: "searchbox", style: {
        backgroundColor: '#fff',
        border: '1px solid #eee',
        fontSize: '.7em',
        padding: '0.5em',
        width: 'calc(100% - 100px)',
    }, value: props.value });
const Button = (props) => React.createElement("button", { onClick: props.onClick, style: {
        backgroundColor: '#eee',
        fontSize: '.7em',
        padding: '0.6em',
        border: 'none',
    } }, props.children);
class FullTextSearchInput extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            query: this.props.query || '',
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.query !== nextProps.query) {
            this.setState({
                query: nextProps.query
            });
        }
    }
    render() {
        return (React.createElement(Section, null,
            React.createElement(Label, null, "Search in text"),
            React.createElement(Input, { onChange: (ev) => {
                    this.setState({
                        query: ev.target.value,
                    });
                    this.props.onChange(ev);
                }, onKeyDown: this.props.onKeyDown, value: this.state.query }),
            React.createElement(Button, { onClick: (ev) => this.props.onButtonClick(this.state.query, ev) }, "Search")));
    }
}
exports.default = FullTextSearchInput;
