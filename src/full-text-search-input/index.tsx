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
		}}
	>
		{props.children}
	</label>

const Input = (props) =>
	<input
		aria-labelledby="full-text-search-input-label"
		id="full-text-search-input-input"
		onChange={props.onChange}
		role="searchbox"
		style={{
			backgroundColor: '#fff',
			border: '1px solid #ddd',
			fontSize: '1em',
			padding: '0.7em',
		}}
		value={props.value}
	/>

const Button = (props) =>
	<button
		onClick={props.onClick}
		style={{

		}}
	>
		S
	</button>

export interface IState {
	query: string
}
export interface IProps {
	onButtonClick: (query: string, ev: MouseEvent) => void
	query?: string
}
class FullTextSearchInput extends React.Component<IProps, IState> {
	public state = {
		query: this.props.query || '',
	}

	public render() {
		return (
			<Section>
				<Label>Search in text</Label>
				<Input
					onChange={(ev) =>  this.setState({ query: ev.target.value })}
					value={this.state.query}
				/>
				<Button onClick={(ev) => this.props.onButtonClick(this.state.query, ev)} />
			</Section>
		)
	}
}

export default FullTextSearchInput