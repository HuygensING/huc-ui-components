import * as React from 'react';
import { fontStyle } from '../default-styles';
import { Tab, Tabs } from './tabs'
import { Panel, PanelContainer } from './panel'

export const tabLabelWidth: number = 40
export enum Aside { None, Annotations, Metadata, Visualisations }

const AsideComp = (props) =>
	<aside
		role="complementary"
		style={{
			...fontStyle,
			bottom: 0,
			boxSizing: 'border-box',
			display: 'grid',
			gridTemplateColumns: `${tabLabelWidth}px auto`,
			gridTemplateRows: '100%',
			height: '100%',
			overflow: 'hidden',
			position: 'fixed',
			right: props.activeAside === Aside.None ? `${tabLabelWidth - props.width}px` : 0,
			top: 0,
			transition: 'right 300ms ease-in-out',
			whiteSpace: 'normal',
			width: props.fullScreen ? `calc(100% + ${tabLabelWidth}px)` : `${props.width}px`,
		}}
	>
		{props.children}
	</aside>;

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

export interface IProps {
	fullScreen: boolean
	onChangeActiveAside: (a: Aside) => void
	onClose: () => void
	open: boolean
	width: number // In pixels
}
export interface IState {
	activeAside: Aside
}
class HucOffCanvasAside extends React.Component<IProps, IState> {
	static defaultProps = {
		fullScreen: false,
		open: false,
		style: {},
		width: 400 + tabLabelWidth,
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
				width={this.props.width}
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
