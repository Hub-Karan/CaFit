import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgHamburger = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={20.143}
        {...props}
        viewBox="0 0 27 20.143"
    >
        <G
            data-name="Group 1160"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path data-name="Path 438" d="M1.5 1.5h24" />
            <Path data-name="Path 439" d="M1.5 10.071h24" />
            <Path data-name="Path 440" d="M1.5 18.643h24" />
        </G>
    </Svg>
);

export default SvgHamburger;
