import * as React from "react";
import Svg, { G, Circle } from "react-native-svg";

const SvgMore = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26.828}
        height={26.828}
        {...props}
    >
        <G data-name="Group 1658">
            <G data-name="Group 1655" transform="rotate(180 12.707 7.253)">
                <Circle
                    data-name="Ellipse 210"
                    cx={1.091}
                    cy={1.091}
                    r={1.091}
                    fill="#a4a2aa"
                />
                <Circle
                    data-name="Ellipse 211"
                    cx={1.091}
                    cy={1.091}
                    r={1.091}
                    fill="none"
                    stroke={props.color ? props.color : "#707070"}
                    strokeLinecap="square"
                    strokeWidth={2}
                />
            </G>
            <G data-name="Group 1656" transform="rotate(180 1.798 7.253)">
                <Circle
                    data-name="Ellipse 212"
                    cx={1.091}
                    cy={1.091}
                    r={1.091}
                    fill="#a4a2aa"
                />
                <Circle
                    data-name="Ellipse 213"
                    cx={1.091}
                    cy={1.091}
                    r={1.091}
                    fill="none"
                    stroke={props.color ? props.color : "#707070"}
                    strokeLinecap="square"
                    strokeWidth={2}
                />
            </G>
            <G data-name="Group 1657" transform="rotate(180 7.252 7.253)">
                <Circle
                    data-name="Ellipse 214"
                    cx={1.091}
                    cy={1.091}
                    r={1.091}
                    fill="#a4a2aa"
                />
                <Circle
                    data-name="Ellipse 215"
                    cx={1.091}
                    cy={1.091}
                    r={1.091}
                    fill="none"
                    stroke={props.color ? props.color : "#707070"}
                    strokeLinecap="square"
                    strokeWidth={2}
                />
            </G>
        </G>
    </Svg>
);

export default SvgMore;
