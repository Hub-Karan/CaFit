import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const Tick = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 20 14.688"
    >
        <G data-name="Group 16">
            <Path
                data-name="Path 6"
                d="M19.707.293a1 1 0 0 0-1.414 0L6.312 12.274 1.707 7.669A1 1 0 0 0 .292 9.083L5.6 14.395a1 1 0 0 0 1.414 0L19.707 1.703a1 1 0 0 0 0-1.41Z"
                fill={props.fill}
            />
        </G>
    </Svg>
);

export default Tick;
