import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RightArrows = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 9.911 18">
        <Path
            d="M9.648 8.358 1.553.266A.909.909 0 0 0 .266 1.55L7.719 9 .267 16.45a.91.91 0 0 0 1.287 1.285l8.095-8.092a.917.917 0 0 0-.001-1.285Z"
            fill={props.fill}
        />
    </Svg>
)

export default RightArrows
