import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SpeakerFull = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24.025}
        height={22}
        {...props}
        viewBox="0 0 24.025 22"
    >
        <G
            fill="none"
            stroke="#ff9b70"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path data-name="Path 425" d="m14 21-8-6H1V7h5l8-6Z" />
            <Path data-name="Path 426" d="M17.5 14.5a4.951 4.951 0 0 0 0-7.1" />
            <Path
                data-name="Path 427"
                d="M20.4 17.4a8.993 8.993 0 0 0 0-12.7"
            />
        </G>
    </Svg>
);

export default SpeakerFull;
