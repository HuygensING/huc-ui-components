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

const Result: React.SFC = (props) =>
	<li
		style={{
			backgroundColor: '#F6F6F6',
			marginBottom: '1em',
			padding: '1em',
		}}
	>
		{props.children}
	</li>

export interface IResultBody {
	result: number;
}
export interface IHucSearchResults {
	resultBodyComponent: React.SFC<IResultBody>;
	searchResults: any[];
}
const HucSearchResults: React.SFC<IHucSearchResults> = (props) =>
	<Section>
		<Header>
			<ResultCount resultCount={2} />
			<OrderBy />
		</Header>
		{console.log(props)}
		<ResultList>
			{
				props.searchResults.map((result, i) =>
					<Result key={i}>
						<props.resultBodyComponent {...props} result={result} />
					</Result>
				)
			}
		</ResultList>
	</Section>

export default HucSearchResults;