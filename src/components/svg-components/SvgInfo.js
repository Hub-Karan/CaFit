import * as React from "react";
import Svg, { G, Ellipse, Path } from "react-native-svg";

const SvgInfo = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25.111}
        height={24}
        {...props}
        viewBox="0 0 25.111 24"
    >
        <G transform="translate(1 1)" opacity={0.7}>
            <Ellipse
                data-name="Ellipse 132"
                cx={11.556}
                cy={11}
                rx={11.556}
                ry={11}
                fill="none"
                stroke="#707070"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2}
            />
            <Path
                data-name="Line 220"
                fill="none"
                stroke="#707070"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2}
                d="M11.512 10v6"
            />
            <Ellipse
                data-name="Ellipse 133"
                cx={1.051}
                cy={1}
                rx={1.051}
                ry={1}
                transform="translate(10.462 5)"
                fill="#707070"
            />
        </G>
    </Svg>
);

export default SvgInfo;
