"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const levisLabel = () => React.createElement("div", { style: {
        position: 'fixed',
        right: '0',
        bottom: '80px',
        marginRight: '-35px',
        borderRadius: '2px 0px 2px 0px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 300,
        backgroundColor: '#268f75',
        color: '#fff',
        padding: '.5em 1em',
        fontSize: '11px',
        transform: 'rotate(90deg)',
    } },
    "Powered by",
    React.createElement("img", { style: {
            height: 'auto',
            width: '17px',
            margin: '-5px 0 -5px 0',
        }, src: "http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/logo-timbuctoo-inv.svg", alt: "Pergamon" }));
exports.default = levisLabel;
