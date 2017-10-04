import * as React from 'react';
import { fontStyle } from '../default-styles';

const Wrapper = (props) =>
	<div
		style={{
			...fontStyle,
			...{}
		}}
	>
		{props.children}
	</div>

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
		style={{
			backgroundColor: '#fff',
			border: '1px solid #ddd',
			fontSize: '1em',
			padding: '0.7em',
		}}
	/>

const Button = (props) =>
	<button
		style={{

		}}
	>
		S
	</button>

class FullTextSearchInput extends React.Component<null, null> {
	public render() {
		return (
			<Wrapper>
				<Label>Search in text</Label>
				<Input />
				<Button />
			</Wrapper>
		)
	}
}

export default FullTextSearchInput;