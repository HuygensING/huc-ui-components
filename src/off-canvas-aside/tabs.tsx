import * as React from 'react'
import { tabLabelWidth } from './index'

export const Tabs = (props) =>
	<ul
		role="tablist"
		style={{
			alignSelf: 'center',
			justifySelf: 'end',
			margin: 0,
			padding: 0,
			listStyle: 'none',
		}}
	>
		{props.children}
	</ul>

export const Tab = (props) =>
	<li
		onClick={props.onClick}
		role="tab"
		style={{
			backgroundColor: '#eee',
			borderTopLeftRadius: '3px',
			borderBottomLeftRadius: '3px',
			cursor: 'pointer',
			marginBottom: '.5em',
			padding: '.5em .5em .2em .5em',
			width: tabLabelWidth,
		}}
	>
		{props.children}
	</li>