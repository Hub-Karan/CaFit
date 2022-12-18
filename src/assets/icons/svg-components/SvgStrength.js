import * as React from 'react';
import Svg, { G, Path, Ellipse } from 'react-native-svg';

const SvgStrength = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={45.5}
        {...props}
        viewBox="0 0 39 45.5"
    >
        <G
            transform="translate(1.5 1.5)"
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path
                data-name="Path 473"
                d="m28.637 10-5.728 13h-9.818L7.364 10"
                strokeLinecap="square"
            />
            <Path
                data-name="Path 474"
                d="M13.091 23.144 13.909 34l-4.322.755a1.915 1.915 0 0 0-1.4 1.98V44"
            />
            <Path
                data-name="Path 475"
                d="M27.818 44v-7.265a1.915 1.915 0 0 0-1.4-1.98L22.091 34l.818-10.856"
            />
            <Ellipse
                data-name="Ellipse 143"
                cx={3.273}
                cy={4}
                rx={3.273}
                ry={4}
                transform="translate(14.727 10)"
                strokeLinecap="square"
            />
            <Path data-name="Line 240" strokeLinecap="square" d="M0 5h36" />
            <Path data-name="Line 241" strokeLinecap="square" d="M2.455 0v10" />
            <Path
                data-name="Line 242"
                strokeLinecap="square"
                d="M33.545 0v10"
            />
        </G>
    </Svg>
);

export default SvgStrength;
