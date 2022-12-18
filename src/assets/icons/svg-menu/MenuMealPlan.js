import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const MenuMealPlan = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30.646}
        height={39}
        {...props}
        viewBox="0 0 30.646 39"
    >
        <G
            opacity={0.7}
            fill="none"
            stroke="#707070"
            strokeMiterlimit={10}
            strokeWidth={3}
        >
            <Path
                data-name="Path 460"
                d="M5.465 17.864 4.201 34.237A3.03 3.03 0 0 0 7.223 37.5a3.03 3.03 0 0 0 3.022-3.263L8.99 17.864"
            />
            <Path
                data-name="Path 461"
                d="M12.955 2.318v12.273a3.273 3.273 0 0 1-3.273 3.273H4.773A3.273 3.273 0 0 1 1.5 14.591V2.318"
                strokeLinecap="square"
            />
            <Path
                data-name="Line 229"
                strokeLinecap="square"
                d="M7.227 2.318v9.818"
            />
            <Path data-name="Line 230" d="M1.5 12.136h11.455" />
            <Path
                data-name="Path 462"
                d="m24.409 24.409-.64 10.233a2.69 2.69 0 0 0 2.683 2.858 2.69 2.69 0 0 0 2.685-2.858L28.5 24.409"
            />
            <Path
                data-name="Path 463"
                d="M28.5 24.409h-8.182V9.682A8.182 8.182 0 0 1 28.5 1.5h0Z"
                strokeLinecap="square"
            />
        </G>
    </Svg>
);

export default MenuMealPlan;
