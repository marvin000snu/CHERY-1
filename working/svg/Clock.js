import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Clock(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 19.463 21.896" {...props}>
      <G data-name="\uADF8\uB8F9 11716">
        <G data-name="\uADF8\uB8F9 11708">
          <Path
            data-name="\uD328\uC2A4 16516"
            d="M2173.361 1499.27a9.71 9.71 0 119.711-9.71 9.724 9.724 0 01-9.711 9.71zm0-17.812a8.1 8.1 0 108.1 8.1 8.112 8.112 0 00-8.1-8.1z"
            transform="translate(0 2.476) translate(-2163.649 -1479.85)"
            fill="#fff"
          />
        </G>
        <G data-name="\uADF8\uB8F9 11709">
          <Path
            data-name="\uD328\uC2A4 16517"
            d="M2175.412 1478.655a.8.8 0 01-.8.8h-1.671v1.672a.8.8 0 11-1.609 0v-1.672h-1.672a.8.8 0 010-1.61h4.952a.8.8 0 01.8.81z"
            transform="translate(6.431) translate(-2168.85 -1477.85)"
            fill="#fff"
          />
        </G>
        <G data-name="\uADF8\uB8F9 11712">
          <G data-name="\uADF8\uB8F9 11710">
            <Path
              data-name="\uD328\uC2A4 16518"
              d="M2177.114 1483.977a.8.8 0 01-.557-1.385l1.339-1.287a.8.8 0 111.114 1.16l-1.339 1.287a.8.8 0 01-.557.225z"
              transform="translate(15.656 3.106) translate(0 .893) translate(-2176.309 -1481.08)"
              fill="#fff"
            />
          </G>
          <G data-name="\uADF8\uB8F9 11711">
            <Path
              data-name="\uD328\uC2A4 16519"
              d="M2179.217 1483.756a.8.8 0 01-.58-.249l-1.714-1.787a.8.8 0 111.16-1.114l1.715 1.787a.805.805 0 01-.581 1.363z"
              transform="translate(15.656 3.106) translate(.483) translate(-2176.699 -1480.359)"
              fill="#fff"
            />
          </G>
        </G>
        <G data-name="\uADF8\uB8F9 11713">
          <Path
            data-name="\uD328\uC2A4 16520"
            d="M2175.369 1489.78h-3.714a.8.8 0 01-.8-.806v-5.819a.8.8 0 011.609 0v5.015h2.909a.805.805 0 010 1.61z"
            transform="translate(8.905 5.564) translate(-2170.85 -1482.35)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Clock
