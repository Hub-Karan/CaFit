import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const Gear = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 26 26"
    >
        <G
            transform="translate(-1 -1)"
            fill={props.fill}
            stroke="#707070"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
        >
            <Path
                data-name="Path 441"
                d="M26 14a2.182 2.182 0 0 0-2.182-2.182h-1.377a8.671 8.671 0 0 0-.929-2.245l.973-.973A2.182 2.182 0 1 0 19.4 5.515l-.973.973a8.652 8.652 0 0 0-2.245-.929V4.182a2.182 2.182 0 1 0-4.364 0v1.377a8.671 8.671 0 0 0-2.245.929L8.6 5.514A2.182 2.182 0 0 0 5.515 8.6l.973.973a8.652 8.652 0 0 0-.929 2.245H4.182a2.182 2.182 0 1 0 0 4.364h1.377a8.671 8.671 0 0 0 .929 2.245l-.973.973A2.182 2.182 0 1 0 8.6 22.485l.973-.973a8.652 8.652 0 0 0 2.245.929v1.378a2.182 2.182 0 1 0 4.364 0v-1.378a8.671 8.671 0 0 0 2.245-.929l.973.973a2.182 2.182 0 1 0 3.085-3.085l-.973-.973a8.652 8.652 0 0 0 .929-2.245h1.378A2.183 2.183 0 0 0 26 14Z"
            />
            <Circle
                data-name="Ellipse 128"
                cx={3.273}
                cy={3.273}
                r={3.273}
                transform="translate(10.727 10.727)"
            />
        </G>
    </Svg>
);

export default Gear;
