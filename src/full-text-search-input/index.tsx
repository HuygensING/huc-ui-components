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
		role="searchbox"
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
			<Section>
				<Label>Search in text</Label>
				<Input />
				<Button />
			</Section>
		)
	}
}

export default FullTextSearchInput;