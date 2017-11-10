import * as React from 'react'
import { Aside } from './index'

export interface IPanel {
	style: React.CSSProperties
	title: string
	type: Aside
}
const Panel: React.SFC<IPanel> = (props) =>
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

export default Panel