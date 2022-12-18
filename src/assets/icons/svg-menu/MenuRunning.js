import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

const MenuRunning = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={40.01}
        height={39.613}
        {...props}
        viewBox="0 0 40.01 39.613"
    >
        <G
            transform="translate(-1.887 -1.5)"
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Circle
                data-name="Ellipse 130"
                cx={4.05}
                cy={4.05}
                r={4.05}
                transform="translate(28.3 3)"
            />
            <Path
                data-name="Path 451"
                d="m22.9 11.1-7.13 8.426a3.6 3.6 0 0 0 .934 5.434l6.237 3.64a.9.9 0 0 1 .27 1.307l-6.61 9.1"
            />
            <Path
                data-name="Path 452"
                d="m9.4 13.8 3.24-4.86a.9.9 0 0 1 .99-.369L22.9 11.1l7.2 5.4 4.14 7.448a.9.9 0 0 0 1.071.417L40 22.8"
            />
            <Path data-name="Line 218" d="m30.1 16.5-6.3 7.453" />
            <Path data-name="Line 219" d="M13 28.2 4 39" />
        </G>
    </Svg>
);

export default MenuRunning;
