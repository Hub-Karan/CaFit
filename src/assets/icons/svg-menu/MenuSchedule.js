import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const MenuSchedule = (props) => (
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
            <Path
                data-name="Path 448"
                d="M22.773 19.5H9.682v13.091h13.091v-6.546h6.545V19.5Z"
            />
            <Path data-name="Line 215" d="M16.227 19.5v13.091" />
            <Path data-name="Path 449" d="M22.773 19.5v6.545H9.682" />
            <Path
                data-name="Path 450"
                d="M30.955 4.773H37.5V37.5h-36V4.773h6.545"
            />
            <Path data-name="Line 216" d="M12.955 4.773h13.091" />
            <Path data-name="Line 217" d="M1.5 14.591h36" />
            <Path data-name="Rectangle 357" d="M8.045 1.5h4.909v8.182H8.045z" />
            <Path
                data-name="Rectangle 358"
                d="M26.045 1.5h4.909v8.182h-4.909z"
            />
        </G>
    </Svg>
);

export default MenuSchedule;
