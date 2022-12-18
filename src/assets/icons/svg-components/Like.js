import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const Like = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox={'0 0 18.012 18'}
    >
        <G
            data-name="like (2)"
            fill={props.fill}
            stroke="#212b68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path data-name="Path 479" d="M4.2 17H1V9.533h3.2" />
            <Path
                data-name="Path 480"
                d="M4.2 9.533 7.4 1h1.067a1.067 1.067 0 0 1 1.066 1.067V7.4h5.332a2.133 2.133 0 0 1 2.055 2.7l-1.482 5.333A2.133 2.133 0 0 1 13.384 17H4.2Z"
            />
        </G>
    </Svg>
);

export default Like;
