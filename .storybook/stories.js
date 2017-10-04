import React from 'react';
import { storiesOf } from '@storybook/react';
import { HucHeader, HucOffCanvasAside } from '../src';

storiesOf('HucHeader', module)
	.add('empty', () => <HucHeader>This is added</HucHeader>)
	.add('with title', () => <HucHeader title="ePistolarium" />)
	.add('with menu', () => <HucHeader title="ePistolarium" menuItems={["Home", "About"]} />);

storiesOf('HucOffCanvasAside', module)
	.add('empty', () => <HucOffCanvasAside>This is added</HucOffCanvasAside>)