import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const Heart = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={24.185}
        {...props}
        viewBox="0 0 26 24.185"
    >
        <G
            data-name="heartbeat (1)"
            opacity={0.5}
            fill="none"
            stroke={props.fill}
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path
                data-name="Path 493"
                d="M1 10.818h7.636l2.182-3.273 4.364 6.545 2.182-3.273H25"
            />
            <Path
                data-name="Path 494"
                d="M5.364 14.309A64.289 64.289 0 0 0 13 22.818a64.29 64.29 0 0 0 7.637-8.509"
            />
            <Path
                data-name="Path 495"
                d="M23.909 6.923A5.954 5.954 0 0 0 17.958 1 6.023 6.023 0 0 0 13 3.665 6.023 6.023 0 0 0 8.042 1a5.954 5.954 0 0 0-5.951 5.923"
            />
        </G>
    </Svg>
);

export default Heart;
