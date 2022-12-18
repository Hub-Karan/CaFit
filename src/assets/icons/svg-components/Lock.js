import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const Lock = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={17.273}
        height={26}
        {...props}
        viewBox="0 0 17.273 26"
    >
        <G
            transform="translate(-4)"
            fill="none"
            stroke="#707070"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path
                data-name="Path 501"
                d="M7.182 12.018V6.455A5.4 5.4 0 0 1 12.637 1a5.4 5.4 0 0 1 5.455 5.455v5.564"
            />
            <Circle
                data-name="Ellipse 156"
                cx={7.636}
                cy={7.636}
                r={7.636}
                transform="translate(5 9.727)"
                strokeLinecap="square"
            />
            <Circle
                data-name="Ellipse 157"
                cx={2.182}
                cy={2.182}
                r={2.182}
                transform="translate(10.455 14.091)"
                strokeLinecap="square"
            />
            <Path
                data-name="Line 255"
                strokeLinecap="square"
                d="M12.636 18.455v2.182"
            />
        </G>
    </Svg>
);

export default Lock;
