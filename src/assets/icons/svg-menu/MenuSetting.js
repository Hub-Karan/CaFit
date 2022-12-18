import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const MenuSetting = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={39}
        height={39}
        {...props}
        viewBox="0 0 39 39"
    >
        <G
            transform="translate(-.5 -.5)"
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path
                data-name="Path 441"
                d="M38 20a3.273 3.273 0 0 0-3.273-3.273h-2.065a13.007 13.007 0 0 0-1.393-3.367l1.46-1.46A3.273 3.273 0 0 0 28.1 7.272l-1.46 1.46a12.978 12.978 0 0 0-3.367-1.393V5.273a3.273 3.273 0 1 0-6.545 0v2.065a13.007 13.007 0 0 0-3.367 1.393L11.9 7.272A3.273 3.273 0 0 0 7.273 11.9l1.46 1.46a12.978 12.978 0 0 0-1.393 3.367H5.273a3.273 3.273 0 0 0 0 6.545h2.065a13.007 13.007 0 0 0 1.393 3.367L7.272 28.1a3.273 3.273 0 0 0 4.628 4.627l1.46-1.46a12.978 12.978 0 0 0 3.367 1.393v2.067a3.273 3.273 0 0 0 6.545 0v-2.065a13.007 13.007 0 0 0 3.367-1.393l1.46 1.46a3.273 3.273 0 0 0 4.628-4.629l-1.46-1.46a12.978 12.978 0 0 0 1.393-3.367h2.067A3.274 3.274 0 0 0 38 20Z"
            />
            <Circle
                data-name="Ellipse 128"
                cx={4.909}
                cy={4.909}
                r={4.909}
                transform="translate(15.091 15.091)"
            />
        </G>
    </Svg>
);

export default MenuSetting;
