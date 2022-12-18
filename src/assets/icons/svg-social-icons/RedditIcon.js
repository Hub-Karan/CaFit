import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RedditIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
        <Path
            data-name="Path 244"
            d="M20 0a20 20 0 1 0 20 20A20 20 0 0 0 20 0Zm12.626 22.52a5.7 5.7 0 0 1 .088.959c0 4.681-5.73 8.489-12.773 8.489S7.169 28.16 7.169 23.479a5.685 5.685 0 0 1 .1-1.017 3.157 3.157 0 1 1 3.736-5.038A16.463 16.463 0 0 1 19.709 15l1.97-6.232a.444.444 0 0 1 .525-.3l5.158 1.214a2.577 2.577 0 1 1-.182.939c0-.024.006-.045.007-.07L22.4 9.425l-1.768 5.589a16.267 16.267 0 0 1 8.318 2.455 3.131 3.131 0 0 1 2.182-.9 3.161 3.161 0 0 1 1.492 5.951Z"
            fill="#fff"
        />
    </Svg>
);

export default RedditIcon;
