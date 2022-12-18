import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

const Running = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 26.673 26.408"
    >
        <G
            transform="translate(-2.592 -2)"
            opacity={0.7}
            fill={props.fill}
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Circle
                data-name="Ellipse 130"
                cx={2.7}
                cy={2.7}
                r={2.7}
                transform="translate(20.2 3)"
            />
            <Path
                data-name="Path 451"
                d="m16.6 8.4-4.753 5.617a2.4 2.4 0 0 0 .623 3.623l4.157 2.425a.6.6 0 0 1 .18.871L12.4 27"
            />
            <Path
                data-name="Path 452"
                d="m7.6 10.2 2.16-3.24a.6.6 0 0 1 .66-.246L16.6 8.4l4.8 3.6 2.76 4.965a.6.6 0 0 0 .714.278L28 16.2"
            />
            <Path data-name="Line 218" d="m21.4 12-4.2 4.969" />
            <Path data-name="Line 219" d="M10 19.8 4 27" />
        </G>
    </Svg>
);

export default Running;
