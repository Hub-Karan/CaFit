import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const ProgressLine = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={312}
        height={14.346}
        {...props}
        viewBox="0 0 312 14.346"
    >
        <G data-name="Group 1520" transform="translate(-24.5 -593)">
            <G
                data-name="Group 1050"
                fill="none"
                strokeLinecap="round"
                strokeWidth={5}
            >
                <Path
                    data-name="Line 172"
                    stroke="#e6e6e6"
                    opacity={0.5}
                    d="M27.997 600.5H334"
                />
                <Path
                    data-name="Path 511"
                    d="M27 600.5h188.386"
                    stroke="#ff9b70"
                />
            </G>
            <Circle
                data-name="Ellipse 162"
                cx={7.173}
                cy={7.173}
                r={7.173}
                transform="translate(211.583 593)"
                fill="#ff9b70"
            />
        </G>
    </Svg>
);

export default ProgressLine;
