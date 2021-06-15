import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function FriendInviteIcon(props) {
  const {size} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 27.229 27.455"
      fill = "black"
      {...props}
    >
      <G data-name="Group 11743">
        <G data-name="Group 11738">
          <Path
            data-name="Path 16536"
            d="M12.84 27.455A12.841 12.841 0 010 14.615a12.855 12.855 0 0112.84-12.84.839.839 0 110 1.677 11.162 11.162 0 00-6.942 19.9 11.163 11.163 0 0018.1-8.741.839.839 0 011.678 0 12.842 12.842 0 01-12.84 12.84z"
          />
        </G>
        <G data-name="Group 11739">
          <Path
            data-name="Path 16537"
            d="M12.905 17.583a4.323 4.323 0 114.323-4.323 4.328 4.328 0 01-4.323 4.323zm0-6.969a2.645 2.645 0 102.645 2.646 2.648 2.648 0 00-2.645-2.645z"
          />
        </G>
        <G data-name="Group 11740">
          <Path
            data-name="Path 16538"
            d="M12.841 27.455a12.7 12.7 0 01-7.987-2.787l-.4-.319.1-.5a8.454 8.454 0 0116.573 0l.1.5-.4.319a12.7 12.7 0 01-7.986 2.787zm-6.521-3.78a11.166 11.166 0 0013.042 0 6.777 6.777 0 00-13.042 0z"
          />
        </G>
        <G data-name="Group 11741">
          <Path
            data-name="Path 16539"
            d="M26.391 6.098h-8.84a.839.839 0 010-1.678h8.84a.839.839 0 010 1.678z"
          />
        </G>
        <G data-name="Group 11742">
          <Path
            data-name="Path 16540"
            d="M21.971 10.518a.839.839 0 01-.839-.839V.839a.839.839 0 011.678 0v8.84a.839.839 0 01-.839.839z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default FriendInviteIcon;
