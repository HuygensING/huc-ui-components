"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Suggestions = (props) => React.createElement("ul", { style: {
        boxSizing: 'border-box',
        listStyle: 'none',
        margin: '0 0 0 0',
        padding: '0 1em 1em 1em',
        position: 'absolute',
        width: 'calc(100% - 100px)',
        zIndex: 1,
    } }, props.children);
class Suggestion extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false,
        };
    }
    render() {
        return (React.createElement("li", { onClick: (ev) => this.props.activateSuggestion(this.props.children), onMouseEnter: () => this.setState({ hover: true }), onMouseLeave: () => this.setState({ hover: false }), style: {
                background: this.props.active || this.state.hover ? 'lightblue' : '#eee',
                borderBottom: '2px solid #fff',
                padding: '.3em',
            } }, this.props.children));
    }
}
const AutoSuggest = (props) => React.createElement(Suggestions, null, props.suggestions.map((suggestion, index) => React.createElement(Suggestion, { activateSuggestion: props.activateSuggestion, active: props.activeSuggestion === suggestion, key: index, onClick: () => { } }, suggestion)));
exports.default = AutoSuggest;
