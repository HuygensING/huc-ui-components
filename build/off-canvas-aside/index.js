"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AsideComp = (props) => React.createElement("aside", { role: "complementary", style: {
        bottom: 0,
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '40px auto',
        gridTemplateRows: '100%',
        left: props.activeAside === Aside.None ?
            'calc(100% - 40px)' :
            props.fullScreen ?
                '-40px' :
                '50%',
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: '65px',
        transition: 'left 300ms ease-in-out',
        whiteSpace: 'normal',
        width: props.fullScreen ? 'calc(100% + 40px)' : '50%',
    } }, props.children);
const PanelContainer = (props) => React.createElement("section", { role: "tabpanel", style: {
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
        marginBottom: '1em',
        textAlign: 'right',
    } }, "\u2715");
const Tabs = (props) => React.createElement("ul", { role: "tablist", style: {
        alignSelf: 'center',
        justifySelf: 'end',
    } }, props.children);
const Tab = (props) => React.createElement("li", { onClick: props.onClick, role: "tab", style: {
        backgroundColor: '#eee',
        borderTopLeftRadius: '3px',
        borderBottomLeftRadius: '3px',
        cursor: 'pointer',
        marginBottom: '1em',
        padding: '1em',
    } }, props.children);
var Aside;
(function (Aside) {
    Aside[Aside["None"] = 0] = "None";
    Aside[Aside["Annotations"] = 1] = "Annotations";
    Aside[Aside["Visualisations"] = 2] = "Visualisations";
})(Aside = exports.Aside || (exports.Aside = {}));
class HucOffCanvasAside extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeAside: this.props.open ? React.Children.toArray(this.props.children)[0].props.type : Aside.None,
            fullScreen: this.props.fullScreen,
        };
        this.handleClose = () => {
            const nextState = {
                activeAside: Aside.None,
            };
            const done = () => setTimeout(() => this.setState({ fullScreen: false }), 300);
            this.setState(nextState, done);
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            fullScreen: nextProps.fullScreen,
        });
    }
    render() {
        return (React.createElement(AsideComp, { activeAside: this.state.activeAside, fullScreen: this.state.fullScreen },
            React.createElement(Tabs, null, React.Children.map(this.props.children, (c) => this.tabs(c.props.type))),
            React.createElement(PanelContainer, null,
                React.createElement(CloseButton, { onClick: this.handleClose }),
                React.Children.toArray(this.props.children).find((c) => c.props.type == this.state.activeAside))));
    }
    tabs(name) {
        return {
            [Aside.Annotations]: React.createElement(Tab, { onClick: () => this.setState({ activeAside: Aside.Annotations }) }, "A"),
            [Aside.Visualisations]: React.createElement(Tab, { onClick: () => this.setState({ activeAside: Aside.Visualisations }) }, "V")
        }[name];
    }
}
HucOffCanvasAside.defaultProps = {
    fullScreen: false,
    open: false,
};
exports.default = HucOffCanvasAside;
