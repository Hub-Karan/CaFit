import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

const Map = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={24.8}
        {...props}
        viewBox="0 0 26 24.8"
    >
        <G data-name="distance (2)" opacity={0.5}>
            <Path
                data-name="Path 497"
                d="M11.909 21.727a6.545 6.545 0 0 1-6.545-6.545"
                fill="none"
                stroke={props.fill}
                strokeLinecap="square"
                strokeMiterlimit={10}
                strokeWidth={2}
            />
            <Path
                data-name="Path 498"
                d="M9.727 5.364c0 2.41-4.364 6.545-4.364 6.545S1 7.773 1 5.364a4.364 4.364 0 0 1 8.727 0Z"
                fill="none"
                stroke={props.fill}
                strokeLinecap="square"
                strokeMiterlimit={10}
                strokeWidth={2}
            />
            <Path
                data-name="Path 499"
                d="M25 13c0 3.615-6.545 10.364-6.545 10.364S11.909 16.616 11.909 13A6.545 6.545 0 0 1 25 13Z"
                fill="none"
                stroke={props.fill}
                strokeLinecap="square"
                strokeMiterlimit={10}
                strokeWidth={2}
            />
            <Circle
                data-name="Ellipse 153"
                cx={1.091}
                cy={1.091}
                r={1.091}
                transform="translate(4.273 4.273)"
                fill="#a4a2aa"
            />
            <Circle
                data-name="Ellipse 154"
                cx={2.182}
                cy={2.182}
                r={2.182}
                transform="translate(16.273 10.818)"
                fill="none"
                stroke={props.fill}
                strokeLinecap="square"
                strokeMiterlimit={10}
                strokeWidth={2}
            />
        </G>
    </Svg>
);

export default Map;
