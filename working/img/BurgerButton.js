import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function BurgerButton(props) {
    const {size, color} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 21 20"
      {...props}
    >
      <G data-name="Group 11651" fill={color}>
        <Path data-name="Rectangle 8409" d="M0 0h21v4H0z" />
        <Path data-name="Rectangle 8410" d="M0 8h21v4H0z" />
        <Path data-name="Rectangle 8411" d="M0 16h21v4H0z" />
      </G>
    </Svg>
  )
}

export default BurgerButton
