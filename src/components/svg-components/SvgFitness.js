import * as React from "react";
import Svg, { G, Ellipse, Path } from "react-native-svg";

const SvgFitness = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34.837}
        height={39}
        {...props}
    >
        <G
            transform="translate(1.947 1.5)"
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Ellipse
                data-name="Ellipse 144"
                cx={4.298}
                cy={4.091}
                rx={4.298}
                ry={4.091}
                transform="translate(11.174)"
                strokeLinecap="square"
            />
            <Path
                data-name="Path 476"
                d="m0 16.364 10-3.965a1.816 1.816 0 0 1 .658-.126h9.626a1.816 1.816 0 0 1 .661.126l10 3.965"
                strokeLinecap="square"
            />
            <Path data-name="Line 243" d="M10.314 12.306v17.148" />
            <Path data-name="Line 244" d="M20.628 12.306V36" />
            <Path
                data-name="Path 477"
                d="M0 21.273C0 29.407 6.927 36 15.471 36"
                strokeLinecap="square"
            />
            <Path
                data-name="Path 478"
                d="M25.785 32.226a14.371 14.371 0 0 0 5.157-10.953"
                strokeLinecap="square"
            />
        </G>
    </Svg>
);

export default SvgFitness;
