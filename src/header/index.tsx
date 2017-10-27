import * as React from 'react';
import { fontStyle } from '../default-styles';

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
			...fontStyle,
			alignItems: 'center',
			backgroundColor: '#323232',
			color: '#FFF',
			display: 'grid',
			gridTemplateColumns: '1fr 2fr 1fr',
			height: '60px',
			paddingTop: '5px',
			position: 'relative',
			width: '100%',
			zIndex: 1,
		}}
	>
		{props.children}
	</header>;

const Menu = (props) =>
	<ul role="menubar">
		{props.children}
	</ul>

const MenuItem = (props) =>
	<li
		onClick={(ev) => props.onClickMenuItem(props.children, ev)}
		role="menuitem"
		style={{
			cursor: 'pointer',
			display: 'inline-block',
			fontSize: '0.85em',
			marginLeft: '1em',
		}}
	>
		{props.children}
	</li>;

const Logo = (props) =>
	<img
		alt="HuygensING logo"
		onClick={props.onClick}
		src="http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/logo-huygens-ing-inv.svg"
		style={{
			cursor: props.onClick == null ? 'default' : 'pointer',
			height: '2em',
			justifySelf: 'end',
			marginRight: '2em',
		}}
	/>;

const Title = (props) =>
	<h1
		onClick={props.onClick}
		style={{
			cursor: props.onClick == null ? 'default' : 'pointer',
			fontWeight: 'normal',
			fontSize: '1em',
		}}
	>
		{props.children}
	</h1>

export interface IProps {
	menuItems: string[];
	onClickTitle: (MouseEvent) => void;
	onClickLogo: (MouseEvent) => void;
	onClickMenuItem: (string, MouseEvent) => void;
	title: string;
}

const HucHeader: React.SFC<IProps> = (props) =>
	<Header>
		<ColorBar />
		<Logo onClick={props.onClickLogo} />
		<Title onClick={props.onClickTitle}>{props.title}</Title>
		<nav role="navigation">
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
		</nav>
	</Header>;

HucHeader.defaultProps = {
	menuItems: [],
	onClickMenuItem: () => { console.error('Not implemented')},
}


export default HucHeader;