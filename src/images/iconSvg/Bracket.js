import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Bracket(props) {
  const color  = props.color? props.color : "#000";
  const stroke  = props.stroke? props.stroke : 1.5;

  return (
    <Svg
      data-name="Chevron Selected"
      width={22.899}
      height={28}
      viewBox="0 0 22.899 28"
      {...props}
    >
      <Path fill="none" d="M0 0H16V28H0z" />
      <Path
        data-name="\uD328\uC2A4 5431"
        d="M13 23.9L3.1 14 13 4.102"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
      />  
    </Svg>
  )
}

export default Bracket