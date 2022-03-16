import * as React from "react"
import Svg, { G, Circle } from "react-native-svg"

const WaterMeter = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={285.334}
    height={285.334}
    viewBox="0 0 285.334 285.334"
  >
    <G data-name="Ellipse 206" fill="" stroke="#f68d5f" strokeWidth={10}>
      <Circle cx={142.667} cy={142.667} r={142.667} stroke="none" />
      <Circle cx={142.667} cy={142.667} r={137.667} />
    </G>
  </Svg>
)

export default WaterMeter