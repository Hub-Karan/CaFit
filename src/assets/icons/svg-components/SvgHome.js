import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgHome = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26.267}
        height={26}
        viewBox="0 0 26.267 26"
    >
        <G
            data-name="home (2)"
            opacity={0.8}
            fill={props.fill}
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path
                data-name="Path 442"
                d="M21.505 13.279V25h-6.144v-5.581h-4.46V25h-6.14V13.279"
            />
            <Path data-name="Path 443" d="M1.412 11.6 13.133 1l11.721 10.6" />
        </G>
    </Svg>
);

export default SvgHome;
