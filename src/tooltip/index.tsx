import * as React from "react";

// Map of polygons. The key is confusing, it is the orientation
// of the tooltip. When the orientation of the tooltip is `bottom`
// the tooltip is located at the top.
const tipBackgroundByOrientation = {
	bottom: <polygon points="15,12 0,30 30,30 15,12"/>,
	left: <polygon points="0,0 18,15 0,30 0,0"/>,
	right: <polygon points="30,0 30,30 12,15, 30,0"/>,
	top: <polygon points="0,0 30,0 15,18 0,0"/>
};

const tipBorderByOrientation = (strokeColor) => {
	return {
		bottom: <path d="M0,30 L15,12 L30,30" stroke={strokeColor} strokeWidth="3" />,
		left: <path d="M0,0 L18,15 L0,30" stroke={strokeColor} strokeWidth="3" />,
		right: <path d="M30,0 L12,15 L30,30" stroke={strokeColor} strokeWidth="3" />,
		top: <path d="M0,0 L15,18 L30,0" stroke={strokeColor} strokeWidth="3" />
	};
};

export interface IProps {
	bodyStyle?: React.CSSProperties
	orientation?: "top" | "right" | "bottom" | "left"
	shift?: number
	style?: React.CSSProperties
}

class Tooltip extends React.Component<IProps, null> {
	public static defaultProps: IProps = {
		bodyStyle: {},
		orientation: "bottom",
		shift: .5,
		style: {},
	};

	public render() {
		const borderColor = this.props.bodyStyle.hasOwnProperty('borderColor') ?
			this.props.bodyStyle.borderColor :
			'#aaa'

		const backgroundColor = this.props.bodyStyle.hasOwnProperty('backgroundColor') ?
			this.props.bodyStyle.backgroundColor :
			'white'

		return (
			<div
				style={{
					position: 'absolute',
					zIndex: 999,
					...this.props.style,
				}}
			>
				<div
					style={{
						backgroundColor,
						borderColor,
						fontFamily: "'Roboto', sans-serif",
						fontWeight: 300,
						borderRadius: '2px',
						borderStyle: 'solid',
						borderWidth: '1px',
						color: '#666',
						height: '100%',
						padding: '1em',
						boxShadow: '3px 3px 9px #ccc',
						...this.props.bodyStyle,
					}}
				>
					{this.props.children}
				</div>
				<svg
					fill={backgroundColor}
					height="20px"
					style={this.getSvgStyle()}
					viewBox="0 0 30 30"
					width="20px"
				>
					{tipBorderByOrientation(borderColor)[this.props.orientation]}
					{tipBackgroundByOrientation[this.props.orientation]}
				</svg>
			</div>
		);
	}

	private getSvgStyle = () => {
		let style;

		let bottomOrTop: React.CSSProperties = {
			left: `calc(${100 * this.props.shift}% - 10px)`,
		};

		let leftOrRight: React.CSSProperties = {
			top: `calc(${100 * this.props.shift}% - 10px)`,
		};

		switch (this.props.orientation) {
			case "bottom":
				bottomOrTop.top = "-19px";
				style = bottomOrTop;

				break;

			case "top":
				bottomOrTop.bottom = "-19px";
				style = bottomOrTop;

				break;

			case "left":
				leftOrRight.right = "-19px";
				style = leftOrRight;

				break;

			case "right":
				leftOrRight.left = "-19px";
				style = leftOrRight;

				break;

		}

		style.position = 'absolute'

		return style;
	}

}

export default Tooltip;
