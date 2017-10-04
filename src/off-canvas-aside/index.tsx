import * as React from 'react';

const Aside = (props) =>
	<aside
		style={{
			bottom: 0,
			boxSizing: 'border-box',
			display: 'grid',
			gridTemplateColumns: '40px auto',
			gridTemplateRows: '100%',
			left: props.activeAside === Asides.None ? 'calc(100% - 40px)' : '50%',
			overflow: 'hidden',
			position: 'absolute',
			right: 0,
			top: '65px',
			transition: 'left 300ms ease-in-out',
			whiteSpace: 'normal',
			width: '50%',
		}}
	>
		{props.children}
	</aside>;

const Body = (props) =>
	<div
		style={{
			backgroundColor: '#EEE',
			boxSizing: 'border-box',
			height: '100%',
			overflow: 'auto',
			padding: '1em',
		}}
	>
		{props.children}
	</div>

const CloseButton = (props) =>
	<div
		onClick={props.onClick}
		style={{
			cursor: 'pointer',
			fontSize: '1.5em',
			fontWeight: 'bold',
			position: 'absolute',
			right: '1em',
			top: '0.5em',
		}}
	>
		✕
	</div>;

const Tabs = (props) =>
	<ul
		style={{
			alignSelf: 'center',
			justifySelf: 'end',
		}}
	>
		{props.children}
	</ul>

const Tab = (props) =>
	<li
		onClick={props.onClick}
		style={{
			backgroundColor: '#eee',
			borderTopLeftRadius: '3px',
			borderBottomLeftRadius: '3px',
			cursor: 'pointer',
			marginBottom: '1em',
			padding: '1em',
		}}
	>
		{props.children}
	</li>


export interface IProps {
}

export enum Asides { None, Annotations, Visualisations }
export interface IState {
	activeAside: Asides;
}

class HucOffCanvasAside extends React.Component<IProps, IState> {
	static defaultProps = {
	}

	public state = {
		activeAside: Asides.Annotations,
	}
	
	public render() {
		return (
			<Aside activeAside={this.state.activeAside}>
				<Tabs>
					<Tab
						onClick={() => this.setState({ activeAside: Asides.Annotations })}
					>
						A	
					</Tab>
					<Tab
						onClick={() => this.setState({ activeAside: Asides.Visualisations })}
					>
						V
					</Tab>
				</Tabs>
				<Body>{this.props.children}</Body>
				<CloseButton
					onClick={() => this.setState({ activeAside: Asides.None })}
				/>
			</Aside>
		);
	}
}

export default HucOffCanvasAside;
