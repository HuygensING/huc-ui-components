"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const Section = (props) => React.createElement("section", { style: default_styles_1.fontStyle }, props.children);
const Header = (props) => React.createElement("header", { role: "heading", style: {
        color: '#888',
        display: 'grid',
        fontSize: '.85em',
        gridTemplateColumns: '1fr 1fr',
        padding: '0 1em 1em 1em',
    } }, props.children);
const ResultCount = (props) => React.createElement("div", null,
    "Found ",
    props.resultCount,
    " result",
    props.resultCount === 1 ? '' : 's');
const ResultList = (props) => React.createElement("ul", { style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    } }, props.children);
const Result = (props) => React.createElement("li", { onClick: props.onClick, style: {
        backgroundColor: '#F6F6F6',
        marginBottom: '1em',
        padding: '1em',
        cursor: 'pointer',
    } }, props.children);
const HucSearchResults = (props) => React.createElement(Section, null,
    React.createElement(Header, null,
        React.createElement(ResultCount, { resultCount: props.searchResults.total })),
    React.createElement(ResultList, null, props.searchResults.hits.map((result, i) => React.createElement(Result, { key: i, onClick: (ev) => {
            if (props.onClickResult != null)
                props.onClickResult(result, ev);
        } },
        React.createElement(props.resultBodyComponent, Object.assign({}, props, { result: result }))))));
HucSearchResults.defaultProps = {
    searchResults: {
        hits: [],
        id: null,
        query: {},
        total: 0,
    }
};
exports.default = HucSearchResults;
