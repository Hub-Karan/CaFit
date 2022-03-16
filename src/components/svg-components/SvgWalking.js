import * as React from "react";
import Svg, { G, Path, Ellipse } from "react-native-svg";

const SvgWalking = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={23.126}
        height={37.86}
        {...props}
    >
        <G
            transform="translate(1.964 1.5)"
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path
                data-name="Path 470"
                d="m10.142 12.355 6.188 4.827 4.3-1.636"
            />
            <Path
                data-name="Path 471"
                d="m5.157 13.091-3.438 1.636L0 18.818"
                strokeLinecap="square"
            />
            <Path
                data-name="Path 472"
                d="M12.033 23.727 15.471 27v7.364"
                strokeLinecap="square"
            />
            <Ellipse
                data-name="Ellipse 142"
                cx={4.298}
                cy={4.091}
                rx={4.298}
                ry={4.091}
                transform="translate(7.736)"
                strokeLinecap="square"
            />
            <Path data-name="Line 239" d="m4.298 36 6.895-27.897" />
        </G>
    </Svg>
);

export default SvgWalking;
