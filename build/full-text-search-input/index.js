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
const auto_suggest_1 = require("./auto-suggest");
const Section = (props) => React.createElement("section", { style: Object.assign({}, default_styles_1.fontStyle, {
        position: 'relative',
    }) }, props.children);
const Label = (props) => React.createElement("label", { htmlFor: "full-text-search-input-input", id: "full-text-search-input-label", style: {
        display: 'block',
        fontWeight: 'bold',
        marginBottom: '.5em',
    } }, props.children);
const Input = (props) => React.createElement("input", { "aria-labelledby": "full-text-search-input-label", id: "full-text-search-input-input", onChange: props.onChange, onKeyDown: props.onKeyDown, role: "searchbox", style: {
        backgroundColor: '#fff',
        border: '1px solid #eee',
        boxSizing: 'border-box',
        fontSize: '.7em',
        padding: '0.5em',
        width: 'calc(100% - 100px)',
    }, value: props.value });
const Button = (props) => React.createElement("button", { onClick: props.onClick, style: {
        backgroundColor: '#eee',
        border: 'none',
        boxSizing: 'border-box',
        fontSize: '.7em',
        padding: '0.6em',
        width: '100px',
    } }, props.children);
class FullTextSearchInput extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeSuggestion: null,
            query: this.props.query || '',
            suggestions: []
        };
        this.activateSuggestion = (suggestion) => {
            this.setState({
                query: suggestion,
                suggestions: [],
            });
            this.props.onChange(suggestion);
            this.props.search(suggestion);
        };
        this.setActiveSuggestion = (keyCode) => {
            let activeSuggestion = this.state.activeSuggestion;
            if (typeof activeSuggestion === 'string') {
                const index = this.state.suggestions.indexOf(activeSuggestion);
                if (keyCode === 40) {
                    activeSuggestion = (index < (this.state.suggestions.length - 1)) ?
                        this.state.suggestions[index + 1] :
                        this.state.suggestions[0];
                }
                if (keyCode === 38) {
                    activeSuggestion = (index > 0) ?
                        this.state.suggestions[index - 1] :
                        this.state.suggestions[this.state.suggestions.length - 1];
                }
            }
            else {
                if (keyCode === 40)
                    activeSuggestion = this.state.suggestions[0];
                if (keyCode === 38)
                    activeSuggestion = this.state.suggestions[this.state.suggestions.length - 1];
            }
            this.setState({ activeSuggestion });
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
            React.createElement(Input, { onChange: (ev) => __awaiter(this, void 0, void 0, function* () {
                    const query = ev.target.value;
                    this.setState({ query });
                    this.props.onChange(query);
                    const suggestions = this.props.autoSuggest && query.length >= this.props.minimalQueryLength ?
                        yield this.props.autoSuggest(query) :
                        [];
                    this.setState({ suggestions });
                }), onKeyDown: (ev) => {
                    if (ev.keyCode === 38 || ev.keyCode === 40) {
                        this.setActiveSuggestion(ev.keyCode);
                    }
                    else if (ev.keyCode === 13) {
                        const activeSuggestion = this.state.activeSuggestion;
                        if (typeof activeSuggestion === 'string') {
                            this.activateSuggestion(activeSuggestion);
                        }
                        else {
                            this.props.onChange(this.state.query);
                            this.props.search(this.state.query, ev);
                        }
                    }
                    else if (this.props.onKeyDown != null) {
                        this.props.onKeyDown(ev);
                    }
                }, value: this.state.query }),
            React.createElement(Button, { onClick: (ev) => this.props.search(this.state.query, ev) }, "Search"),
            this.props.autoSuggest != null &&
                React.createElement(auto_suggest_1.default, { activateSuggestion: this.activateSuggestion, activeSuggestion: this.state.activeSuggestion, suggestions: this.state.suggestions })));
    }
}
FullTextSearchInput.defaultProps = {
    minimalQueryLength: 2,
    query: '',
};
exports.default = FullTextSearchInput;
