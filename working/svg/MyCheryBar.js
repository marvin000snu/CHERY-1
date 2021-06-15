import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function MyCheryBar(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 20.549 20.004" {...props}>
      <G data-name="\uADF8\uB8F9 11133" fill={props.fill}>
        <Path
          data-name="\uD328\uC2A4 10823"
          d="M125.759 108.728a4.935 4.935 0 01-.652 4.283 4.348 4.348 0 01-.305.43 5.189 5.189 0 01-3.775-2.979c-.914-2.494.86-4.979.86-4.979a4.883 4.883 0 01.583.2 5.6 5.6 0 013.289 3.045z"
          transform="translate(-113.341 -105.483) translate(-2.072)"
        />
        <Path
          data-name="\uD328\uC2A4 10824"
          d="M133.823 118.316a6.989 6.989 0 01-6.136-.161 5.766 5.766 0 01-.658-.354s.181-4.111 3.521-5.833 7.152.33 7.152.33a7 7 0 01-.174.855 7.941 7.941 0 01-3.705 5.163z"
          transform="translate(-113.341 -105.483) translate(-3.812 -1.616)"
        />
        <Path
          data-name="\uD328\uC2A4 10825"
          d="M126.264 123.786a4.288 4.288 0 00-4.346-4.229 4.288 4.288 0 00-8.576.117l.091 6.671a1.9 1.9 0 001.931 1.878l6.671-.091a4.288 4.288 0 004.229-4.346z"
          transform="translate(-113.341 -105.483) translate(0 -2.737)"
        />
      </G>
    </Svg>
  )
}

export default MyCheryBar
