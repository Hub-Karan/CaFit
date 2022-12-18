import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const SvgMapLine = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={307.5}
        height={29.834}
        {...props}
        viewBox="0 0 307.5 29.834"
    >
        <G data-name="Group 1072">
            <G data-name="Group 1013">
                <Path
                    data-name="Path 410"
                    d="M225.795 0A9.806 9.806 0 0 0 216 9.795c0 6.7 8.765 16.542 9.138 16.958a.882.882 0 0 0 1.312 0c.373-.416 9.138-10.255 9.138-16.958A9.806 9.806 0 0 0 225.795 0Zm0 14.722a4.928 4.928 0 1 1 4.932-4.927 4.933 4.933 0 0 1-4.932 4.927Z"
                    fill="#ff9b70"
                />
            </G>
            <G data-name="Group 1071">
                <Path
                    data-name="Line 175"
                    fill="none"
                    stroke="#e6e6e6"
                    strokeLinecap="round"
                    d="M1.469 27.545H307"
                />
                <G data-name="Group 1069" transform="translate(0 25.045)">
                    <Circle
                        data-name="Ellipse 126"
                        cx={2.395}
                        cy={2.395}
                        r={2.395}
                        fill="#e6e6e6"
                    />
                </G>
            </G>
        </G>
    </Svg>
);

export default SvgMapLine;
