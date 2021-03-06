import * as React from 'react'

const Suggestions: React.SFC = (props) =>
	<ul
		style={{
			boxSizing: 'border-box',
			listStyle: 'none',
			margin: 0,
			padding: 0,
			position: 'absolute',
			width: 'calc(100% - 100px)',
            border: '1px solid #eee',
            borderBottom: '0px',
			zIndex: 1,
		}}
	>
		{props.children}
	</ul>


interface ISuggestionProps {
	activateSuggestion: (s: string) => void
	active: boolean
	onClick: (ev: any) => void
}
interface ISuggestionState {
	hover: boolean
}
class Suggestion extends React.Component<ISuggestionProps, ISuggestionState> {
	public state = {
		hover: false,
	}

	public render() {
		return (
			<li
				onClick={(ev) => this.props.activateSuggestion(this.props.children as string)}
				onMouseEnter={() => this.setState({ hover: true })}
				onMouseLeave={() => this.setState({ hover: false })}
				style={{
					background: this.props.active || this.state.hover ? '#eee' : '#fff',
					borderBottom: '1px solid #eee',
					padding: '.3em',
				}}
			>
				{this.props.children}
			</li>
		)
	}
}

export interface IProps {
	activateSuggestion: (s: string) => void
	activeSuggestion: string | null
	suggestions: string[]
}
const AutoSuggest: React.SFC<IProps> = (props) =>
	<Suggestions>
		{
			props.suggestions.map((suggestion, index) =>
				<Suggestion
					activateSuggestion={props.activateSuggestion}
					active={props.activeSuggestion === suggestion}
					key={index}
					onClick={() => {}}
				>
					{suggestion}
				</Suggestion>
			)
		}
	</Suggestions>

export default AutoSuggest