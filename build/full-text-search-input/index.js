"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const Section = (props) => React.createElement("section", { style: Object.assign({}, default_styles_1.fontStyle, {}) }, props.children);
const Label = (props) => React.createElement("label", { htmlFor: "full-text-search-input-input", id: "full-text-search-input-label", style: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '.5em',
    } }, props.children);
const Input = (props) => React.createElement("input", { "aria-labelledby": "full-text-search-input-label", id: "full-text-search-input-input", onChange: props.onChange, role: "searchbox", style: {
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
const SemanticSuggestions = (props) => React.createElement("ul", null, props.children);
class Suggestion extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false,
        };
    }
    render() {
        return (React.createElement("li", { onClick: this.props.onClick, onMouseEnter: () => this.setState({ hover: true }), onMouseLeave: () => this.setState({ hover: false }), style: {
                background: this.state.hover ? '#245b6d' : `linear-gradient(to right, lightblue 0%, lightblue ${100 * this.props.suggestion.weight}%, white ${20 + (100 * this.props.suggestion.weight)}%, white 100%)`,
                borderRadius: '3px',
                color: this.state.hover ? 'white' : 'inherit',
                cursor: 'pointer',
                marginBottom: '0.3em',
                marginRight: '0.2em',
                padding: '0.1em 0.3em',
            } }, this.props.children));
    }
}
class FullTextSearchInput extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            query: this.props.query || '',
            suggestions: [],
        };
    }
    render() {
        return (React.createElement(Section, null,
            React.createElement(Label, null, "Search in text"),
            React.createElement(Input, { onChange: (ev) => this.setState({
                    query: ev.target.value,
                    suggestions: []
                }), value: this.state.query }),
            React.createElement(Button, { onClick: (ev) => this.props.onButtonClick(this.state.query, ev) }, "Search"),
            React.createElement(Section, null,
                React.createElement(Button, { onClick: (ev) => __awaiter(this, void 0, void 0, function* () {
                        const xhr = yield fetch(`/api/search`, {
                            body: JSON.stringify({ query: this.state.query }),
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            method: 'POST',
                        });
                        const data = yield xhr.json();
                        this.setState({ suggestions: data.suggestions });
                    }) }, "Semantic suggestion"),
                React.createElement(SemanticSuggestions, null, this.state.suggestions.map(((s) => React.createElement(Suggestion, { key: s.text, onClick: (ev) => {
                        this.setState({
                            query: s.text,
                            suggestions: [],
                        });
                        this.props.onButtonClick(s.text, ev);
                    }, suggestion: s }, s.text)))))));
    }
}
exports.default = FullTextSearchInput;
