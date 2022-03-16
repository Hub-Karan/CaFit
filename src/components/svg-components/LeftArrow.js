import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LeftArrow = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 9.911 18">
        <Path
            d="m.263 9.642 8.095 8.092a.909.909 0 0 0 1.287-1.284L2.192 9l7.452-7.45A.91.91 0 0 0 8.357.265L.262 8.357a.917.917 0 0 0 .001 1.285Z"
            fill={props.fill}
        />
    </Svg>
)

export default LeftArrow
