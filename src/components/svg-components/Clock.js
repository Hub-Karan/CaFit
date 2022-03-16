import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const Clock = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={26}
        {...props}
        viewBox="0 0 26 26"
    >
        <G
            opacity={0.5}
            fill="none"
            stroke={props.fill}
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Circle
                data-name="Ellipse 155"
                cx={12}
                cy={12}
                r={12}
                transform="translate(1 1)"
            />
            <Path data-name="Path 500" d="M13 6.455V13h6.545" />
        </G>
    </Svg>
);

export default Clock;
