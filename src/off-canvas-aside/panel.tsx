import * as React from 'react'
import { Aside } from './index'

export interface IPanel {
	title: string
	type: Aside
}
const Panel: React.SFC<IPanel> = (props) =>
	<div>
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