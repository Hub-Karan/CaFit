import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const Battery = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={17.273}
        height={26}
        {...props}
        viewBox="0 0 17.273 26"
    >
        <G
            data-name="Group 1309"
            opacity={0.5}
            fill="none"
            stroke={props.fill}
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path data-name="Rectangle 385" d="M1 4.273h15.273V25H1z" />
            <Path data-name="Line 247" d="M5.364 1h6.545" />
            <Path data-name="Line 248" d="M5.364 20.636h6.545" />
            <Path data-name="Line 249" d="M5.364 16.273h6.545" />
        </G>
    </Svg>
);

export default Battery;
