import * as React from 'react';
import Svg, { G, Ellipse, Path } from 'react-native-svg';

const SvgWorkout = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={38.668}
        height={38.605}
        {...props}
        viewBox="0 0 38.668 38.605"
    >
        <G
            data-name="stretching (1)"
            transform="translate(1.451 2.078)"
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeWidth={3}
        >
            <Ellipse
                data-name="Ellipse 141"
                cx={4.202}
                cy={4}
                rx={4.202}
                ry={4}
                transform="translate(27.313 6)"
                strokeMiterlimit={10}
            />
            <Path
                data-name="Path 467"
                d="M19.96 9 6.982 15.177a4.045 4.045 0 0 0-2.2 2.608L0 36"
                strokeMiterlimit={10}
            />
            <Path
                data-name="Path 468"
                d="m24.162 17-10.505 5 5.253 14"
                strokeMiterlimit={10}
            />
            <Path
                data-name="Path 469"
                d="M30.465 29 19.96 9 6.303 0"
                strokeLinecap="square"
            />
        </G>
    </Svg>
);

export default SvgWorkout;
