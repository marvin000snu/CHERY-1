import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function ModalClose(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 19.243 19.242" {...props}>
      <G data-name="\uADF8\uB8F9 11732">
        <G
          data-name="\uADF8\uB8F9 11731"
          fill="none"
          stroke="#1b2c49"
          strokeLinecap="round"
          strokeWidth={3}
          transform="translate(2.121 2.121)"
        >
          <Path
            data-name="\uC120 279"
            transform="rotate(-45)"
            d="M0 0L0 21.213"
          />
          <Path
            data-name="\uC120 280"
            transform="rotate(45 7.5 18.107)"
            d="M0 0L0 21.213"
          />
        </G>
      </G>
    </Svg>
  )
}

export default ModalClose
