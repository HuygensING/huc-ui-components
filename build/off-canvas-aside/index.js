"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const default_styles_1 = require("../default-styles");
const tabs_1 = require("./tabs");
const panel_1 = require("./panel");
exports.tabLabelWidth = 40;
var Aside;
(function (Aside) {
    Aside[Aside["None"] = 0] = "None";
    Aside[Aside["Annotations"] = 1] = "Annotations";
    Aside[Aside["Metadata"] = 2] = "Metadata";
    Aside[Aside["Visualisations"] = 3] = "Visualisations";
})(Aside = exports.Aside || (exports.Aside = {}));
const AsideComp = (props) => React.createElement("aside", { role: "complementary", style: Object.assign({}, default_styles_1.fontStyle, { bottom: 0, boxSizing: 'border-box', display: 'grid', gridTemplateColumns: `${exports.tabLabelWidth}px auto`, gridTemplateRows: '100%', height: '100%', overflow: 'hidden', position: 'fixed', right: props.activeAside === Aside.None ? `${exports.tabLabelWidth - props.width}px` : 0, top: 0, transition: 'right 300ms ease-in-out', whiteSpace: 'normal', width: props.fullScreen ? `calc(100% + ${exports.tabLabelWidth}px)` : `${props.width}px` }) }, props.children);
const CloseButton = (props) => React.createElement("div", { onClick: props.onClick, style: {
        cursor: 'pointer',
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom: '1em',
        position: 'absolute',
        right: '1em',
    } }, "\u2715");
class HucOffCanvasAside extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeAside: this.props.open ? React.Children.toArray(this.props.children)[0].props.type : Aside.None,
        };
        this.handleClose = () => {
            this.setState({ activeAside: Aside.None });
            if (this.props.onClose)
                this.props.onClose();
        };
    }
    componentWillUpdate(nextProps, nextState) {
        if (this.props.onChangeActiveAside != null && this.state.activeAside !== nextState.activeAside) {
            this.props.onChangeActiveAside(nextState.activeAside);
        }
    }
    render() {
        return (React.createElement(AsideComp, { activeAside: this.state.activeAside, fullScreen: this.props.fullScreen, width: this.props.width },
            React.createElement(tabs_1.Tabs, null, React.Children.map(this.props.children, (c) => this.tabs(c.props.type))),
            React.createElement("div", { style: {
                    backgroundColor: '#eee',
                    paddingTop: '65px',
                } },
                React.createElement(panel_1.PanelContainer, null,
                    React.createElement(CloseButton, { onClick: this.handleClose }),
                    React.Children.toArray(this.props.children).find((c) => c.props.type == this.state.activeAside)))));
    }
    tabs(name) {
        return {
            [Aside.Annotations]: React.createElement(tabs_1.Tab, { onClick: () => this.setState({ activeAside: Aside.Annotations }) },
                React.createElement("img", { alt: "Annotations tab icon", src: "/static/graphics/ui/huc-tab-annotations.svg", style: {
                        width: '1em',
                    } })),
            [Aside.Visualisations]: React.createElement(tabs_1.Tab, { onClick: () => this.setState({ activeAside: Aside.Visualisations }) },
                React.createElement("img", { alt: "Visualisations tab icon", src: "/static/graphics/ui/huc-tab-visualisations.svg", style: {
                        width: '1em',
                    } })),
            [Aside.Metadata]: React.createElement(tabs_1.Tab, { onClick: () => this.setState({ activeAside: Aside.Metadata }) },
                React.createElement("img", { alt: "Metadata tab icon", src: "/static/graphics/ui/huc-tab-metadata.svg", style: {
                        width: '1em',
                    } }))
        }[name];
    }
}
HucOffCanvasAside.defaultProps = {
    fullScreen: false,
    open: false,
    style: {},
    width: 400 + exports.tabLabelWidth,
};
exports.default = HucOffCanvasAside;
