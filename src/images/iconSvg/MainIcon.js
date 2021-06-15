import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Circle,
  G,
  Path
} from "react-native-svg";
import { View } from "react-native";
function MainIcon(props) {
  return (
    <View>
      {props.type === 1 && (
        <Svg
          width={props.size}
          height={props.size}
          viewBox="0 0 72 72"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              y1={0.5}
              x2={1}
              y2={0.5}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0.078} stopColor="#b3a5f9" />
              <Stop offset={0.917} stopColor="#ecb4de" />
            </LinearGradient>
            <ClipPath id="b">
              <Circle
                data-name="\uD0C0\uC6D0 114-2"
                cx={36}
                cy={36}
                r={36}
                transform="translate(-.118 -.119)"
                fill="url(#a)"
              />
            </ClipPath>
          </Defs>
          <G
            data-name="\uADF8\uB8F9 6853"
            transform="translate(-1152.731 231.91)"
          >
            <Circle
              data-name="\uD0C0\uC6D0 114-2"
              cx={36}
              cy={36}
              r={36}
              transform="translate(1152.731 -231.91)"
              fill="url(#a)"
            />
            <G
              data-name="\uADF8\uB8F9 6831"
              transform="translate(1152.85 -231.791)"
              clipPath="url(#b)"
            >
              <Path
                data-name="\uC0AC\uAC01\uD615 4511"
                d="M0 0h10.873a2.944 2.944 0 012.944 2.944V5.8a2.944 2.944 0 01-2.944 2.944H0V0z"
                transform="translate(53.311 14.688)"
                fill="#1675a6"
              />
              <Path
                data-name="\uD328\uC2A4 9994"
                d="M1206.229-188.174h-42.441l-3.326-15.958a21.469 21.469 0 011.2-7.143 21.77 21.77 0 0120.567-14.612h5.554a21.784 21.784 0 0120.567 14.612 21.848 21.848 0 011.2 7.143z"
                transform="translate(-1149.126 234.687)"
                fill="#7d5a42"
              />
              <Path
                data-name="\uD328\uC2A4 9995"
                d="M1198.16-204.817v25.824h-20.092v-23.567h-1.886a1.413 1.413 0 01-1.411-1.426 1.4 1.4 0 011.411-1.411h1.886v-17.241h2.272a17.824 17.824 0 0117.82 17.821z"
                transform="translate(-1142.186 236.263)"
                fill="#fff6f5"
              />
              <Path
                data-name="\uD328\uC2A4 9996"
                d="M1180.26-203.986a1.413 1.413 0 001.411 1.426h1.886v23.567h-20.092v-25.824a17.815 17.815 0 0117.82-17.82h2.272v17.237h-1.886a1.4 1.4 0 00-1.411 1.414z"
                transform="translate(-1147.669 236.263)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 9997"
                d="M38.226 37.705a2.334 2.334 0 01-2.342 2.326 2.333 2.333 0 01-2.34-2.326"
                fill="none"
                stroke="#ff9d92"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.439}
              />
              <G
                data-name="\uADF8\uB8F9 6829"
                transform="translate(26.326 27.429)"
                fill="#120f0f"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 786"
                  cx={1.55}
                  cy={1.55}
                  r={1.55}
                />
                <Circle
                  data-name="\uD0C0\uC6D0 787"
                  cx={1.55}
                  cy={1.55}
                  r={1.55}
                  transform="translate(16.012)"
                />
              </G>
              <Path
                data-name="\uD328\uC2A4 9998"
                d="M1207.963-211.275c-.728.134-1.485.252-2.257.356q-1.27.178-2.584.356a164.58 164.58 0 01-5.153.52q-4.232.334-8.806.475v-2.079h-9.088v2.064a153.157 153.157 0 01-9.266-.5c-1.619-.134-3.193-.3-4.708-.49a88.177 88.177 0 01-3.044-.416c-.609-.074-1.2-.178-1.782-.282a21.77 21.77 0 0120.567-14.612h5.554a21.784 21.784 0 0120.567 14.608z"
                transform="translate(-1148.731 234.687)"
                fill="#37a6de"
              />
              <Path
                data-name="\uD328\uC2A4 9999"
                d="M1187.526-194.125v48.262a32.069 32.069 0 01-31.482-25.883v-.015q-.29-1.47-.445-2.985a33.938 33.938 0 01-.163-3.208c0-.46.015-.921.03-1.366.015-.371.03-.742.074-1.114v-.119c.03-.4.074-.8.119-1.2.1-.846.223-1.663.386-2.465.089-.416.178-.817.268-1.218s.208-.787.312-1.188c.119-.445.253-.876.4-1.322a31.559 31.559 0 014.247-8.45c1.916.371 3.95.713 6.088.995a150.792 150.792 0 0020.092 1.277z"
                transform="translate(-1151.564 248.989)"
                fill="#1675a6"
              />
              <Path
                data-name="\uD328\uC2A4 10000"
                d="M1209.135-177.944a32.081 32.081 0 01-32.091 32.091v-48.262a136.575 136.575 0 0026.121-2.287.325.325 0 00.118-.015 31.9 31.9 0 015.852 18.473z"
                transform="translate(-1141.083 248.979)"
                fill="#37a6de"
              />
              <Path
                data-name="\uD328\uC2A4 10001"
                d="M1164.958-201.571a4.582 4.582 0 01-4.581-4.583 4.581 4.581 0 014.581-4.581z"
                transform="translate(-1149.167 242.035)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10002"
                d="M1190.522-210.735a4.582 4.582 0 014.583 4.581 4.584 4.584 0 01-4.583 4.583z"
                transform="translate(-1134.547 242.035)"
                fill="#fff6f5"
              />
              <G
                data-name="\uADF8\uB8F9 6830"
                transform="translate(20.122 30.528)"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 788"
                  cx={3.616}
                  cy={3.616}
                  r={3.616}
                  transform="translate(24.441)"
                  fill="#fbc9c0"
                />
                <Circle
                  data-name="\uD0C0\uC6D0 789"
                  cx={3.616}
                  cy={3.616}
                  r={3.616}
                  fill="#fcaba1"
                />
              </G>
              <Path
                data-name="\uC120 746"
                transform="translate(35.958 53.721)"
                fill="none"
                d="M0 1.143L0 0"
              />
              <Path
                data-name="\uD328\uC2A4 10003"
                d="M1178.479-219.314v4.544c-1.53 0-3.044-.015-4.544-.059a4.541 4.541 0 014.544-4.485z"
                transform="translate(-1142.592 237.874)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10004"
                d="M1181.539-214.829c-1.5.045-3.015.059-4.544.059v-4.544a4.541 4.541 0 014.544 4.485z"
                transform="translate(-1141.108 237.874)"
                fill="#fff6f5"
              />
              <Path
                data-name="\uD328\uC2A4 10005"
                d="M1183.023-216.3v2.079c-1.5.045-3.015.059-4.544.059s-3.044-.015-4.544-.074v-2.064z"
                transform="translate(-1142.592 239.338)"
                fill="#1675a6"
              />
            </G>
          </G>
        </Svg>
      )}
      {props.type === 2 && (
        <Svg
          width={props.size}
          height={props.size}
          viewBox="0 0 72 72"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              y1={0.5}
              x2={1}
              y2={0.5}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0.078} stopColor="#83ccae" />
              <Stop offset={0.917} stopColor="#ece0a9" />
            </LinearGradient>
            <ClipPath id="b">
              <Circle
                data-name="\uD0C0\uC6D0 114-2"
                cx={36}
                cy={36}
                r={36}
                transform="translate(-.118 -.119)"
                fill="url(#a)"
              />
            </ClipPath>
          </Defs>
          <G
            data-name="\uADF8\uB8F9 6854"
            transform="translate(-1275.493 231.683)"
          >
            <Circle
              data-name="\uD0C0\uC6D0 114-2"
              cx={36}
              cy={36}
              r={36}
              transform="translate(1275.494 -231.683)"
              fill="url(#a)"
            />
            <G
              data-name="\uADF8\uB8F9 6835"
              transform="translate(1275.612 -231.565)"
              clipPath="url(#b)"
            >
              <Path
                data-name="\uD328\uC2A4 10006"
                d="M1333.4-203.117L1330.041-187h-42.9l-5.839-15.837a23.961 23.961 0 011.336-7.941 23.835 23.835 0 016.6-9.952 24.022 24.022 0 0116.257-6.29h2.492a4.376 4.376 0 013.617 1.906 22.026 22.026 0 0120.58 14.771 22.087 22.087 0 011.216 7.226z"
                transform="translate(-1272.779 233.827)"
                fill="#7d5a42"
              />
              <Path
                data-name="\uD328\uC2A4 10007"
                d="M1332.577-203.754l-3.362 16.122h-42.9l-3.362-16.122a21.7 21.7 0 011.216-7.22 22.162 22.162 0 015.629-8.721 21.913 21.913 0 0115.161-6.049h5.824a22.025 22.025 0 0120.58 14.771 22.081 22.081 0 011.214 7.219z"
                transform="translate(-1271.953 234.464)"
                fill="#7d5a42"
              />
              <Path
                data-name="\uD328\uC2A4 10008"
                d="M1320.9-204.332v26.1h-20.31v-23.818h-1.906a1.429 1.429 0 01-1.426-1.441 1.416 1.416 0 011.426-1.426h1.906v-17.428h2.3a18.018 18.018 0 0118.01 18.013z"
                transform="translate(-1264.783 236.168)"
                fill="#fff6f5"
              />
              <Path
                data-name="\uD328\uC2A4 10009"
                d="M1302.924-203.491a1.429 1.429 0 001.426 1.441h1.906v23.823h-20.31v-26.1a18.008 18.008 0 0118.013-18.013h2.3v17.428h-1.906a1.416 1.416 0 00-1.429 1.421z"
                transform="translate(-1270.45 236.168)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10010"
                d="M38.172 38.163a2.359 2.359 0 01-2.367 2.351 2.357 2.357 0 01-2.365-2.351"
                fill="none"
                stroke="#ff9d92"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.439}
              />
              <G
                data-name="\uADF8\uB8F9 6833"
                transform="translate(26.146 27.776)"
                fill="#120f0f"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 790"
                  cx={1.566}
                  cy={1.566}
                  r={1.566}
                />
                <Circle
                  data-name="\uD0C0\uC6D0 791"
                  cx={1.566}
                  cy={1.566}
                  r={1.566}
                  transform="translate(16.186)"
                />
              </G>
              <Path
                data-name="\uD328\uC2A4 10011"
                d="M1310.356-193.808v48.786a32.429 32.429 0 01-32.439-32.439 32.172 32.172 0 015.9-18.644 141.189 141.189 0 0026.464 2.3z"
                transform="translate(-1274.475 249.317)"
                fill="#b5b5b6"
              />
              <Path
                data-name="\uD328\uC2A4 10012"
                d="M1331.966-177.451a32.429 32.429 0 01-32.439 32.439V-193.8a138.943 138.943 0 0026.525-2.327 32.244 32.244 0 015.914 18.676z"
                transform="translate(-1263.646 249.307)"
                fill="#efefef"
              />
              <Path
                data-name="\uD328\uC2A4 10013"
                d="M1287.493-201.18a4.632 4.632 0 01-4.631-4.632 4.63 4.63 0 014.631-4.631z"
                transform="translate(-1271.997 242.132)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10014"
                d="M1313.007-210.443a4.632 4.632 0 014.632 4.631 4.633 4.633 0 01-4.632 4.632z"
                transform="translate(-1256.891 242.132)"
                fill="#fff6f5"
              />
              <G
                data-name="\uADF8\uB8F9 6834"
                transform="translate(19.874 30.909)"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 792"
                  cx={3.655}
                  cy={3.655}
                  r={3.655}
                  transform="translate(24.706)"
                  fill="#fbc9c0"
                />
                <Circle
                  data-name="\uD0C0\uC6D0 793"
                  cx={3.655}
                  cy={3.655}
                  r={3.655}
                  fill="#fcaba1"
                />
              </G>
              <Path
                data-name="\uC120 747"
                transform="translate(35.882 54.353)"
                fill="none"
                d="M0 1.156L0 0"
              />
              <Path
                data-name="\uD328\uC2A4 10015"
                d="M1296.176-216.8a4.506 4.506 0 00.045-.645v.645z"
                transform="translate(-1265.325 238.623)"
                fill="#f19911"
              />
              <Path
                data-name="\uD328\uC2A4 10016"
                d="M1306.911-218.408c-1.4.045-2.792.06-4.218.06H1302a2.464 2.464 0 012.462-2.417 2.449 2.449 0 012.449 2.357z"
                transform="translate(-1262.405 236.959)"
                fill="#a88a76"
              />
              <Path
                data-name="\uD328\uC2A4 10017"
                d="M1303.642-218.348h-4.908a2.463 2.463 0 012.461-2.417 2.391 2.391 0 012.447 2.417z"
                transform="translate(-1264.043 236.959)"
                fill="#a88a76"
              />
              <Path
                data-name="\uD328\uC2A4 10018"
                d="M1323.52-221.225c-.15-.015-.315-.015-.465-.015a7.722 7.722 0 00-1.321.12v-1.4c-.135-.09-.27-.165-.405-.255h-19.7a10.013 10.013 0 00-5.871-1.9 10.072 10.072 0 00-10.073 10.072c0 11.465-6.024 10.072 10.073 10.072a10.067 10.067 0 008.907-5.375 6.985 6.985 0 001.115-3.278 4.506 4.506 0 00.045-.645v-.684-.089V-216.351a.419.419 0 01.015-.135 2.441 2.441 0 012.432-2.327 2.464 2.464 0 012.462 2.417 2.464 2.464 0 012.462-2.417 2.449 2.449 0 012.447 2.357.253.253 0 01.015.105v2.522a4.506 4.506 0 00.045.645 7.234 7.234 0 001.216 3.453 7.318 7.318 0 006.14 3.3c7.878 0 5.7-1.861 6.815-4.518a7.249 7.249 0 00.375-1.141 22.071 22.071 0 00-6.729-9.135z"
                transform="translate(-1271.137 235.002)"
                fill="#7d5a42"
              />
              <Path
                data-name="\uD328\uC2A4 10019"
                d="M1309.722-222.632a4.379 4.379 0 01-1.291 3.107 4.344 4.344 0 01-3.092 1.291h-14.8a4.436 4.436 0 01-2.567-.826 4.5 4.5 0 01-1.381-1.666 24.022 24.022 0 0116.257-6.29h2.492a4.376 4.376 0 013.617 1.906 4.394 4.394 0 01.765 2.478z"
                transform="translate(-1270.129 233.827)"
                fill="#7d5a42"
              />
            </G>
          </G>
        </Svg>
      )}
      {props.type === 3 && (
        <Svg
          width={props.size}
          height={props.size}
          viewBox="0 0 72 72"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              x1={0.089}
              y1={0.9}
              x2={0.666}
              y2={0.339}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0.078} stopColor="#ff85b4" />
              <Stop offset={0.917} stopColor="#ece0a9" />
            </LinearGradient>
            <ClipPath id="b">
              <Circle
                data-name="\uD0C0\uC6D0 114-2"
                cx={36}
                cy={36}
                r={36}
                transform="translate(-.488 -.488)"
                fill="url(#a)"
              />
            </ClipPath>
          </Defs>
          <G
            data-name="\uADF8\uB8F9 6859"
            transform="translate(-1152.588 174.801)"
          >
            <Circle
              data-name="\uD0C0\uC6D0 114-2"
              cx={36}
              cy={36}
              r={36}
              transform="translate(1152.588 -174.801)"
              fill="url(#a)"
            />
            <G
              data-name="\uADF8\uB8F9 6843"
              transform="translate(1153.076 -174.313)"
              clipPath="url(#b)"
            >
              <Path
                data-name="\uD328\uC2A4 10033"
                d="M1193.746-132.87h-17.327c-9.857 0-17.394-4.259-15.895-14a21.474 21.474 0 011.2-7.146 21.78 21.78 0 0120.576-14.619h5.556a21.794 21.794 0 0120.576 14.619 21.854 21.854 0 011.2 7.146c1.507 9.742-6.032 14-15.886 14z"
                fill="black"
                transform="translate(-1149.569 177.053)"
              />
              <Path
                data-name="\uD328\uC2A4 10034"
                d="M1198.17-147.557v25.835h-20.1V-145.3h-1.886a1.414 1.414 0 01-1.411-1.426 1.4 1.4 0 011.411-1.411h1.886v-17.248h2.273a17.832 17.832 0 0117.827 17.828z"
                transform="translate(-1142.557 178.631)"
                fill="#fff6f5"
              />
              <Path
                data-name="\uD328\uC2A4 10035"
                d="M1180.264-146.725a1.414 1.414 0 001.411 1.426h1.886v23.577h-20.1v-25.835a17.823 17.823 0 0117.828-17.828h2.273v17.248h-1.886a1.4 1.4 0 00-1.412 1.412z"
                transform="translate(-1148.05 178.631)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10036"
                d="M37.855 37.336a2.335 2.335 0 01-2.343 2.326 2.334 2.334 0 01-2.341-2.326"
                fill="none"
                stroke="#ff9d92"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.439}
              />
              <G
                data-name="\uADF8\uB8F9 6841"
                transform="translate(25.952 27.056)"
                fill="#120f0f"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 798"
                  cx={1.55}
                fill="black"
                cy={1.55}
                  r={1.55}
                />
                <Circle
                  data-name="\uD0C0\uC6D0 799"
                  cx={1.55}
                  cy={1.55}
                fill="black"
                r={1.55}
                  transform="translate(16.019)"
                />
              </G>
              <Path
                data-name="\uD328\uC2A4 10037"
                d="M1187.536-136.872v48.283a32.1 32.1 0 01-32.1-32.1 31.838 31.838 0 015.839-18.451 139.729 139.729 0 0026.191 2.273z"
                transform="translate(-1151.949 191.374)"
                fill="#4c5aa9"
              />
              <Path
                data-name="\uD328\uC2A4 10038"
                d="M1209.146-120.684a32.1 32.1 0 01-32.1 32.1v-48.283a137.514 137.514 0 0026.251-2.3 31.913 31.913 0 015.849 18.483z"
                transform="translate(-1141.455 191.364)"
                fill="#5267c1"
              />
              <Path
                data-name="\uD328\uC2A4 10039"
                d="M1163.973-144.315a4.585 4.585 0 01-4.584-4.585 4.584 4.584 0 014.584-4.583z"
                transform="translate(-1150.027 184.411)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10040"
                d="M1191.17-153.483a4.583 4.583 0 014.583 4.583 4.584 4.584 0 01-4.583 4.585z"
                transform="translate(-1134.594 184.411)"
                fill="#fff6f5"
              />
              <G
                data-name="\uADF8\uB8F9 6842"
                transform="translate(19.745 30.156)"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 800"
                  cx={3.617}
                  cy={3.617}
                  r={3.617}
                  transform="translate(24.451)"
                  fill="#fbc9c0"
                />
                <Circle
                  data-name="\uD0C0\uC6D0 801"
                  cx={3.617}
                  cy={3.617}
                  r={3.617}
                  fill="#fcaba1"
                />
              </G>
              <Path
                data-name="\uD328\uC2A4 10041"
                fill="black"
                d="M1168.478-134.006v-27.884h-6v20.132c-.003 4.281 1.722 7.752 6 7.752z"
                transform="translate(-1148.529 180.329)"
              />
              <Path
                data-name="\uD328\uC2A4 10042"
                fill="black"
                d="M1187.129-134.006v-27.884h6v20.132c.003 4.281-1.72 7.752-6 7.752z"
                transform="translate(-1136.556 180.329)"
              />
              <Path
                data-name="\uC120 749"
                transform="translate(35.587 53.358)"
                // fill="black"
                fill="none"
                d="M0 1.144L0 0"
              />
              <Path
                data-name="\uD328\uC2A4 10043"
                fill="black"
                d="M1202.893-157.591a7.3 7.3 0 01-.579 2.852c-1.1 2.63 3 4.472-6.744 4.472a7.241 7.241 0 01-6.076-3.268 7.154 7.154 0 01-1.2-3.417 4.451 4.451 0 01-.045-.639v-2.5a.252.252 0 00-.015-.1 2.424 2.424 0 00-2.422-2.332 2.438 2.438 0 00-2.436 2.392 2.438 2.438 0 00-2.437-2.392 2.416 2.416 0 00-2.407 2.3.41.41 0 00-.015.134v2.5a4.487 4.487 0 01-.044.639 7.048 7.048 0 01-1.323 3.58 7.25 7.25 0 01-5.972 3.1c-8.3 0-5.229-1.575-6.462-3.878a7.273 7.273 0 01-.862-3.447 7.415 7.415 0 01.921-3.58 7.342 7.342 0 016.4-3.759 7.863 7.863 0 012.154.312v-1.827h20.932v1.634a7.641 7.641 0 011.308-.119 7.293 7.293 0 012.436.416 7.39 7.39 0 014.041 3.476 6.837 6.837 0 01.743 2.318 5.707 5.707 0 01.104 1.133z"
                transform="translate(-1147.861 178.117)"
              />
              <Path
                data-name="\uD328\uC2A4 10044"
                d="M1173.691-159.846a4.452 4.452 0 00.044-.639v.639z"
                transform="translate(-1143.082 181.011)"
                fill="#f19911"
              />
              <Path
                data-name="\uD328\uC2A4 10045"
                d="M1180.315-159.846h-.044v-.639a4.487 4.487 0 00.044.639z"
                transform="translate(-1139.887 181.011)"
                fill="#f19911"
              />
              <Path
                data-name="\uD328\uC2A4 10046"
                d="M1181.849-161.473c-1.381.045-2.763.059-4.175.059h-.683a2.439 2.439 0 012.436-2.392 2.424 2.424 0 012.422 2.333z"
                transform="translate(-1141.48 179.399)"
                fill="#3f3f3f"
              />
              <Path
                data-name="\uD328\uC2A4 10047"
                d="M1178.579-161.413h-4.858a2.438 2.438 0 012.436-2.392 2.367 2.367 0 012.422 2.392z"
                transform="translate(-1143.068 179.399)"
                fill="#3f3f3f"
              />
              <Circle
                data-name="\uD0C0\uC6D0 802"
                cx={5.708}
                cy={5.708}
                r={5.708}
                fill="black"
                transform="translate(10.282 9.123)"
              />
              <Circle
                data-name="\uD0C0\uC6D0 803"
                cx={3.747}
                cy={3.747}
                r={3.747}
                fill="black"
                transform="translate(5.615 17.823)"
              />
              <Circle
                data-name="\uD0C0\uC6D0 804"
                cx={2.649}
                cy={2.649}
                r={2.649}
                fill="black"
                transform="translate(4.984 25.201)"
              />
              <Circle
                data-name="\uD0C0\uC6D0 805"
                cx={5.708}
                cy={5.708}
                r={5.708}
                fill="black"
                transform="translate(49.517 9.123)"
              />
              <Circle
                data-name="\uD0C0\uC6D0 806"
                cx={3.747}
                cy={3.747}
                fill="black"
                r={3.747}
                transform="translate(58.106 17.823)"
              />
              <Circle
                data-name="\uD0C0\uC6D0 807"
                cx={2.649}
                cy={2.649}
                r={2.649}
                transform="translate(60.932 25.201)"
                fill="black"
              />
            </G>
          </G>
        </Svg>
      )}
      {props.type === 4 && (
        <Svg
          width={props.size}
          height={props.size}
          viewBox="0 0 72 72"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              y1={0.5}
              x2={1}
              y2={0.5}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0.078} stopColor="#ece0a9" />
              <Stop offset={0.917} stopColor="#b2f0e4" />
            </LinearGradient>
            <ClipPath id="b">
              <Circle
                data-name="\uD0C0\uC6D0 114-2"
                cx={36}
                cy={36}
                r={36}
                transform="translate(.053 .053)"
                fill="url(#a)"
              />
            </ClipPath>
          </Defs>
          <G
            data-name="\uADF8\uB8F9 6860"
            transform="translate(-1212.012 174.487)"
          >
            <Circle
              data-name="\uD0C0\uC6D0 114-2"
              cx={36}
              cy={36}
              r={36}
              transform="translate(1212.012 -174.487)"
              fill="url(#a)"
            />
            <G
              data-name="\uADF8\uB8F9 6847"
              transform="translate(1211.959 -174.539)"
              clipPath="url(#b)"
            >
              <Path
                data-name="\uD328\uC2A4 10048"
                d="M1268.9-152.445l-3.342 16.04h-42.643l-3.342-16.04a22.185 22.185 0 01.209-3.014 171.4 171.4 0 0124.218-1.656 173.114 173.114 0 0124.693 1.716 21.478 21.478 0 01.207 2.954z"
                transform="translate(-1208.181 183.145)"
                fill="#804f67"
              />
              <Path
                data-name="\uD328\uC2A4 10049"
                d="M1257.382-147.48v25.947h-20.187v-23.679h-1.9a1.42 1.42 0 01-1.417-1.432 1.407 1.407 0 011.417-1.417h1.9v-17.323h2.282a17.909 17.909 0 0117.905 17.904z"
                transform="translate(-1201.14 179.076)"
                fill="#fff6f5"
              />
              <Path
                data-name="\uD328\uC2A4 10050"
                d="M1239.449-146.645a1.42 1.42 0 001.417 1.432h1.9v23.679h-20.188v-25.946a17.9 17.9 0 0117.9-17.9h2.283v17.323h-1.9a1.407 1.407 0 00-1.412 1.412z"
                transform="translate(-1206.704 179.076)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10051"
                d="M38.404 37.885a2.344 2.344 0 01-2.352 2.337 2.344 2.344 0 01-2.353-2.337"
                fill="none"
                stroke="#ff9d92"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.439}
              />
              <G
                data-name="\uADF8\uB8F9 6845"
                transform="translate(26.452 27.56)"
                fill="#120f0f"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 808"
                  cx={1.557}
                  cy={1.557}
                  r={1.557}
                />
                <Circle
                  data-name="\uD0C0\uC6D0 809"
                  cx={1.557}
                  cy={1.557}
                  r={1.557}
                  transform="translate(16.088)"
                />
              </G>
              <Path
                data-name="\uD328\uC2A4 10052"
                d="M1246.788-136.862v48.492a32.222 32.222 0 01-31.632-26.007v-.015q-.291-1.477-.448-3a34.256 34.256 0 01-.164-3.223c0-.463.015-.925.03-1.373.015-.373.03-.746.075-1.119v-.119c.03-.4.074-.806.119-1.209.1-.85.224-1.671.388-2.477.09-.418.179-.821.269-1.223s.209-.791.313-1.194c.119-.448.254-.88.4-1.328a31.731 31.731 0 014.267-8.49c1.925.373 3.969.716 6.118 1a151.5 151.5 0 0020.188 1.283z"
                transform="translate(-1210.655 191.988)"
                fill="#ffb600"
              />
              <Path
                data-name="\uD328\uC2A4 10053"
                d="M1268.4-120.6a32.234 32.234 0 01-32.244 32.244v-48.492a137.225 137.225 0 0026.245-2.3.328.328 0 00.119-.015 32.05 32.05 0 015.88 18.563z"
                transform="translate(-1200.022 191.978)"
                fill="#feca38"
              />
              <Path
                data-name="\uD328\uC2A4 10054"
                d="M1224.09-144.275a4.605 4.605 0 01-4.6-4.6 4.6 4.6 0 014.6-4.6z"
                transform="translate(-1208.223 184.933)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10055"
                d="M1249.632-153.483a4.6 4.6 0 014.6 4.6 4.6 4.6 0 01-4.6 4.6z"
                transform="translate(-1193.39 184.933)"
                fill="#fff6f5"
              />
              <G
                data-name="\uADF8\uB8F9 6846"
                transform="translate(20.217 30.674)"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 810"
                  cx={3.633}
                  cy={3.633}
                  r={3.633}
                  transform="translate(24.557)"
                  fill="#fbc9c0"
                />
                <Circle
                  data-name="\uD0C0\uC6D0 811"
                  cx={3.633}
                  cy={3.633}
                  r={3.633}
                  fill="#fcaba1"
                />
              </G>
              <Path
                data-name="\uC120 750"
                transform="translate(36.129 53.977)"
                fill="none"
                d="M0 1.149L0 0"
              />
              <Path
                data-name="\uD328\uC2A4 10056"
                d="M1237.61-162.062v4.566c-1.537 0-3.059-.015-4.566-.06a4.563 4.563 0 014.566-4.506z"
                transform="translate(-1201.552 180.711)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10057"
                d="M1240.67-157.556c-1.507.045-3.029.06-4.566.06v-4.566a4.563 4.563 0 014.566 4.506z"
                transform="translate(-1200.046 180.711)"
                fill="#fff6f5"
              />
              <Path
                data-name="\uD328\uC2A4 10058"
                d="M1266.647-155.371a176.357 176.357 0 00-20.546-1.179 171.409 171.409 0 00-24.216 1.656c-.448.06-.88.119-1.313.194a21.849 21.849 0 0120.382-13.936h5.581a21.884 21.884 0 0120.112 13.265z"
                transform="translate(-1207.689 177.477)"
                fill="#7cbb8c"
              />
              <Path
                data-name="\uD328\uC2A4 10059"
                d="M1268.622-153.716a173.116 173.116 0 00-24.693-1.716 171.4 171.4 0 00-24.216 1.656 21.715 21.715 0 011-4.163c.09-.254.179-.507.284-.746.433-.075.865-.134 1.313-.194a171.4 171.4 0 0124.216-1.656 176.353 176.353 0 0120.546 1.179c.194.463.388.94.552 1.417a22.027 22.027 0 01.998 4.223z"
                transform="translate(-1208.112 181.462)"
                fill="#63a673"
              />
            </G>
          </G>
        </Svg>
      )}
      {props.type === 5 && (
        <Svg
          width={props.size}
          height={props.size}
          viewBox="0 0 72 72"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              x1={0.16}
              y1={0.992}
              x2={0.725}
              y2={0.173}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0.078} stopColor="#78b8f0" />
              <Stop offset={0.917} stopColor="#ffcdbe" />
            </LinearGradient>
            <ClipPath id="b">
              <Circle
                data-name="\uD0C0\uC6D0 114-2"
                cx={36}
                cy={36}
                r={36}
                fill="url(#a)"
              />
            </ClipPath>
          </Defs>
          <G
            data-name="\uADF8\uB8F9 6861"
            transform="translate(-1096.37 174.313) translate(1096.37 -174.313)"
          >
            <Circle
              data-name="\uD0C0\uC6D0 114-2"
              cx={36}
              cy={36}
              r={36}
              fill="url(#a)"
            />
            <G data-name="\uADF8\uB8F9 6851" clipPath="url(#b)">
              <Path
                data-name="\uD328\uC2A4 10060"
                d="M1158.347-133.973a6.029 6.029 0 01-2.365 2.922.706.706 0 00-.135.09 4.993 4.993 0 01-2.139.648 1.642 1.642 0 01-.271.015h-46.9a3.637 3.637 0 01-.708-.06 4.52 4.52 0 01-1.115-.316.015.015 0 01-.015-.015 4.625 4.625 0 01-1.024-.587 6.1 6.1 0 01-2.078-2.816 7.211 7.211 0 01-.422-3.569l3.916-11.356a22.043 22.043 0 01.256-3.328 12.472 12.472 0 007.2 2.274A12.515 12.515 0 001125-161.383h.06a2.472 2.472 0 012.47-2.425 2.4 2.4 0 012.455 2.425 2.472 2.472 0 012.47-2.425 2.457 2.457 0 012.455 2.364c-1.4.045-2.8.06-4.232.06H1135a12.512 12.512 0 0012.44 11.31 12.425 12.425 0 007.184-2.274 22.043 22.043 0 01.256 3.328l3.916 11.356a7.52 7.52 0 01-.449 3.691z"
                transform="translate(-1093.988 179.611)"
                fill="#120f0f"
              />
              <Path
                data-name="\uD328\uC2A4 10061"
                d="M1154.027-138.009a3.442 3.442 0 002.741 3.374h-53.721a3.442 3.442 0 002.741-3.374 3.472 3.472 0 00-1.235-2.651.015.015 0 01-.015-.015 4.624 4.624 0 01-1.024-.587l-2.078-2.816h56.748v.12a6.031 6.031 0 01-2.365 2.922.7.7 0 00-.135.09 3.423 3.423 0 00-1.657 2.937z"
                transform="translate(-1093.825 189.596)"
                fill="#120f0f"
              />
              <Path
                data-name="\uD328\uC2A4 10062"
                d="M1141.787-147.312v26.19h-20.377v-23.9h-1.91a1.434 1.434 0 01-1.431-1.446 1.421 1.421 0 011.431-1.431h1.913v-17.485h2.3a18.077 18.077 0 0118.074 18.072z"
                transform="translate(-1085.408 178.813)"
                fill="#fff6f5"
              />
              <Path
                data-name="\uD328\uC2A4 10063"
                d="M1123.791-146.469a1.433 1.433 0 001.431 1.446h1.913v23.9h-20.377v-26.19a18.068 18.068 0 0118.073-18.073h2.3v17.486h-1.913a1.421 1.421 0 00-1.427 1.431z"
                transform="translate(-1091.132 178.813)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10064"
                d="M38.375 37.849a2.366 2.366 0 01-2.373 2.358 2.367 2.367 0 01-2.375-2.358"
                fill="none"
                stroke="#ff9d92"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.439}
              />
              <G
                data-name="\uADF8\uB8F9 6849"
                transform="translate(26.309 27.428)"
                fill="#120f0f"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 812"
                  cx={1.572}
                  cy={1.572}
                  r={1.572}
                />
                <Circle
                  data-name="\uD0C0\uC6D0 813"
                  cx={1.572}
                  cy={1.572}
                  r={1.572}
                  transform="translate(16.239)"
                />
              </G>
              <Path
                data-name="\uD328\uC2A4 10065"
                d="M1131.273-136.831v48.947a32.536 32.536 0 01-32.546-32.546 32.278 32.278 0 015.919-18.705 141.658 141.658 0 0026.552 2.3z"
                transform="translate(-1095.195 192.097)"
                fill="#fe6150"
              />
              <Path
                data-name="\uD328\uC2A4 10066"
                d="M1152.883-120.42a32.536 32.536 0 01-32.546 32.546v-48.947a139.4 139.4 0 0026.612-2.334 32.349 32.349 0 015.934 18.735z"
                transform="translate(-1084.259 192.087)"
                fill="#ff8173"
              />
              <Path
                data-name="\uD328\uC2A4 10067"
                d="M1107.33-144.189a4.647 4.647 0 01-4.646-4.648 4.646 4.646 0 014.646-4.646z"
                transform="translate(-1093.193 184.836)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10068"
                d="M1134.464-153.483a4.646 4.646 0 014.646 4.646 4.647 4.647 0 01-4.646 4.648z"
                transform="translate(-1077.11 184.836)"
                fill="#fff6f5"
              />
              <G
                data-name="\uADF8\uB8F9 6850"
                transform="translate(20.016 30.571)"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 814"
                  cx={3.667}
                  cy={3.667}
                  r={3.667}
                  transform="translate(24.787)"
                  fill="#fbc9c0"
                />
                <Circle
                  data-name="\uD0C0\uC6D0 815"
                  cx={3.667}
                  cy={3.667}
                  r={3.667}
                  fill="#fcaba1"
                />
              </G>
              <Path
                data-name="\uC0AC\uAC01\uD615 4514"
                d="M0 0h7.858v28.267h-2.64A5.218 5.218 0 010 23.049V0z"
                transform="translate(14.138 21.866)"
                fill="#120f0f"
              />
              <Path
                data-name="\uC0AC\uAC01\uD615 4515"
                d="M0 0h7.858v23.049a5.218 5.218 0 01-5.218 5.218H0V0z"
                transform="translate(49.534 21.866)"
                fill="#120f0f"
              />
              <Path
                data-name="\uC120 751"
                transform="translate(36.077 54.092)"
                fill="none"
                d="M0 1.16L0 0"
              />
              <Path
                data-name="\uD328\uC2A4 10069"
                d="M1153.2-149.9a12.425 12.425 0 01-7.184 2.274 12.512 12.512 0 01-12.44-11.31h-4.323c1.431 0 2.832-.015 4.232-.06a2.458 2.458 0 00-2.455-2.365 2.472 2.472 0 00-2.47 2.425 2.4 2.4 0 00-2.455-2.425 2.472 2.472 0 00-2.47 2.425h-.06a12.516 12.516 0 01-12.455 11.31 12.472 12.472 0 01-7.2-2.274 21.257 21.257 0 01.964-3.916 22.092 22.092 0 0115.9-14.262 22.408 22.408 0 014.955-.557h5.633a21.582 21.582 0 014.97.572 22.107 22.107 0 0115.889 14.247 21.218 21.218 0 01.969 3.916z"
                transform="translate(-1092.564 177.167)"
                fill="#120f0f"
              />
              <Path
                data-name="\uD328\uC2A4 10070"
                d="M1125.211-161.444c-1.4.045-2.8.06-4.232.06h-.693a2.472 2.472 0 012.47-2.425 2.457 2.457 0 012.455 2.365z"
                transform="translate(-1084.285 179.611)"
                fill="#3e3a39"
              />
              <Path
                data-name="\uD328\uC2A4 10071"
                d="M1121.941-161.383h-4.925a2.472 2.472 0 012.47-2.425 2.4 2.4 0 012.455 2.425z"
                transform="translate(-1085.94 179.611)"
                fill="#3e3a39"
              />
            </G>
          </G>
        </Svg>
      )}
      {props.type === 6 && (
        <Svg
          width={props.size}
          height={props.size}
          viewBox="0 0 72 72"
          {...props}
        >
          <Defs>
            <ClipPath id="a">
              <Circle
                data-name="\uD0C0\uC6D0 114-2"
                cx={36}
                cy={36}
                r={36}
                transform="translate(-.444 -.443)"
                fill="none"
              />
            </ClipPath>
            <LinearGradient
              id="b"
              y1={0.5}
              x2={1}
              y2={0.5}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0.078} stopColor="#78b8f0" />
              <Stop offset={0.917} stopColor="#b2f0e4" />
            </LinearGradient>
          </Defs>
          <G data-name="\uADF8\uB8F9 6867">
            <G
              data-name="\uADF8\uB8F9 6866"
              transform="translate(-1094.266 232.093) translate(1094.709 -231.65)"
              clipPath="url(#a)"
            >
              <G data-name="\uADF8\uB8F9 4461">
                <G data-name="\uADF8\uB8F9 6862">
                  <Circle
                    data-name="\uD0C0\uC6D0 114-2"
                    cx={36}
                    cy={36}
                    r={36}
                    transform="translate(-.444 -.443)"
                    fill="url(#b)"
                  />
                </G>
              </G>
              <G
                data-name="\uADF8\uB8F9 6865"
                transform="translate(3.616 8.538)"
              >
                <Path
                  data-name="\uD328\uC2A4 10085"
                  d="M1154.928-172.715h-54.668l2.844-31.467a21.412 21.412 0 011.2-7.126 21.719 21.719 0 0120.519-14.578h5.541a21.733 21.733 0 0120.519 14.578 21.8 21.8 0 011.2 7.126z"
                  transform="translate(-1095.652 225.887)"
                  fill="#120f0f"
                />
                <Path
                  data-name="\uD328\uC2A4 10086"
                  d="M1139.824-204.859v25.759h-20.045v-23.512h-1.879a1.41 1.41 0 01-1.407-1.422 1.4 1.4 0 011.407-1.407h1.881v-17.2h2.267a17.783 17.783 0 0117.776 17.782z"
                  transform="translate(-1087.837 227.452)"
                  fill="#fff6f5"
                />
                <Path
                  data-name="\uD328\uC2A4 10087"
                  d="M1121.936-204.029a1.41 1.41 0 001.407 1.422h1.881v23.507h-20.044v-25.764a17.773 17.773 0 0117.778-17.778h2.266v17.2h-1.881a1.4 1.4 0 00-1.407 1.413z"
                  transform="translate(-1093.283 227.452)"
                  fill="#fed1cc"
                />
                <Path
                  data-name="\uD328\uC2A4 10088"
                  d="M34.272 28.838a2.328 2.328 0 01-2.336 2.32 2.328 2.328 0 01-2.335-2.32"
                  fill="none"
                  stroke="#ff9d92"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.439}
                />
                <G
                  data-name="\uADF8\uB8F9 6863"
                  transform="translate(22.407 18.586)"
                  fill="#120f0f"
                >
                  <Circle
                    data-name="\uD0C0\uC6D0 820"
                    cx={1.546}
                    cy={1.546}
                    r={1.546}
                  />
                  <Circle
                    data-name="\uD0C0\uC6D0 821"
                    cx={1.546}
                    cy={1.546}
                    r={1.546}
                    transform="translate(15.975)"
                  />
                </G>
                <Path
                  data-name="\uD328\uC2A4 10089"
                  d="M1149.569-211.309c-.726.133-1.482.252-2.252.356q-1.267.178-2.578.356c-1.659.193-3.378.37-5.141.519-4.193.341-8.667.533-13.319.533-4.815 0-9.452-.207-13.778-.578a112.68 112.68 0 01-4.7-.489 89.928 89.928 0 01-3.037-.415c-.607-.074-1.2-.178-1.778-.281a21.719 21.719 0 0120.519-14.578h5.541a21.734 21.734 0 0120.523 14.577z"
                  transform="translate(-1094.338 225.887)"
                  fill="#120f0f"
                />
                <Path
                  data-name="\uD328\uC2A4 10090"
                  d="M1129.166-194.13v48.149A32.006 32.006 0 011097.15-178a31.753 31.753 0 015.822-18.4 139.345 139.345 0 0026.119 2.267z"
                  transform="translate(-1097.15 240.087)"
                  fill="#912b23"
                />
                <Path
                  data-name="\uD328\uC2A4 10091"
                  d="M1150.776-177.987a32.006 32.006 0 01-32.016 32.016v-48.149a137.131 137.131 0 0026.178-2.3 31.823 31.823 0 015.838 18.433z"
                  transform="translate(-1086.744 240.077)"
                  fill="#e5625c"
                />
                <Path
                  data-name="\uD328\uC2A4 10092"
                  d="M1105.679-201.593a4.573 4.573 0 01-4.572-4.572 4.571 4.571 0 014.572-4.571z"
                  transform="translate(-1095.245 233.183)"
                  fill="#fed1cc"
                />
                <Path
                  data-name="\uD328\uC2A4 10093"
                  d="M1132.887-210.735a4.57 4.57 0 014.572 4.571 4.572 4.572 0 01-4.572 4.572z"
                  transform="translate(-1079.942 233.183)"
                  fill="#fff6f5"
                />
                <G
                  data-name="\uADF8\uB8F9 6864"
                  transform="translate(16.217 21.678)"
                >
                  <Circle
                    data-name="\uD0C0\uC6D0 822"
                    cx={3.607}
                    cy={3.607}
                    r={3.607}
                    transform="translate(24.384)"
                    fill="#fbc9c0"
                  />
                  <Circle
                    data-name="\uD0C0\uC6D0 823"
                    cx={3.607}
                    cy={3.607}
                    r={3.607}
                    fill="#fcaba1"
                  />
                </G>
                <Path
                  data-name="\uC0AC\uAC01\uD615 4518"
                  d="M0 0h7.73v57.4H5.218A5.218 5.218 0 010 52.187V0z"
                  transform="translate(10.434 11.479)"
                  fill="#120f0f"
                />
                <Path
                  data-name="\uC0AC\uAC01\uD615 4519"
                  d="M0 0h7.73v52.187A5.218 5.218 0 012.512 57.4H0V0z"
                  transform="translate(45.254 11.479)"
                  fill="#120f0f"
                />
                <Path
                  data-name="\uC120 753"
                  transform="translate(32.016 44.816)"
                  fill="none"
                  d="M0 1.141L0 0"
                />
              </G>
            </G>
          </G>
        </Svg>
      )}
      {props.type === 0 && (
        <Svg
          width={props.size}
          height={props.size}
          viewBox="0 0 72 72"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="a"
              y1={0.5}
              x2={1}
              y2={0.5}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0.078} stopColor="#ff85b4" />
              <Stop offset={0.917} stopColor="#ffcdbe" />
            </LinearGradient>
            <ClipPath id="b">
              <Circle
                data-name="\uD0C0\uC6D0 114-2"
                cx={36}
                cy={36}
                r={36}
                transform="translate(-.118 -.118)"
                fill="url(#a)"
              />
            </ClipPath>
          </Defs>
          <G
            data-name="\uADF8\uB8F9 6840"
            transform="translate(-1212.067 231.683)"
          >
            <Circle
              data-name="\uD0C0\uC6D0 114-2"
              cx={36}
              cy={36}
              r={36}
              transform="translate(1212.067 -231.683)"
              fill="url(#a)"
            />
            <G
              data-name="\uADF8\uB8F9 6839"
              transform="translate(1212.185 -231.565)"
              clipPath="url(#b)"
            >
              <Path
                data-name="\uD328\uC2A4 10020"
                d="M1266.891-185.174h-43.645a5.039 5.039 0 01-4.979-5.806l1.989-12.916a21.708 21.708 0 011.216-7.22 22.007 22.007 0 0120.791-14.771h5.614a22.021 22.021 0 0120.791 14.771 22.087 22.087 0 011.216 7.22l1.988 12.916a5.039 5.039 0 01-4.981 5.806z"
                transform="translate(-1209.185 234.393)"
                fill="#f19911"
              />
              <Path
                data-name="\uD328\uC2A4 10021"
                d="M1257.524-204.624v26.1h-20.31v-23.823h-1.906a1.429 1.429 0 01-1.426-1.441 1.416 1.416 0 011.426-1.426h1.906v-17.428h2.3a18.018 18.018 0 0118.01 18.018z"
                transform="translate(-1201.33 236.021)"
                fill="#fff6f5"
              />
              <Path
                data-name="\uD328\uC2A4 10022"
                d="M1239.55-203.783a1.429 1.429 0 001.426 1.441h1.906v23.823h-20.31v-26.1a18.008 18.008 0 0118.013-18.013h2.3v17.428h-1.906a1.416 1.416 0 00-1.429 1.421z"
                transform="translate(-1206.998 236.021)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10023"
                d="M38.248 37.725a2.358 2.358 0 01-2.366 2.351 2.359 2.359 0 01-2.367-2.351"
                fill="none"
                stroke="#ff9d92"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.439}
              />
              <G
                data-name="\uADF8\uB8F9 6837"
                transform="translate(26.223 27.338)"
                fill="#120f0f"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 794"
                  cx={1.566}
                  cy={1.566}
                  r={1.566}
                />
                <Circle
                  data-name="\uD0C0\uC6D0 795"
                  cx={1.566}
                  cy={1.566}
                  r={1.566}
                  transform="translate(16.186)"
                />
              </G>
              <Path
                data-name="\uD328\uC2A4 10024"
                d="M1246.981-194.1v48.786a32.429 32.429 0 01-32.439-32.439 32.172 32.172 0 015.9-18.644 141.187 141.187 0 0026.464 2.3z"
                transform="translate(-1211.022 249.17)"
                fill="#9431e4"
              />
              <Path
                data-name="\uD328\uC2A4 10025"
                d="M1268.591-177.743a32.429 32.429 0 01-32.439 32.439v-48.786a138.946 138.946 0 0026.525-2.327 32.244 32.244 0 015.914 18.674z"
                transform="translate(-1200.193 249.16)"
                fill="#a95ae9"
              />
              <Path
                data-name="\uD328\uC2A4 10026"
                d="M1223.13-201.472a4.632 4.632 0 01-4.631-4.632 4.63 4.63 0 014.631-4.631z"
                transform="translate(-1209.039 241.985)"
                fill="#fed1cc"
              />
              <Path
                data-name="\uD328\uC2A4 10027"
                d="M1250.279-210.735a4.631 4.631 0 014.631 4.631 4.632 4.632 0 01-4.631 4.632z"
                transform="translate(-1193.114 241.985)"
                fill="#fff6f5"
              />
              <G
                data-name="\uADF8\uB8F9 6838"
                transform="translate(19.95 30.47)"
              >
                <Circle
                  data-name="\uD0C0\uC6D0 796"
                  cx={3.655}
                  cy={3.655}
                  r={3.655}
                  transform="translate(24.706)"
                  fill="#fbc9c0"
                />
                <Circle
                  data-name="\uD0C0\uC6D0 797"
                  cx={3.655}
                  cy={3.655}
                  r={3.655}
                  fill="#fcaba1"
                />
              </G>
              <Path
                data-name="\uC0AC\uAC01\uD615 4512"
                d="M0 0h7.832v28.174H5.218A5.218 5.218 0 010 22.957V0z"
                transform="translate(14.091 21.795)"
                fill="#f19911"
              />
              <Path
                data-name="\uC0AC\uAC01\uD615 4513"
                d="M0 0h7.832v22.957a5.218 5.218 0 01-5.218 5.218H0V0z"
                transform="translate(49.371 21.795)"
                fill="#f19911"
              />
              <Path
                data-name="\uC120 748"
                transform="translate(35.958 53.915)"
                fill="none"
                d="M0 1.156L0 0"
              />
              <Path
                data-name="\uD328\uC2A4 10028"
                d="M1262.409-214.75a7.374 7.374 0 01-.585 2.882 7.369 7.369 0 01-6.815 4.518 7.316 7.316 0 01-6.139-3.3 7.224 7.224 0 01-1.216-3.453 4.471 4.471 0 01-.045-.645v-2.522a.257.257 0 00-.015-.105 2.449 2.449 0 00-2.447-2.357 2.464 2.464 0 00-2.462 2.417 2.464 2.464 0 00-2.462-2.417 2.441 2.441 0 00-2.432 2.327.412.412 0 00-.015.135v2.522a4.543 4.543 0 01-.045.645 7.119 7.119 0 01-1.336 3.618 7.326 7.326 0 01-6.034 3.137 7.413 7.413 0 01-6.53-3.918 7.347 7.347 0 01-.871-3.483 7.492 7.492 0 01.931-3.618 7.419 7.419 0 016.47-3.8 7.943 7.943 0 012.177.315v-1.848h21.151v1.651a7.718 7.718 0 011.321-.12 7.37 7.37 0 012.462.42 7.467 7.467 0 014.083 3.513 6.9 6.9 0 01.751 2.342 5.77 5.77 0 01.103 1.144z"
                transform="translate(-1206.803 235.49)"
                fill="#f19911"
              />
              <Path
                data-name="\uD328\uC2A4 10029"
                d="M1232.8-217.092a4.507 4.507 0 00.045-.645v.645z"
                transform="translate(-1201.873 238.477)"
                fill="#f19911"
              />
              <Path
                data-name="\uD328\uC2A4 10030"
                d="M1239.425-217.092h-.045v-.645a4.506 4.506 0 00.045.645z"
                transform="translate(-1198.576 238.477)"
                fill="#f19911"
              />
              <Path
                data-name="\uD328\uC2A4 10031"
                d="M1241.009-218.7c-1.4.045-2.792.06-4.218.06h-.691a2.464 2.464 0 012.462-2.417 2.449 2.449 0 012.447 2.357z"
                transform="translate(-1200.219 236.813)"
                fill="#e86304"
              />
              <Path
                data-name="\uD328\uC2A4 10032"
                d="M1237.739-218.64h-4.908a2.464 2.464 0 012.462-2.417 2.391 2.391 0 012.446 2.417z"
                transform="translate(-1201.858 236.813)"
                fill="#e86304"
              />
            </G>
          </G>
        </Svg>
      )}
    </View>
  );
}

export default MainIcon;
