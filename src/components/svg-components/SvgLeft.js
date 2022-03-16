import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgLeft = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27.742}
        height={18.122}
        {...props}
        viewBox="0 0 27.742 18.122"
    >
        <G
            fill="none"
            stroke={props.fill}
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path data-name="Line 245" d="M26.242 9.061h-24" />
            <Path
                data-name="Path 485"
                d="M9.956 16.004 2.242 9.061l7.714-6.943"
            />
        </G>
    </Svg>
);

export default SvgLeft;
