import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgSingleCup = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        {...props}
        viewBox="0 0 23.318 36"
    >
        <G data-name="Path 791" fill="rgba(255,255,255,0.22)">
            <Path d="M17.182 35H6.136a1.047 1.047 0 0 1-1.045-1.045v-.064l-.008-.064L1 1.992A1.047 1.047 0 0 1 2.045 1h19.228c.558 0 1.016.44 1.044.992l-4.082 31.835-.008.064v.064c0 .576-.469 1.045-1.045 1.045Z" />
            <Path
                d="M2.045 2a.045.045 0 0 0-.033.014l4.079 31.813v.128c0 .025.02.045.045.045h11.046c.025 0 .045-.02.045-.045v-.128l4.079-31.813A.045.045 0 0 0 21.273 2H2.045m0-2h19.228c1.13 0 2.045.916 2.045 2.045l-4.09 31.91c0 1.13-.917 2.045-2.046 2.045H6.136a2.045 2.045 0 0 1-2.045-2.045L0 2.045C0 .915.916 0 2.045 0Z"
                fill="#fff"
            />
        </G>
    </Svg>
);

export default SvgSingleCup;
