import * as React from 'react'
import { Aside } from './index'

export const PanelContainer = (props) =>
	<section
		role="tabpanel"
		style={{
			backgroundColor: '#EEE',
			boxSizing: 'border-box',
			height: '100%',
			overflow: 'auto',
			padding: '1.5em',
		}}
	>
		{props.children}
	</section>

export interface IPanel {
	style: React.CSSProperties
	title: string
	type: Aside
}
export const Panel: React.SFC<IPanel> = (props) =>
	<div style={props.style}>
		{
			props.title &&
			<h2
				style={{
					marginBottom: '1em',
				}}
			>
				{props.title}
			</h2>
		}
		{props.children}
	</div>
