"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Aside = (props) => React.createElement("aside", { style: {
        bottom: 0,
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '40px auto',
        gridTemplateRows: '100%',
        left: props.activeAside === Asides.None ? 'calc(100% - 40px)' : '50%',
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: '65px',
        transition: 'left 300ms ease-in-out',
        whiteSpace: 'normal',
        width: '50%',
    } }, props.children);
const Body = (props) => React.createElement("div", { style: {
        backgroundColor: '#EEE',
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'auto',
        padding: '1em',
    } }, props.children);
const CloseButton = (props) => React.createElement("div", { onClick: props.onClick, style: {
        cursor: 'pointer',
        fontSize: '1.5em',
        fontWeight: 'bold',
        position: 'absolute',
        right: '1em',
        top: '0.5em',
    } }, "\u2715");
const Tabs = (props) => React.createElement("ul", { style: {
        alignSelf: 'center',
        justifySelf: 'end',
    } }, props.children);
const Tab = (props) => React.createElement("li", { onClick: props.onClick, style: {
        backgroundColor: '#eee',
        borderTopLeftRadius: '3px',
        borderBottomLeftRadius: '3px',
        cursor: 'pointer',
        marginBottom: '1em',
        padding: '1em',
    } }, props.children);
var Asides;
(function (Asides) {
    Asides[Asides["None"] = 0] = "None";
    Asides[Asides["Annotations"] = 1] = "Annotations";
    Asides[Asides["Visualisations"] = 2] = "Visualisations";
})(Asides = exports.Asides || (exports.Asides = {}));
class HucOffCanvasAside extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeAside: Asides.Annotations,
        };
    }
    render() {
        return (React.createElement(Aside, { activeAside: this.state.activeAside },
            React.createElement(Tabs, null,
                React.createElement(Tab, { onClick: () => this.setState({ activeAside: Asides.Annotations }) }, "A"),
                React.createElement(Tab, { onClick: () => this.setState({ activeAside: Asides.Visualisations }) }, "V")),
            React.createElement(Body, null, this.props.children),
            React.createElement(CloseButton, { onClick: () => this.setState({ activeAside: Asides.None }) })));
    }
}
HucOffCanvasAside.defaultProps = {};
exports.default = HucOffCanvasAside;
