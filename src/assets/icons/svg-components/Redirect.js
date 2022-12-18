import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Redirect = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 22 18"
    >
        <Path
            data-name="Path 481"
            d="m21 9-9.333-8v5.377C6.625 6.377 1 8.333 1 17c2.625-4.251 6.667-5.333 10.667-5.333V17Z"
            fill={props.fill}
            stroke="#212b68"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        />
    </Svg>
);

export default Redirect;
