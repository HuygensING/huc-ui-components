import * as React from 'react';
import { fontStyle } from '../default-styles';

const Section: React.SFC = (props) =>
	<section
		style={fontStyle}
	>
		{props.children}
	</section>

const Header: React.SFC = (props) =>
	<header
		role="heading"
		style={{
			color: '#888',
			display: 'grid',
			fontSize: '.85em',
			gridTemplateColumns: '1fr 1fr',
			padding: '0 1em 1em 1em',
		}}
	>
		{props.children}
	</header>

interface IResultCount {
	resultCount: number;
}
const ResultCount: React.SFC<IResultCount> = (props) =>
	<div>
		Found {props.resultCount} result{props.resultCount === 1 ? '' : 's'}
	</div>

const OrderBy: React.SFC = (props) =>
	<div
		style={{
			justifySelf: 'end',
		}}
	>
		Order by <em>date</em>
	</div>

const ResultList: React.SFC = (props) =>
	<ul
		style={{
			listStyle: 'none',
			margin: 0,
			padding: 0,
		}}
	>
		{props.children}
	</ul>

interface IResult {
	onClick: (ev: React.MouseEvent<HTMLLIElement>) => void
}
const Result: React.SFC<IResult> = (props) =>
	<li
		onClick={props.onClick}
		style={{
			backgroundColor: '#F6F6F6',
			marginBottom: '1em',
			padding: '1em',
			cursor: 'pointer',
		}}
	>
		{props.children}
	</li>

export interface IResultBody {
	result: number
}
export interface IHucSearchResults {
	onClickResult: (result: any, ev: React.MouseEvent<HTMLLIElement>) => void
	resultBodyComponent: React.SFC<IResultBody>
	searchResults: {
		hits: any[],
		total: number,
	}
}
const HucSearchResults: React.SFC<IHucSearchResults> = (props) =>
	<Section>
		<Header>
			<ResultCount resultCount={props.searchResults.total} />
			<OrderBy />
		</Header>
		<ResultList>
			{
				props.searchResults.hits.map((result, i) =>
					<Result
						key={i}
						onClick={(ev) => props.onClickResult(result, ev)}
					>
						<props.resultBodyComponent {...props} result={result} />
					</Result>
				)
			}
		</ResultList>
	</Section>

export default HucSearchResults;
