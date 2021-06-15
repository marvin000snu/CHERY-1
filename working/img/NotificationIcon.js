import * as React from "react"
import Svg, { Circle, G, Path } from "react-native-svg"

function NotificationIcon(props) {
  const {color, size} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size*1.2}
      height={size*1.2}
      viewBox="0 0 36 35"
      fill = {color}
      {...props}
      marginBottom = {8}
      marginLeft = {8}
    >
      <Circle
        data-name="Ellipse 1997"
        cx={5}
        cy={5}
        r={3.5}
        transform="translate(27)"
        fill="#ff606d"
      />
      <G data-name="Group 11747">
        <G data-name="Group 11744">
          <Path
            data-name="Path 16541"
            d="M8.814 24.915H3.039a3.043 3.043 0 01-3.04-3.04v-4.908a3.043 3.043 0 013.04-3.04h5.775zm-5.775-9.373a1.427 1.427 0 00-1.426 1.426v4.908a1.427 1.427 0 001.426 1.426H7.2v-7.759z"
          />
        </G>
        <G data-name="Group 11745">
          <Path
            data-name="Path 16542"
            d="M24.305 31.843a1.713 1.713 0 01-.787-.191 115.662 115.662 0 00-15.884-6.767l-.6-.2.057-.632a51.707 51.707 0 000-9.254l-.057-.632.6-.2A115.63 115.63 0 0023.518 7.2a1.716 1.716 0 012.483 1.259 71.059 71.059 0 010 21.944 1.715 1.715 0 01-1.7 1.45zm-.046-1.625a.1.1 0 00.093 0 .094.094 0 00.054-.074 69.454 69.454 0 000-21.446.094.094 0 00-.054-.074.1.1 0 00-.093 0A117.28 117.28 0 018.75 15.281a53.39 53.39 0 010 8.28 117.348 117.348 0 0115.509 6.657z"
          />
        </G>
        <G data-name="Group 11746">
          <Path
            data-name="Path 16543"
            d="M8.38 32.798a5.282 5.282 0 01-5.276-5.276v-4.159h4.935v1.614H4.718v2.545a3.663 3.663 0 107.325 0v-1.589h1.614v1.589a5.282 5.282 0 01-5.277 5.276z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default NotificationIcon
