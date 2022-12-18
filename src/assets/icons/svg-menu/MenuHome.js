import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const MenuHome = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39.4}
        height={39}
        {...props}
        viewBox="0 0 39.4 39"
    >
        <G
            data-name="home (2)"
            opacity={0.8}
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path
                data-name="Path 442"
                d="M32.258 19.919V37.5h-9.209v-8.372h-6.7V37.5H7.142V19.919"
            />
            <Path
                data-name="Path 443"
                d="M2.119 17.407 19.7 1.5l17.582 15.907"
            />
        </G>
    </Svg>
);

export default MenuHome;
