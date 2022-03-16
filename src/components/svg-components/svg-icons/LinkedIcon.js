import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const LinkedIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
        <G data-name="Group 1125">
            <G data-name="Group 553">
                <Circle
                    data-name="Ellipse 56"
                    cx={20}
                    cy={20}
                    r={20}
                    fill="#fff"
                />
            </G>
            <G data-name="Group 521">
                <Path
                    data-name="Path 241"
                    d="M31.951 21.609v8.246H27.17v-7.694c0-1.932-.69-3.251-2.421-3.251a2.615 2.615 0 0 0-2.452 1.748 3.272 3.272 0 0 0-.158 1.165v8.03h-4.781s.064-13.029 0-14.378h4.781v2.038c-.01.016-.023.032-.032.047h.032v-.047a4.747 4.747 0 0 1 4.309-2.375c3.145 0 5.5 2.055 5.5 6.47ZM12.356 8.545a2.491 2.491 0 1 0-.063 4.969h.031a2.492 2.492 0 1 0 .032-4.969ZM9.935 29.854h4.779V15.476H9.935Z"
                    fill="#68ccff"
                />
            </G>
        </G>
    </Svg>
);

export default LinkedIcon;
