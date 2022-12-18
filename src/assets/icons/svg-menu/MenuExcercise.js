import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

const MenuExcercise = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={37.319}
        height={40.004}
        {...props}
        viewBox="0 0 37.319 40.004"
    >
        <G
            transform="translate(-6.181 -4.913)"
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
        >
            <Circle
                data-name="Ellipse 131"
                cx={4}
                cy={4}
                r={4}
                transform="translate(34 13)"
                strokeMiterlimit={10}
            />
            <Path
                data-name="Path 453"
                d="m27 16-12.354 6.177a4 4 0 0 0-2.092 2.608L8 43"
                strokeMiterlimit={10}
            />
            <Path
                data-name="Path 454"
                d="m31 24-10 5 5 14"
                strokeMiterlimit={10}
            />
            <Path data-name="Path 455" d="M37 36 27 16 14 7" />
        </G>
    </Svg>
);

export default MenuExcercise;
