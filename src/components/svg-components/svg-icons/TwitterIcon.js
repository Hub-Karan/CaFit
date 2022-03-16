import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const TwitterIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
        <G transform="translate(-.001)">
            <Circle
                data-name="Ellipse 57"
                cx={20}
                cy={20}
                r={20}
                transform="translate(.001)"
                fill="#fff"
            />
            <G data-name="Group 523">
                <Path
                    data-name="Path 247"
                    d="M32.247 14.374a9.538 9.538 0 0 1-2.746.752 4.793 4.793 0 0 0 2.1-2.644 9.57 9.57 0 0 1-3.036 1.16 4.785 4.785 0 0 0-8.139 4.362 13.571 13.571 0 0 1-9.854-5 4.786 4.786 0 0 0 1.475 6.385 4.747 4.747 0 0 1-2.165-.6v.061a4.783 4.783 0 0 0 3.835 4.687 4.8 4.8 0 0 1-2.159.083 4.786 4.786 0 0 0 4.466 3.32 9.651 9.651 0 0 1-7.077 1.98 13.6 13.6 0 0 0 20.932-11.454c0-.207 0-.414-.014-.618a9.694 9.694 0 0 0 2.382-2.474Z"
                    fill="#55acee"
                />
            </G>
        </G>
    </Svg>
);

export default TwitterIcon;
