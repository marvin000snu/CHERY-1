import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function UserInfoIcon(props) {
  const {color, size} = props;
  return (
    <Svg
      data-name="Group 11752"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 27.195 27.321"
      fill = {color}
      {...props}
    >
      <G data-name="Group 11748">
        <Path
          data-name="Path 16544"
          d="M12.615 27.321A12.616 12.616 0 010 14.706 12.629 12.629 0 0112.615 2.091a.824.824 0 010 1.648 10.966 10.966 0 00-6.82 19.554 10.967 10.967 0 0017.787-8.587.824.824 0 011.648 0 12.616 12.616 0 01-12.615 12.615z"
        />
      </G>
      <G data-name="Group 11749">
        <Path
          data-name="Path 16545"
          d="M12.678 17.622a4.247 4.247 0 114.247-4.247 4.252 4.252 0 01-4.247 4.247zm0-6.846a2.6 2.6 0 102.6 2.6 2.6 2.6 0 00-2.6-2.6z"
        />
      </G>
      <G data-name="Group 11750">
        <Path
          data-name="Path 16546"
          d="M12.615 27.322a12.475 12.475 0 01-7.846-2.738l-.394-.313.1-.494a8.306 8.306 0 0116.282 0l.1.494-.394.313a12.475 12.475 0 01-7.848 2.738zm-6.406-3.713a10.969 10.969 0 0012.813 0 6.658 6.658 0 00-12.813 0z"
        />
      </G>
      <Circle
        data-name="Ellipse 1994"
        cx={5.071}
        cy={5.071}
        r={5.071}
        transform="translate(17.052)"
      />
      <G data-name="Group 11751">
        <Path
          data-name="Path 16547"
          d="M21.225 2.258a.905.905 0 01.894-.941.947.947 0 11-.894.941zm.112 1.993c0-.307.121-.568.782-.568.606 0 .783.233.783.578.009.978-.047 2.878-.084 3.921-.019.438-.149.624-.569.643a.654.654 0 01-.763-.615c-.038-.699-.149-3.13-.149-3.959z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default UserInfoIcon
