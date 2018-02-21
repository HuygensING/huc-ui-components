import * as React from 'react';
import { fontStyle } from '../default-styles';

const A = (props) =>
	<a
		href={props.href}
		style={{
			color: 'inherit',
			textDecoration: 'none',
			...props.style
		}}
	>
		{props.children}
	</a>

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
		role="menuitem"
		style={{
			cursor: 'pointer',
			display: 'inline-block',
			fontSize: '0.85em',
			marginLeft: '1em',
		}}
	>
		<A href={props.href}>{props.children}</A>
	</li>;

const Logo = (props) =>
	<A
		href={props.href}
		style={{
			height: '2em',
			justifySelf: 'end',
			marginRight: '2em',
		}}
	>
		<img
			alt="HuygensING logo"
			src="/static/graphics/ui/huygens-logo.png"
		/>
	</A>

const Title = (props) =>
	<h1
		style={{
			fontWeight: 'normal',
			fontSize: '1em',
		}}
	>
		<A href={props.href}>{props.children}</A>
	</h1>

export interface IProps {
	logoLocation: string
	titleLocation: string
	menuItems: string[];
	menuLocations: {
		[item: string]: string
	}
	title: string;
}

const HucHeader: React.SFC<IProps> = (props) =>
	<Header>
		<ColorBar />
		<Logo href={props.logoLocation} />
		<Title href={props.titleLocation}>{props.title}</Title>
		<nav role="navigation">
			<Menu>
				{
					props.menuItems.map(mi =>
						<MenuItem
							href={props.menuLocations[mi] || '/'}
							key={mi}
						>
							{mi}
						</MenuItem>
					)
				}
			</Menu>
		</nav>
	</Header>;

HucHeader.defaultProps = {
	logoLocation: '/',
	menuItems: [],
	menuLocations: {},
	titleLocation: '/',
}


export default HucHeader;