import * as React from "react";
import Svg, { G, Ellipse, Path } from "react-native-svg";

const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={34.933}
        {...props}
        viewBox="0 0 39 34.933"
    >
        <G
            data-name="yoga (2)"
            transform="translate(1.5 1.5)"
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Ellipse
                data-name="Ellipse 140"
                cx={4.091}
                cy={3.894}
                rx={4.091}
                ry={3.894}
                transform="translate(13.909)"
                strokeLinecap="square"
            />
            <Path
                data-name="Line 235"
                strokeLinecap="square"
                d="M6.545 26.481h22.909"
            />
            <Path
                data-name="Line 236"
                strokeLinecap="square"
                d="M0 31.933h36"
            />
            <Path
                data-name="Path 466"
                d="m32.728 13.241-3.562 2.712a.85.85 0 0 1-1.044-.017l-5.213-4.253h-9.818l-5.213 4.253a.85.85 0 0 1-1.044.017l-3.561-2.712"
                strokeLinecap="square"
            />
            <Path data-name="Line 237" d="M13.091 11.794v10.792" />
            <Path data-name="Line 238" d="M22.909 11.794v10.792" />
        </G>
    </Svg>
);

export default SvgComponent;
