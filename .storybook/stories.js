import React from 'react';
import { storiesOf } from '@storybook/react';
import {
	Aside,
	HucBrandLabel,
	HucFullTextSearchInput,
	HucHeader,
	HucOffCanvasAside,
	HucSearchResults,
	HucTooltip,
	Panel
} from '../src';
import ResultBody from './result-body'

storiesOf('HucBrandLabel', module)
	.add('empty', () => <HucBrandLabel />)

storiesOf('HucHeader', module)
	.add('empty', () => <HucHeader>This is added</HucHeader>)
	.add('with title', () => <HucHeader title="ePistolarium" />)
	.add('with menu', () => <HucHeader title="ePistolarium" menuItems={["Home", "About"]} />);

storiesOf('HucOffCanvasAside', module)
	.add('empty', () =>
		<HucOffCanvasAside open><Panel type={Aside.Annotations}>This is added</Panel></HucOffCanvasAside>)

storiesOf('HucFullTextSearchInput', module)
	.add('default', () => <HucFullTextSearchInput />)
	.add('suggestions', () =>
		<HucFullTextSearchInput
			autoSuggest={(query) => new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(
						[ 'ping-pong', 'tafeltennis', 'basketbal', 'basketball', 'goud', 'gold', 'voetbal', 'foetbal', 'footbal', 'football' ]
							.filter(x => x.indexOf(query) > -1)
							.sort()
					)
				}, 1000)
			})
			}
			onChange={(query) => console.log(query)}
			search={(query) => console.log(query)}
		/>
	)

storiesOf('HucSearchResults', module)
	.add('default', () =>
		<HucSearchResults
			resultBodyComponent={ResultBody}
			searchResults={{
				hits: [1, 3, 5, 9],
				total: 4,
			}}
		/>
	)

storiesOf('Search', module)
	.add('grid', () =>
		<section
			style={{
				display: 'grid',
				gridTemplateColumns: 'minmax(320px, 1fr) 3fr',
				gridColumnGap: '1fr',
				padding: '3em',
			}}
		>
			<HucFullTextSearchInput />
			<HucSearchResults
				resultBodyComponent={ResultBody}
				searchResults={{
					hits: [1, 3, 5, 9],
					total: 4,
				}}
			/>
		</section>			
	)

const defaultTooltipStyle = {
	left: '100px',
	top: '100px',
	width: '200px',
}
storiesOf('Tooltip', module)
	.add('default', () =>
		<HucTooltip
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('orientation: top', () =>
		<HucTooltip
			orientation="top"
			style={defaultTooltipStyle}
			bodyStyle={{
				backgroundColor: 'yellow',
				boxShadow: '6px 6px 6px rgba(0, 0, 0, 0.4)',
				borderColor: 'red',
			}}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('orientation: right', () =>
		<HucTooltip
			orientation="right"
			style={defaultTooltipStyle}
			bodyStyle={{
				backgroundColor: 'lightgreen',
				borderColor: 'green',
			}}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('orientation: bottom', () =>
		<HucTooltip
			orientation="bottom"
			style={defaultTooltipStyle}
			bodyStyle={{
				backgroundColor: 'lightblue',
				borderColor: 'blue',
			}}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('orientation: left', () =>
		<HucTooltip
			orientation="left"
			style={defaultTooltipStyle}
			bodyStyle={{
				backgroundColor: 'pink',
				borderColor: 'purple',
			}}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 0.25', () =>
		<HucTooltip
			shift={.25}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 0.75', () =>
		<HucTooltip
			orientation="top"
			shift={.75}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)