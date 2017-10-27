import * as React from 'react';
import { fontStyle } from '../default-styles';

const AsideComp = (props) =>
	<aside
		role="complementary"
		style={{
			...fontStyle,
			bottom: 0,
			boxSizing: 'border-box',
			display: 'grid',
			gridTemplateColumns: '40px auto',
			gridTemplateRows: '100%',
			left: props.activeAside === Aside.None ?
				'calc(100% - 40px)' :
				props.fullScreen ?
					'-40px' :
					'50%',
			overflow: 'hidden',
			position: 'absolute',
			right: 0,
			top: '65px',
			transition: 'left 300ms ease-in-out',
			whiteSpace: 'normal',
			width: props.fullScreen ? 'calc(100% + 40px)' : '50%',
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
	fullScreen: boolean
	open: boolean
}

export enum Aside { None, Annotations, Visualisations }
export interface IState {
	activeAside: Aside
	fullScreen: boolean
}

class HucOffCanvasAside extends React.Component<IProps, IState> {
	static defaultProps = {
		fullScreen: false,
		open: false,
	}

	public state = {
		activeAside: this.props.open ? (React.Children.toArray(this.props.children)[0] as JSX.Element).props.type : Aside.None,
		fullScreen: this.props.fullScreen,
	}

	public componentWillReceiveProps(nextProps) {
		this.setState({
			fullScreen: nextProps.fullScreen,
		})
	}
	
	public render() {
		return (
			<AsideComp
				activeAside={this.state.activeAside}
				fullScreen={this.state.fullScreen}
			>
				<Tabs>
					{
						React.Children.map(this.props.children, (c: JSX.Element) => this.tabs(c.props.type))
					}
				</Tabs>
				<PanelContainer>
					<CloseButton
						onClick={this.handleClose}
					/>
					{
						React.Children.toArray(this.props.children).find((c: JSX.Element) => c.props.type == this.state.activeAside)
					}
				</PanelContainer>
			</AsideComp>
		);
	}

	private handleClose = () => {
		const nextState = {
			activeAside: Aside.None,
		}

		const done = () =>
			setTimeout(
				() => this.setState({ fullScreen: false }),
				300
			)

		this.setState(nextState, done)
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
