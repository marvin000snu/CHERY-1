import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function FilledCircle(props) {
    const {size, color} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <Circle data-name="Ellipse 1945" cx={size/2} cy={size/2} r={size/2} fill={color} />
    </Svg>
  )
}

export default FilledCircle
