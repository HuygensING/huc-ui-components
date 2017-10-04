import React from 'react';
import { storiesOf } from '@storybook/react';
import { FullTextSearchInput, HucHeader, HucOffCanvasAside } from '../src';

storiesOf('HucHeader', module)
	.add('empty', () => <HucHeader>This is added</HucHeader>)
	.add('with title', () => <HucHeader title="ePistolarium" />)
	.add('with menu', () => <HucHeader title="ePistolarium" menuItems={["Home", "About"]} />);

storiesOf('HucOffCanvasAside', module)
	.add('empty', () => <HucOffCanvasAside>This is added</HucOffCanvasAside>)

storiesOf('FullTextSearchInput', module)
	.add('default', () => <FullTextSearchInput />)