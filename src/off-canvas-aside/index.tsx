import * as React from 'react';

const AsideComp = (props) =>
	<aside
		role="complementary"
		style={{
			bottom: 0,
			boxSizing: 'border-box',
			display: 'grid',
			gridTemplateColumns: '40px auto',
			gridTemplateRows: '100%',
			left: props.activeAside === Aside.None ? 'calc(100% - 40px)' : '50%',
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

const PanelContainer = (props) =>
	<section
		role="tabpanel"
		style={{
			backgroundColor: '#EEE',
			boxSizing: 'border-box',
			height: '100%',
			overflow: 'auto',
			padding: '1em',
		}}
	>
		{props.children}
	</section>

const CloseButton = (props) =>
	<div
		onClick={props.onClick}
		style={{
			cursor: 'pointer',
			fontSize: '1.5em',
			fontWeight: 'bold',
			marginBottom: '1em',
			textAlign: 'right',
		}}
	>
		✕
	</div>;

const Tabs = (props) =>
	<ul
		role="tablist"
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
		role="tab"
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

export enum Aside { None, Annotations, Visualisations }
export interface IState {
	activeAside: Aside;
}

class HucOffCanvasAside extends React.Component<IProps, IState> {
	static defaultProps = {
	}

	public state = {
		activeAside: Aside.Visualisations,
	}
	
	public render() {
		return (
			<AsideComp activeAside={this.state.activeAside}>
				<Tabs>
					{
						React.Children.map(this.props.children, (c: JSX.Element) => this.tabs(c.props.type))
					}
				</Tabs>
				<PanelContainer>
					<CloseButton
						onClick={() => this.setState({ activeAside: Aside.None })}
					/>
					{
						React.Children.toArray(this.props.children).find((c: JSX.Element) => c.props.type == this.state.activeAside)
					}
				</PanelContainer>
			</AsideComp>
		);
	}

	private tabs(name) {
		return {
			[Aside.Annotations]: 
				<Tab
					onClick={() => this.setState({ activeAside: Aside.Annotations })}
				>
					A	
				</Tab>,
			[Aside.Visualisations]:
				<Tab
					onClick={() => this.setState({ activeAside: Aside.Visualisations })}
				>
					V
				</Tab>
		}[name]
	}
}

export default HucOffCanvasAside;
