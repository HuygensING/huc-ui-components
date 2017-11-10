import * as React from 'react';
import { fontStyle } from '../default-styles';

const tabLabelWidth = '40px'

const AsideComp = (props) =>
	<aside
		role="complementary"
		style={{
			...fontStyle,
			bottom: 0,
			boxSizing: 'border-box',
			display: 'grid',
			gridTemplateColumns: `${tabLabelWidth} auto`,
			gridTemplateRows: '100%',
			height: '100%',
			left: props.activeAside === Aside.None ?
				`calc(100% - ${tabLabelWidth})` :
				props.fullScreen ?
					`-${tabLabelWidth}` :
					'50%',
			overflow: 'hidden',
			position: 'fixed',
			right: 0,
			top: 0,
			transition: 'left 300ms ease-in-out',
			whiteSpace: 'normal',
			width: props.fullScreen ? `calc(100% + ${tabLabelWidth})` : '50%',
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
			padding: '1.5em',
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
			position: 'absolute',
			right: '1em',
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
			marginBottom: '.5em',
			padding: '.5em .5em .2em .5em',
			width: tabLabelWidth,
		}}
	>
		{props.children}
	</li>


export interface IProps {
	fullScreen: boolean
	onChangeActiveAside: (a: Aside) => void
	onClose: () => void
	open: boolean
}

export enum Aside { None, Annotations, Metadata, Visualisations }
export interface IState {
	activeAside: Aside
}

class HucOffCanvasAside extends React.Component<IProps, IState> {
	static defaultProps = {
		fullScreen: false,
		open: false,
	}

	public state = {
		activeAside: this.props.open ? (React.Children.toArray(this.props.children)[0] as JSX.Element).props.type : Aside.None,
	}

	public componentWillUpdate(nextProps, nextState) {
		if (this.props.onChangeActiveAside != null && this.state.activeAside !== nextState.activeAside) {
			this.props.onChangeActiveAside(nextState.activeAside)
		}
	}
	
	public render() {
		return (
			<AsideComp
				activeAside={this.state.activeAside}
				fullScreen={this.props.fullScreen}
			>
				<Tabs>
					{
						React.Children.map(this.props.children, (c: JSX.Element) => this.tabs(c.props.type))
					}
				</Tabs>
				<div style={{
					backgroundColor: '#eee',
					paddingTop: '65px',
				}}>
					<PanelContainer>
						<CloseButton
							onClick={this.handleClose}
						/>
						{
							React.Children.toArray(this.props.children).find((c: JSX.Element) => c.props.type == this.state.activeAside)
						}
					</PanelContainer>
				</div>
			</AsideComp>
		);
	}

	private handleClose = () => {
		this.setState({activeAside: Aside.None})
		if (this.props.onClose) this.props.onClose()
	}

	private tabs(name) {
		return {
			[Aside.Annotations]: 
				<Tab
					onClick={() => this.setState({ activeAside: Aside.Annotations })}
				>
					<img
						alt="Annotations tab icon"
						src="http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/icons/huc-tab-annotations.svg"
						style={{
							width: '1em',
						}}
					/>
				</Tab>,
			[Aside.Visualisations]:
				<Tab
					onClick={() => this.setState({ activeAside: Aside.Visualisations })}
				>
					<img
						alt="Visualisations tab icon"
						src="http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/icons/huc-tab-visualisations.svg"
						style={{
							width: '1em',
						}}
					/>
				</Tab>,
			[Aside.Metadata]:
				<Tab
					onClick={() => this.setState({ activeAside: Aside.Metadata })}
				>
					<img
						alt="Metadata tab icon"
						src="http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/icons/huc-tab-metadata.svg"
						style={{
							width: '1em',
						}}
					/>
				</Tab>
		}[name]
	}
}

export default HucOffCanvasAside;
