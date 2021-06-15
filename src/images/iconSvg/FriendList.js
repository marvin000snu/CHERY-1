import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function FriendList(props) {
  return (
    <Svg width={props.size} height={props.size* 1.25} viewBox="0 0 17.478 21.652" {...props}>
      <G data-name="\uADF8\uB8F9 8969" fill={props.color}>
        <Path
          data-name="\uD328\uC2A4 13256"
          d="M2845.826-450.908c-4.826 0-8.739 1.893-8.739 4.228v5.032h17.478v-5.032c0-2.335-3.912-4.228-8.739-4.228z"
          transform="translate(-2837.087 463.3)"
        />
        <Path
          data-name="\uD328\uC2A4 13257"
          d="M2845.83-463.3a5.86 5.86 0 00-5.87 5.87 5.858 5.858 0 005.87 5.86 5.864 5.864 0 005.87-5.86 5.866 5.866 0 00-5.87-5.87zm-3.02 5.03a.828.828 0 01.83-.83.828.828 0 01.83.83.836.836 0 01-.83.84.836.836 0 01-.83-.84zm4.65 2.9a1.639 1.639 0 01-1.63 1.64 1.641 1.641 0 01-1.64-1.64v-.22h3.27zm.55-2.06a.837.837 0 01-.83-.84.828.828 0 01.83-.83.828.828 0 01.83.83.837.837 0 01-.83.84z"
          transform="translate(-2837.087 463.3)"
        />
      </G>
    </Svg>
  )
}

export default FriendList
