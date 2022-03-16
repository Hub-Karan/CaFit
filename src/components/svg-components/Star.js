import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Star = (props) => (
    <Svg
        data-name="shape-star (1)"
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 16.761 16"
    >
        <Path
            data-name="Path 482"
            d="m15.863 5.296-4.521-.657L9.323.543a1.09 1.09 0 0 0-1.885 0l-2.018 4.1-4.518.653a1.047 1.047 0 0 0-.586 1.787l3.271 3.189-.772 4.5a1.047 1.047 0 0 0 1.52 1.1l4.046-2.127 4.044 2.125a1.047 1.047 0 0 0 1.52-1.1l-.772-4.5 3.273-3.187a1.047 1.047 0 0 0-.58-1.786Z"
            fill={props.fill}
        />
    </Svg>
)

export default Star