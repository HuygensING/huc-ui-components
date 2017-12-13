"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const levisLabel = (props) => React.createElement("div", { style: {
        backgroundColor: '#268f75',
        borderRadius: '2px 0px 2px 0px',
        bottom: '80px',
        color: '#fff',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '11px',
        fontWeight: 300,
        marginRight: '-35px',
        padding: '.5em 1em',
        position: 'fixed',
        right: '0',
        transform: 'rotate(90deg)',
        zIndex: 999
    } },
    React.createElement("a", { href: props.href, target: "_blanc", style: {
            color: '#fff',
            textDecoration: 'none',
        } },
        "Powered by",
        React.createElement("img", { style: {
                height: 'auto',
                width: '17px',
                margin: '-5px 0 -5px 5px',
                transform: 'rotate(-90deg)',
            }, src: `${props.imgBaseDir}/logo-pergamon.svg`, alt: "Pergamon" })));
levisLabel.defaultProps = {
    href: "http://it.huygens.knaw.nl/index.php/digital-infrastructure/pergamon/",
    imgBaseDir: '/static/graphics/ui',
};
exports.default = levisLabel;
