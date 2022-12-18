import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

const TumblrIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
        <G transform="translate(-.001)">
            <Circle
                data-name="Ellipse 127"
                cx={20}
                cy={20}
                r={20}
                transform="translate(.001)"
                fill="#fff"
            />
            <G data-name="Group 1131">
                <Path
                    data-name="Path 423"
                    d="M20.743 13.559V8.188h-3.466a1.867 1.867 0 0 0-.117.674 1.019 1.019 0 0 0-.079.317 5.194 5.194 0 0 1-3.144 4.143 2.922 2.922 0 0 1-1.512.24v4.33h2.552c.041 6.094.041 9.235.041 9.395v.361a5.153 5.153 0 0 0 4.177 4.851 11.845 11.845 0 0 0 3.142.4 14.788 14.788 0 0 0 4.1-.716v-5.1c-.791.239-1.512.44-2.148.637a3 3 0 0 1-3.106-.674 1.643 1.643 0 0 1-.238-.441 10.954 10.954 0 0 1-.192-1.947V17.89h5.525v-4.33Z"
                    fill="#64b5ff"
                />
            </G>
        </G>
    </Svg>
);

export default TumblrIcon;
