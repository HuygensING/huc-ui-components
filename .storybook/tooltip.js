import React from 'react';
import { storiesOf } from '@storybook/react';
import { HucTooltip } from '../src';

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
	.add('shift: 0, orientation: bottom', () =>
		<HucTooltip
			shift={0}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 0.25, orientation: bottom', () =>
		<HucTooltip
			shift={.25}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 0.75, orientation: top', () =>
		<HucTooltip
			orientation="top"
			shift={.75}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 1, orientation: top', () =>
		<HucTooltip
			orientation="top"
			shift={1}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 0, orientation: right', () =>
		<HucTooltip
			orientation="right"
			shift={0}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 0.25, orientation: right', () =>
		<HucTooltip
			orientation="right"
			shift={.25}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 0.75, orientation: left', () =>
		<HucTooltip
			orientation="left"
			shift={.75}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)
	.add('shift: 1, orientation: left', () =>
		<HucTooltip
			orientation="left"
			shift={1}
			style={defaultTooltipStyle}
		>
			Exercitation enim cupidatat consectetur sint dolor.
			Exercitation deserunt eiusmod reprehenderit enim cupidatat.
		</HucTooltip>
	)