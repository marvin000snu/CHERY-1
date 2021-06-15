import * as React from "react"
import Svg, { Path, Text, TSpan } from 'react-native-svg';

function ScrollFlag(props) {
    const val = props.value;
  return (
    <Svg width={39.537} height={32.465} viewBox="0 0 39.537 32.465" {...props}>
      <Path
        data-name="Union 26"
        d="M-3545.608-854.865H-3557a3 3 0 01-3-3V-879a3 3 0 013-3h33.537a3 3 0 013 3v21.136a3 3 0 01-3 3h-11.392l-5.376 5.33z"
        transform="translate(3560 882)"
        fill="#1b2c49"
      />
      <Text
        data-name="whatsoever"
        transform="translate(19.769 19)"
        fill="#fff"
        fontSize={16}
        fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
        fontWeight={500}
      >
        <TSpan x={-11.504} y={0}>
          {val}
        </TSpan>
      </Text>
    </Svg>
  )
}

export default ScrollFlag