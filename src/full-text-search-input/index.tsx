import * as React from 'react';
import { fontStyle } from '../default-styles';
import AutoSuggest from './auto-suggest'

const Section = (props) =>
	<section
		style={{
			...fontStyle,
			position: 'relative',
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
			boxSizing: 'border-box',
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
			border:'none',
			boxSizing: 'border-box',
			fontSize: '.7em',
			padding: '0.6em',
			width: '100px',
		}}
	>
		{props.children}
	</button>

export interface IState {
	activeSuggestion: string | null
	query: string
	suggestions: string[]
}
export interface IProps {
	autoSuggest: (query: string) => string[]
	minimalQueryLength: number
	onChange: (q: string) => void
	onKeyDown: (ev: any) => void
	query: string
	search: (query: string, ev?: MouseEvent) => void
}
class FullTextSearchInput extends React.Component<IProps, IState> {
	static defaultProps = {
		minimalQueryLength: 2,
		query: '',
	}

	public state = {
		activeSuggestion: null,
		query: this.props.query || '',
		suggestions: []
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
					onChange={async (ev) => {
						const query = ev.target.value
						this.setState({ query })
						this.props.onChange(query)

						const suggestions = this.props.autoSuggest && query.length >= this.props.minimalQueryLength ?
							await this.props.autoSuggest(query) :
							[]
						this.setState({ suggestions })
					}}
					onKeyDown={(ev) => {
						if (ev.keyCode === 38 || ev.keyCode === 40) {
							this.setActiveSuggestion(ev.keyCode)
						} else if (ev.keyCode === 13) {
							const activeSuggestion = this.state.activeSuggestion
							if (typeof activeSuggestion === 'string') {
								this.activateSuggestion(activeSuggestion)
							} else {
								this.props.onChange(this.state.query)
								this.search(this.state.query, ev)
							}
						} else if (this.props.onKeyDown != null) {
							this.props.onKeyDown(ev)
						}
					}}
					value={this.state.query}
				/>
				<Button onClick={(ev) => this.search(this.state.query, ev)}>
					Search
				</Button>
				{
					this.props.autoSuggest != null &&
					<AutoSuggest
						activateSuggestion={this.activateSuggestion}
						activeSuggestion={this.state.activeSuggestion}
						suggestions={this.state.suggestions}
					/>
				}
			</Section>
		)
	}

	private activateSuggestion = (suggestion: string) => {
		this.setState({
			query: suggestion,
			suggestions: [],
		})

		this.props.onChange(suggestion)
		this.search(suggestion)
	}

	private search = (query: string, ev?: any) => {
		this.setState({ suggestions: [] })
		this.props.search(query, ev)
	}

	private setActiveSuggestion = (keyCode: number) => {
		let activeSuggestion: string | null = this.state.activeSuggestion;

		if (typeof activeSuggestion === 'string') {
			const index = this.state.suggestions.indexOf(activeSuggestion)
			if (keyCode === 40) {
				 activeSuggestion = (index < (this.state.suggestions.length - 1)) ?
					 this.state.suggestions[index + 1] :
					 this.state.suggestions[0]
			}
			if (keyCode === 38) {
				 activeSuggestion = (index > 0) ?
				 	this.state.suggestions[index - 1] :
					this.state.suggestions[this.state.suggestions.length - 1]
			}
		} else {
			if (keyCode === 40) activeSuggestion = this.state.suggestions[0]
			if (keyCode === 38) activeSuggestion = this.state.suggestions[this.state.suggestions.length - 1]
		}

		this.setState({ activeSuggestion })
	}
}

export default FullTextSearchInput