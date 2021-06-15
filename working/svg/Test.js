import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Test(props) {
  return (
    <Svg width={props.height*0.8} height={props.height} viewBox="0 0 13.016 16.735" {...props}>
      <G data-name="\uADF8\uB8F9 11705" fill="#fff">
        <Path
          data-name="\uD328\uC2A4 16514"
          d="M2194.849 1482.023l-1.041-1.041v11.408a.839.839 0 01-.837.837h-8.926a.839.839 0 01-.837-.837v-12.644a.833.833 0 01.837-.837h7.68l-1.041-1.041a.572.572 0 00-.4-.167h-6.239a2.045 2.045 0 00-2.045 2.046v12.644a2.051 2.051 0 002.045 2.045h8.926a2.051 2.051 0 002.045-2.045v-9.957a.555.555 0 00-.167-.411z"
          transform="translate(-2182 -1477.7)"
        />
        <Path
          data-name="\uD328\uC2A4 16515"
          d="M2195.431 1482.023l-1.042-1.041-2.083-2.073-1.041-1.041a.572.572 0 00-.4-.167.581.581 0 00-.585.576v4.165a.579.579 0 00.576.576h4.156a.583.583 0 00.586-.586.554.554 0 00-.167-.409zm-3.942-.214v-2.009l2.008 2.008z"
          transform="translate(-2182.582 -1477.7)"
        />
      </G>
    </Svg>
  )
}

export default Test
