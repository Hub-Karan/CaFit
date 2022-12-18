import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const Meter = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={20}
        {...props}
        viewBox="0 0 24 20"
    >
        <G
            transform="translate(0 -2)"
            opacity={0.5}
            fill="none"
            stroke={props.fill}
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path data-name="Line 250" d="M12 3v3" />
            <Path data-name="Line 251" d="m19.778 6.222-2.121 2.121" />
            <Path data-name="Line 252" d="M23 14h-3" />
            <Path data-name="Line 253" d="m7 9 3.586 3.586" />
            <Path data-name="Line 254" d="M1 14h3" />
            <Circle
                data-name="Ellipse 152"
                cx={2}
                cy={2}
                r={2}
                transform="translate(10 12)"
            />
            <Path
                data-name="Path 496"
                d="M20.485 21a11 11 0 1 0-16.97 0Z"
                strokeLinecap="square"
            />
        </G>
    </Svg>
);

export default Meter;
