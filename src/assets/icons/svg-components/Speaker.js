import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Speaker = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={22}
        {...props}
        viewBox="0 0 18 22"
    >
        <Path
            data-name="Path 428"
            d="m17 21-8-6H1V7h8l8-6Z"
            fill="none"
            stroke="#ff9b70"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        />
    </Svg>
);

export default Speaker;
