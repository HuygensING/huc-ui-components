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
		{props.children}
	</button>

const SemanticSuggestions: React.SFC = (props) =>
	<ul>
		{props.children}
	</ul>

interface IOnClick {
	onClick: (any) => void
}
interface ISuggestionState {
	hover: boolean
}
class Suggestion extends React.Component<IOnClick, ISuggestionState> {
	public state = {
		hover: false,
	}

	public render() {
		return (
			<li
				onClick={this.props.onClick}
				onMouseEnter={() => this.setState({ hover: true })}
				onMouseLeave={() => this.setState({ hover: false })}
				style={{
					background: this.state.hover ? '#245b6d' : 'lightblue',
					borderRadius: '3px',
					color: this.state.hover ? 'white' : 'inherit',
					cursor: 'pointer',
					display: 'inline-block',
					marginBottom: '0.3em',
					marginRight: '0.2em',
					padding: '0.1em 0.3em',
				}}
			>
				{this.props.children}
			</li>
		)
	}
}

export interface IState {
	query: string
	suggestions: string[]
}
export interface IProps {
	onButtonClick: (query: string, ev: MouseEvent) => void
	query?: string
}
class FullTextSearchInput extends React.Component<IProps, IState> {
	public state = {
		query: this.props.query || '',
		suggestions: [],
	}

	public render() {
		return (
			<Section>
				<Label>Search in text</Label>
				<Input
					onChange={(ev) =>  this.setState({
						query: ev.target.value,
						suggestions: []
					})}
					value={this.state.query}
				/>
				<Button onClick={(ev) => this.props.onButtonClick(this.state.query, ev)}>
					s
				</Button>
				<Section>
					<Button
						onClick={async (ev) => {
							const xhr = await fetch(`/api/search`, {
								body: JSON.stringify({ query: this.state.query }),
								headers: {
									'Content-Type': 'application/json'
								},
								method: 'POST',
							})
							const data = await xhr.json()
							this.setState({ suggestions: data.suggestions.map(s => s.slice(0, s.indexOf(' '))) })
						}}
					>
						Semantic suggestion
					</Button>
					<SemanticSuggestions>
						{
							this.state.suggestions.map((s =>
								<Suggestion
									key={s}
									onClick={(ev) => {
										this.setState({
											query: s,
											suggestions: [],
										})
										this.props.onButtonClick(s, ev)
									}}
								>
									{s}
								</Suggestion>
							))
						}
					</SemanticSuggestions>
				</Section>
			</Section>
		)
	}
}

export default FullTextSearchInput