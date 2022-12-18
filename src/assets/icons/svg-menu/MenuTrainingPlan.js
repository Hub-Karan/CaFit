import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const MenuTrainingPlan = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32.455}
        height={39}
        {...props}
        viewBox="0 0 32.455 39"
    >
        <G
            data-name="list (2)"
            transform="translate(-4.5 -.5)"
            opacity={0.8}
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path data-name="Path 445" d="M6 2h29.455v36H6Z" />
            <Path data-name="Line 211" d="M29.727 10.182h-8.182" />
            <Path data-name="Line 212" d="M29.727 20h-8.182" />
            <Path data-name="Line 213" d="M29.727 29.818h-8.182" />
            <Path
                data-name="Path 446"
                d="m11.727 10.182 1.636 1.636 4.091-4.091"
            />
            <Path data-name="Path 447" d="m11.727 20 1.636 1.636 4.091-4.091" />
            <Circle
                data-name="Ellipse 129"
                cx={2.455}
                cy={2.455}
                r={2.455}
                transform="translate(11.727 27.364)"
            />
        </G>
    </Svg>
);

export default MenuTrainingPlan;
