import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function FriendFeed(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 19.3 20.08" {...props}>
      <G data-name="\uADF8\uB8F9 8822">
        <Path
          data-name="\uD328\uC2A4 13251"
          d="M2849.08-432.65h-16.3a1.5 1.5 0 00-1.5 1.5v17.08a1.5 1.5 0 001.5 1.5h16.3a1.5 1.5 0 001.5-1.5v-17.08a1.5 1.5 0 00-1.5-1.5zm-9 2.1h3.71a.992.992 0 01.99.99.992.992 0 01-.99.99h-3.71a.994.994 0 01-1-.99.994.994 0 011-.99zm0 3.14h7.44a1 1 0 01.99.99 1 1 0 01-.99 1h-7.44a1 1 0 01-1-1 1 1 0 011-.99zm-7.03-1.64a1.5 1.5 0 011.5-1.5h1.93a1.5 1.5 0 011.5 1.5v2.13a1.5 1.5 0 01-1.5 1.5h-1.93a1.5 1.5 0 01-1.5-1.5zm15.66 12.85a1.5 1.5 0 01-1.5 1.5h-12.66a1.5 1.5 0 01-1.5-1.5v-6.43a1.5 1.5 0 011.5-1.5h12.66a1.5 1.5 0 011.5 1.5z"
          fill={props.color}
          transform="translate(-2831.28 432.65)"
        />
      </G>
    </Svg>
  )
}

export default FriendFeed
