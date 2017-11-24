import { configure } from '@storybook/react';

function loadStories() {
	require('./tooltip.js')
	require('./stories.js')
}

configure(loadStories, module);
