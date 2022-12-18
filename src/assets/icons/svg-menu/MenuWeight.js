import * as React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

const MenuWeight = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={39}
        {...props}
        viewBox="0 0 39 39"
    >
        <G
            transform="translate(-2.5 -2.5)"
            opacity={0.8}
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Rect
                data-name="Rectangle 353"
                width={36}
                height={36}
                rx={4}
                transform="translate(4 4)"
            />
            <Path data-name="Line 210" d="m22 21.1 2.7-6.3" />
            <Path
                data-name="Path 444"
                d="M22 9.4a11.7 11.7 0 0 0-11.7 11.7h23.4A11.7 11.7 0 0 0 22 9.4Z"
            />
        </G>
    </Svg>
);

export default MenuWeight;
