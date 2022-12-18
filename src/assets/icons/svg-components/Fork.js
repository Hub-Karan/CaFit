import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20.431}
        height={26}
        viewBox="0 0 20.431 26"
    >
        <G
            opacity={0.7}
            fill={props.fill}
            stroke={props.color ? props.color : '#707070'}
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path
                data-name="Path 460"
                d="m3.643 11.909-.841 10.916A2.02 2.02 0 0 0 4.816 25a2.02 2.02 0 0 0 2.014-2.175l-.837-10.916"
            />
            <Path
                data-name="Path 461"
                d="M8.636 1.545v8.182a2.182 2.182 0 0 1-2.182 2.182H3.182A2.182 2.182 0 0 1 1 9.727V1.545"
                strokeLinecap="square"
            />
            <Path
                data-name="Line 229"
                strokeLinecap="square"
                d="M4.818 1.545V8.09"
            />
            <Path data-name="Line 230" d="M1 8.091h7.636" />
            <Path
                data-name="Path 462"
                d="m16.273 16.273-.427 6.822A1.794 1.794 0 0 0 17.636 25a1.794 1.794 0 0 0 1.79-1.905L19 16.273"
            />
            <Path
                data-name="Path 463"
                d="M19 16.273h-5.455V6.455A5.454 5.454 0 0 1 19 1h0Z"
                strokeLinecap="square"
            />
        </G>
    </Svg>
);

export default SvgComponent;
