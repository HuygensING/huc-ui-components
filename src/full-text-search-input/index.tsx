import * as React from 'react';
import { fontStyle } from '../default-styles';

const Section = (props) =>
	<section
		style={{
			...fontStyle,
			...{}
		}}
	>
		{props.children}
	</section>

const Label = (props) =>
	<label
		htmlFor="full-text-search-input-input"
		id="full-text-search-input-label"
		style={{
			display: 'block',
			fontWeight: 'bold',
			marginBottom: '.5em',
		}}
	>
		{props.children}
	</label>

const Input = (props) =>
	<input
		aria-labelledby="full-text-search-input-label"
		id="full-text-search-input-input"
		onChange={props.onChange}
		onKeyDown={props.onKeyDown}
		role="searchbox"
		style={{
			backgroundColor: '#fff',
			border: '1px solid #eee',
			fontSize: '.7em',
			padding: '0.5em',
			width: 'calc(100% - 100px)',
		}}
		value={props.value}
	/>

const Button = (props) =>
	<button
		onClick={props.onClick}
		style={{
			backgroundColor: '#eee',
			fontSize: '.7em',
			padding: '0.6em',
			border:'none',

		}}
	>
		{props.children}
	</button>

interface IOnClick {
	onClick: (any) => void
}

export interface IState {
	query: string
}
export interface IProps {
	onButtonClick: (query: string, ev: MouseEvent) => void
	onChange: (ev: any) => void
	onKeyDown: (ev: any) => void
	query?: string
}
class FullTextSearchInput extends React.Component<IProps, IState> {
	public state = {
		query: this.props.query || '',
	}

	public componentWillReceiveProps(nextProps) {
		if (this.props.query !== nextProps.query) {
			this.setState({
				query: nextProps.query
			})
		}
	}

	public render() {
		return (
			<Section>
				<Label>Search in text</Label>
				<Input
					onChange={(ev) => {
						this.setState({
							query: ev.target.value,
						})
						this.props.onChange(ev)
					}}
					onKeyDown={this.props.onKeyDown}
					value={this.state.query}
				/>
				<Button onClick={(ev) => this.props.onButtonClick(this.state.query, ev)}>
					Search
				</Button>
			</Section>
		)
	}
}

export default FullTextSearchInput