import * as React from 'react';

const ColorBar = () =>
    <div
        style={{
            backgroundColor: '#268f75',
            height: '5px',
            left: 0,
            position: 'fixed',
            right: 0,
            top: 0,
        }}
    />;

const Header = (props) =>
    <header
        style={{
            alignItems: 'center',
            backgroundColor: '#323232',
            color: '#FFF',
            display: 'grid',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '18px',
            gridTemplateColumns: '1fr 2fr 1fr',
            height: '60px',
            paddingTop: '5px',
            width: '100%',
        }}
    >
        {props.children}
    </header>;

const Menu = (props) =>
    <ul>
        {props.children}
    </ul>

const MenuItem = (props) =>
    <li
        onClick={(ev) => props.onClickMenuItem(props.children, ev)}
        style={{
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: '0.85em',
            marginLeft: '1em',
        }}
    >
        {props.children}
    </li>;

const Logo = () =>
    <img
        alt="HuygensING logo"
        src="http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/logo-huygens-ing-inv.svg"
        style={{
            justifySelf: 'end',
            height: '2em',
            marginRight: '2em',
        }}
    />;

export interface IProps {
    menuItems: string[];
    onClickMenuItem: (string, MouseEvent) => void;
    title: string;
}

const HucHeader: React.SFC<IProps> = (props) =>
    <Header>
        <ColorBar />
        <Logo />
        <h1 style={{
            fontWeight: 'normal',
            fontSize: '1em',
        }}>{props.title}</h1>
        <Menu>
            {
                props.menuItems.map(mi =>
                    <MenuItem
                        key={mi}
                        onClickMenuItem={props.onClickMenuItem}
                    >
                        {mi}
                    </MenuItem>
                )
            }
        </Menu>
    </Header>;

HucHeader.defaultProps = {
    menuItems: [],
    onClickMenuItem: () => { console.error('Not implemented')},
}


export default HucHeader;