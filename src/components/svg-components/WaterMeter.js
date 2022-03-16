import * as React from "react"
import Svg, { Defs, ClipPath, Circle, G, Path } from "react-native-svg"

const WaterMeter = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={248.133}
    height={248.133}
    viewBox="0 0 248.133 248.133"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Circle
          data-name="Ellipse 204"
          cx={124.066}
          cy={124.066}
          r={124.066}
          fill="none"
          stroke="#707070"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 1769">
      <G data-name="Group 1580" opacity={0.752}>
        <Path
          data-name="Path 789"
          d="M124.066 0A124.066 124.066 0 1 1 0 124.066 124.066 124.066 0 0 1 124.066 0Z"
          fill="#fff"
          opacity={0.51}
        />
        <G data-name="Mask Group 102" clipPath="url(#a)" fill="#ff9b70">
          <Path
            data-name="Path 783"
            d="M-24.036 101.181s73.521 94.021 146.335 52.313 63.624 4.241 113.816 11.311 75.641-4.948 75.641-4.948-24.742 119.471-26.156 122.3-167.542 66.451-167.542 66.451l-231.166-35.346Z"
            opacity={0.137}
          />
          <Path
            data-name="Path 784"
            d="M-16.26 169.046s66.451-55.141 117.35-38.881 42.416 42.416 86.246 44.537 93.315-50.9 99.677-44.537-6.362 197.234-6.362 201.475-296.911 10.6-296.911 10.6Z"
            opacity={0.354}
          />
          <Path
            data-name="Path 785"
            d="M-67.158 138.648s84.125-40.3 114.523-24.035 27.571 79.176 61.5 81.3 59.382-62.21 110.281-11.311 54.434 69.279 54.434 69.279l-149.871 55.844-168.956-64.331Z"
            opacity={0.402}
          />
        </G>
      </G>
    </G>
  </Svg>
)

export default WaterMeter
