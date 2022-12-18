import * as React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

const SvgMeter = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} {...props}>
        <G
            transform="translate(-3 -3)"
            opacity={0.8}
            fill={props.fill}
            stroke={props.color ? props.color : '#707070'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Rect
                data-name="Rectangle 353"
                width={24}
                height={24}
                rx={4}
                transform="translate(4 4)"
            />
            <Path data-name="Line 210" d="m16 15.4 1.8-4.2" />
            <Path
                data-name="Path 444"
                d="M16 7.6a7.8 7.8 0 0 0-7.8 7.8h15.6A7.8 7.8 0 0 0 16 7.6Z"
            />
        </G>
    </Svg>
);

export default SvgMeter;
