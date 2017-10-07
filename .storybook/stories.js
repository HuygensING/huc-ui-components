import React from 'react';
import { storiesOf } from '@storybook/react';
import {
	HucFullTextSearchInput,
	HucHeader,
	HucOffCanvasAside,
	HucSearchResults
} from '../src';
import ResultBody from './result-body';

storiesOf('HucHeader', module)
	.add('empty', () => <HucHeader>This is added</HucHeader>)
	.add('with title', () => <HucHeader title="ePistolarium" />)
	.add('with menu', () => <HucHeader title="ePistolarium" menuItems={["Home", "About"]} />);

storiesOf('HucOffCanvasAside', module)
	.add('empty', () => <HucOffCanvasAside>This is added</HucOffCanvasAside>)

storiesOf('HucFullTextSearchInput', module)
	.add('default', () => <HucFullTextSearchInput />)

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