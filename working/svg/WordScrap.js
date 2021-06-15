import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WordScrap(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 21.134 20.167" {...props}>
      <Path
        data-name="\uD328\uC2A4 14015"
        d="M3032.9-295.736l2.738 5.548a.68.68 0 00.512.372l6.123.89a.681.681 0 01.377 1.161l-4.43 4.319a.681.681 0 00-.2.6l1.046 6.1a.681.681 0 01-.987.718l-5.477-2.88a.681.681 0 00-.633 0l-5.477 2.88a.681.681 0 01-.987-.718l1.046-6.1a.677.677 0 00-.2-.6l-4.43-4.319a.681.681 0 01.377-1.161l6.123-.89a.679.679 0 00.512-.372l2.738-5.548a.681.681 0 011.229 0z"
        transform="translate(-3021.722 296.116)"
        fill={props.fill}
      />
    </Svg>
  )
}

export default WordScrap
