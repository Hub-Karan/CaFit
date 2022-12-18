import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const MenuTips = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={39}
        {...props}
        viewBox="0 0 39 39"
    >
        <G
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path data-name="Line 223" d="M1.5 19.5h3.273" />
            <Path data-name="Line 224" d="m6.772 6.772 2.314 2.314" />
            <Path data-name="Line 225" d="M19.5 1.5v3.273" />
            <Path data-name="Line 226" d="m32.228 6.772-2.314 2.314" />
            <Path data-name="Line 227" d="M37.5 19.5h-3.273" />
            <Path
                data-name="Path 459"
                d="M29.318 19.5a9.818 9.818 0 1 0-13.091 9.247v4.662h6.545v-4.662a9.812 9.812 0 0 0 6.546-9.247Z"
            />
            <Path data-name="Line 228" d="M16.227 37.5h6.545" />
        </G>
    </Svg>
);

export default MenuTips;
