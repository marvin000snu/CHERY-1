import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Rect, Text, TSpan, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function WeakTutorialModal(props) {
  const width = props.size ? props.size * 0.536 : 309;
  const height = props.size ? props.size * 1 : 576;
  return (
    <Svg width={width} height={height} viewBox="0 0 309 577" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H309V577H0z" />
        </ClipPath>
        <ClipPath id="b">
          <Path fill="#5471ff" d="M0 0H19.999V16.316H0z" />
        </ClipPath>
      </Defs>
      <G
        data-name="\uC2A4\uD06C\uB864 \uADF8\uB8F9 3"
        clipPath="url(#a)"
        style={{
          isolation: "isolate",
        }}
      >
        <G data-name="\uADF8\uB8F9 12410" transform="translate(-33 -112)">
          <Rect data-name="\uC0AC\uAC01\uD615 9050" width={309} height={520} rx={12} transform="translate(33 169)" fill="#fdfdfd" />
          <Text transform="translate(77.453 674.836)" fill="#bbc2cf" fontSize={9} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={-4.14} y={0}>
              {"\uD648"}
            </TSpan>
          </Text>
          <G data-name="\uADF8\uB8F9 12375" fill="#bbc2cf">
            <Path data-name="\uD328\uC2A4 6056" d="M1243.051-314.938c-.3-.046-.53-.062-.754-.121a1.482 1.482 0 01-.753-2.41q2.829-3.07 5.7-6.1a2 2 0 012.958 0q2.871 3.031 5.7 6.105a1.472 1.472 0 01-.716 2.391 7.151 7.151 0 01-.792.139v.489c0 1.556.006 3.112 0 4.667a1.74 1.74 0 01-2.178 1.819 1.577 1.577 0 01-1.364-1.633c-.009-1.556 0-3.112 0-4.667v-.706h-4.212c-.01.235-.028.449-.029.662 0 1.525-.036 3.05.01 4.574a1.7 1.7 0 01-1.749 1.82 1.7 1.7 0 01-1.8-1.779c-.021-1.478-.005-2.956-.005-4.434z" transform="translate(70.006 646.888) translate(-1241.172 324.224)" />
            <Path data-name="\uD328\uC2A4 6057" d="M1367.244-322.412h1.07a.508.508 0 01.562.587 40.42 40.42 0 01-.121 2.229.579.579 0 01-.317.395.516.516 0 01-.442-.134q-1.117-1.152-2.192-2.343a.559.559 0 01-.116-.484.6.6 0 01.44-.247c.369-.036.744-.011 1.116-.011z" transform="translate(70.006 646.888) translate(-1354.049 322.597)" />
          </G>
          <Text transform="translate(149.374 676.836)" fill="#5471ff" fontSize={10} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-18.4} y={0}>
              {"\uD559\uC2B5\uD604\uD669"}
            </TSpan>
          </Text>
          <G data-name="\uADF8\uB8F9 6374">
            <G data-name="\uADF8\uB8F9 3490">
              <G data-name="\uADF8\uB8F9 3489" clipPath="url(#b)" fill="#5471ff" transform="translate(139.703 646.888)">
                <Path data-name="\uD328\uC2A4 5609" d="M654.867 1030.193a2.6 2.6 0 01-2.561 0l-5.8-3.556s-.523-.321-.523.406v3.551c0 1.87 3.4 3.887 7.6 3.887s7.6-2.016 7.6-3.887v-3.751c0-.583-.372-.3-.372-.3zm0 0" transform="translate(-643.609 -1018.193)" />
                <Path data-name="\uD328\uC2A4 5610" d="M627.619 899.614a.537.537 0 000-.994l-8.832-4.417a1.7 1.7 0 00-1.62 0l-8.832 4.417a.537.537 0 000 .994l8.832 5.417a1.7 1.7 0 001.62 0" transform="translate(-608 -893.999)" />
              </G>
            </G>
            <Path data-name="\uD328\uC2A4 5611" d="M893.99 1018.887v-5.473s0-.259-.15-.174a4.446 4.446 0 00-.532.33.458.458 0 00-.1.347v4.97a.146.146 0 01-.09.121.945.945 0 10.954 0 .141.141 0 01-.086-.119zm0 0" transform="translate(139.703 646.888) translate(-874.674 -1005.015)" fill="#5471ff" />
          </G>
          <Text transform="translate(223.292 676.835)" fill="#bbc2cf" fontSize={10} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={-13.8} y={0}>
              {"\uB2E8\uC5B4\uC7A5"}
            </TSpan>
          </Text>
          <G data-name="\uADF8\uB8F9 11083">
            <G data-name="\uADF8\uB8F9 11082">
              <Path data-name="\uD328\uC2A4 16241" d="M-90.708 158.272c0-.542-.007-1.084-.007-1.626v-5.119a1.31 1.31 0 011.416-1.409h13.511a1.31 1.31 0 011.277.8 1.472 1.472 0 01.1.563v13.632a1.285 1.285 0 01-1.315 1.322q-6.876 0-13.752-.005a1.127 1.127 0 01-1.048-.637c.1-.014.14.068.194.122a1.412 1.412 0 001.026.429q6.757.009 13.513 0a1.3 1.3 0 001.3-1.305v-6.566c0-.159-.045-.2-.2-.2-.877.007-1.754 0-2.631 0-.008-.16-.01-.32-.023-.479a1.139 1.139 0 00-.753-1.039 3.318 3.318 0 00-1.849-.189 1.572 1.572 0 00-1.432 1.446c-.018.128 0 .18.148.175.3-.01.6-.007.9 0a.148.148 0 00.176-.137.562.562 0 01.318-.436 1.291 1.291 0 011.05.025.406.406 0 01.095.643l-4.351-.006c-.016-.037-.035-.072-.048-.11-.362-1.019-.727-2.038-1.082-3.059a.2.2 0 00-.225-.162q-.6.013-1.2 0a.188.188 0 00-.213.154c-.074.229-.158.454-.24.68l-.9 2.5z" transform="translate(215.412 646.888) translate(90.715 -150.118)" fill="#bbc2cf" />
              <Path data-name="\uD328\uC2A4 16242" d="M-90.707 171.759l3.753.007c-.013.045-.024.09-.04.134q-.5 1.415-1.011 2.829c-.042.116-.057.179.107.174q.551-.015 1.1 0c.13 0 .172-.053.206-.162.106-.337.226-.671.331-1.009a.2.2 0 01.226-.164q1.023.01 2.046 0a.2.2 0 01.222.167c.1.346.216.688.318 1.034a.16.16 0 00.185.134c.374-.006.749-.009 1.123 0 .173 0 .2-.035.14-.2-.353-.98-.695-1.963-1.04-2.945l4.351.006a.464.464 0 01-.314.159c-.421.071-.847.121-1.265.208a1.448 1.448 0 00-1.247 1.8 1.176 1.176 0 00.537.855 1.749 1.749 0 001.464.189 2.332 2.332 0 00.964-.608c.024.13.046.241.065.352a.192.192 0 00.23.184c.341-.013.682 0 1.023-.006.058 0 .144.04.165-.06a.141.141 0 00-.072-.168.381.381 0 01-.168-.345 45.807 45.807 0 01-.014-2.568h2.631c.159 0 .2.044.2.2v6.566a1.3 1.3 0 01-1.3 1.305h-13.513a1.412 1.412 0 01-1.026-.429c-.054-.054-.1-.136-.194-.122 0-.041-.009-.072-.054-.082a1.043 1.043 0 01-.143-.554q-.005-3.419 0-6.838a.287.287 0 01.014-.043z" transform="translate(215.412 646.888) translate(90.714 -163.605)" fill="#d9dee6" />
              <Path data-name="\uD328\uC2A4 16243" d="M-77.133 168.763l.551-1.719a.612.612 0 01.06-.089l.566 1.807z" transform="translate(215.412 646.888) translate(82.249 -160.614)" fill="#bbc2cf" />
              <Path data-name="\uD328\uC2A4 16244" d="M-77.482 171.754h1.182c.061.19.118.382.184.569.033.093.023.13-.087.128h-1.379c-.105 0-.127-.035-.09-.131.064-.187.125-.377.19-.566z" transform="translate(215.412 646.888) translate(82.598 -163.605)" fill="#d9dee6" />
              <Path data-name="\uD328\uC2A4 16245" d="M-61.316 173.948a4.271 4.271 0 01-.029.771 1.046 1.046 0 01-1.294.753.5.5 0 01-.371-.449.6.6 0 01.287-.652 2.151 2.151 0 01.689-.2 2.06 2.06 0 00.718-.223z" transform="translate(215.412 646.888) translate(73.449 -164.972)" fill="#d9dee7" />
            </G>
          </G>
          <G data-name="\uADF8\uB8F9 12378" fill="#bbc2cf">
            <Text transform="translate(275.585 646.888) translate(18 29.951)" fontSize={10} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
              <TSpan x={-18.4} y={0}>
                {"\uB9C8\uC774\uCCB4\uB9AC"}
              </TSpan>
            </Text>
            <G data-name="\uADF8\uB8F9 11133">
              <Path data-name="\uD328\uC2A4 10823" d="M124.839 108.13a4.026 4.026 0 01-.532 3.494 3.546 3.546 0 01-.249.351 4.233 4.233 0 01-3.08-2.43 4.882 4.882 0 01.7-4.061 3.983 3.983 0 01.476.16 4.57 4.57 0 012.685 2.486z" transform="translate(275.585 646.888) translate(11.421) translate(-116.399 -105.483)" />
              <Path data-name="\uD328\uC2A4 10824" d="M132.572 117.019a5.7 5.7 0 01-5.006-.132 4.7 4.7 0 01-.537-.288s.148-3.354 2.873-4.759 5.835.27 5.835.27a5.711 5.711 0 01-.142.7 6.478 6.478 0 01-3.023 4.209z" transform="translate(275.585 646.888) translate(11.421) translate(-118.973 -107.869)" />
              <Path data-name="\uD328\uC2A4 10825" d="M123.884 122.228a3.5 3.5 0 00-3.546-3.45 3.5 3.5 0 00-7 .1l.075 5.442a1.554 1.554 0 001.575 1.532l5.442-.075a3.5 3.5 0 003.454-3.549z" transform="translate(275.585 646.888) translate(11.421) translate(-113.341 -109.529)" />
            </G>
          </G>
          <Path data-name="\uC120 1497" transform="translate(33 638.5)" fill="none" stroke="#dbdcdc" strokeWidth={1} d="M0 0L309 0" />
          <Rect data-name="\uC0AC\uAC01\uD615 8982" width={201} height={107} rx={10} transform="translate(87 279)" fill="#f5f5f5" opacity={0.6} />
          <Path data-name="\uC120 1467" transform="translate(96 356)" fill="none" stroke="#dbdcdc" strokeLinecap="round" strokeWidth={1} strokeDasharray={5} d="M0 0L184 0" />
          <Path data-name="\uC120 1468" transform="translate(96 341)" fill="none" stroke="#dbdcdc" strokeLinecap="round" strokeWidth={1} strokeDasharray={5} d="M0 0L184 0" />
          <Path data-name="\uC120 1469" transform="translate(96 328)" fill="none" stroke="#dbdcdc" strokeLinecap="round" strokeWidth={1} strokeDasharray={5} d="M0 0L184 0" />
          <Text data-name="0 h" transform="translate(95 366)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={0} y={0}>
              {"0 h"}
            </TSpan>
          </Text>
          <Text data-name="30 m" transform="translate(95 352)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={0} y={0}>
              {"30 m"}
            </TSpan>
          </Text>
          <Text data-name="1 h" transform="translate(95 339)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={0} y={0}>
              {"1 h"}
            </TSpan>
          </Text>
          <Text data-name="2 h" transform="translate(95 326)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={0} y={0}>
              {"2 h"}
            </TSpan>
          </Text>
          <Path data-name="\uC120 1466" transform="translate(96 369)" fill="none" stroke="#ecf1f4" strokeWidth={1} d="M0 0L184 0" />
          <Text transform="translate(117 378)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={-1.492} y={0}>
              {"S"}
            </TSpan>
          </Text>
          <Text transform="translate(143 378)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={-2.03} y={0}>
              {"M"}
            </TSpan>
          </Text>
          <Text transform="translate(168 378)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={-1.497} y={0}>
              {"T"}
            </TSpan>
          </Text>
          <Text transform="translate(194 378)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={-2.195} y={0}>
              {"W"}
            </TSpan>
          </Text>
          <Text data-name="T" transform="translate(220 378)" fill="#5471ff" fontSize={5} fontFamily="NotoSansCJKkr-Black, Noto Sans CJK KR" fontWeight={800}>
            <TSpan x={-1.6} y={0}>
              {"T"}
            </TSpan>
          </Text>
          <Text transform="translate(245 378)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={-1.38} y={0}>
              {"F"}
            </TSpan>
          </Text>
          <Text data-name="S" transform="translate(270 378)" fill="#909398" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={-1.492} y={0}>
              {"S"}
            </TSpan>
          </Text>
          <Path data-name="\uC0AC\uAC01\uD615 8876" d="M3 0h3.607a3 3 0 013 3v26.888H0V3a3 3 0 013-3z" transform="translate(112.512 338.86)" fill="#d3e4ff" />
          <Path data-name="\uC0AC\uAC01\uD615 8878" d="M3 0h3.716a3 3 0 013 3v4.929H0V3a3 3 0 013-3z" transform="translate(137.95 361.054)" fill="#d3e4ff" />
          <Path data-name="\uC0AC\uAC01\uD615 8883" d="M3 0h3.716a3 3 0 013 3v24.143H0V3a3 3 0 013-3z" transform="translate(189.094 341.84)" fill="#d3e4ff" />
          <Path data-name="\uC0AC\uAC01\uD615 8879" d="M3 0h3.716a3 3 0 013 3v10.8H0V3a3 3 0 013-3z" transform="translate(163.522 355.183)" fill="#d3e4ff" />
          <Path data-name="\uC0AC\uAC01\uD615 8881" d="M3 0h3.716a3 3 0 013 3v29.791H0V3a3 3 0 013-3z" transform="translate(214.666 336.191)" fill="#5471ff" />
          <Path data-name="\uC0AC\uAC01\uD615 8885" d="M3 0h3.716a3 3 0 013 3v22.432H0V3a3 3 0 013-3z" transform="translate(240.253 343.551)" fill="#d3e4ff" />
          <Path data-name="\uC0AC\uAC01\uD615 8877" d="M3 0h3.607a3 3 0 013 3v29.557H0V3a3 3 0 013-3z" transform="translate(265.69 336.191)" fill="#d3e4ff" />
          <Text data-name="1 h 21 m" transform="translate(185 296)" fill="#1b2c49" fontSize={10} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
            <TSpan x={-19.74} y={0}>
              {"1 h 21 m"}
            </TSpan>
          </Text>
          <Text transform="translate(185 311)" fill="#909398" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-11.441} y={0}>
              {"TODAY"}
            </TSpan>
          </Text>
          <G data-name="\uADF8\uB8F9 11472">
            <G data-name="\uADF8\uB8F9 11467">
              <Path data-name="\uD328\uC2A4 16412" d="M1119.3 161.041a20.22 20.22 0 01-19.638-15.775 2.135 2.135 0 014.171-.916 15.838 15.838 0 1015.467-19.25 2.135 2.135 0 010-4.27 20.106 20.106 0 110 40.213z" transform="translate(115.5 466.792) translate(14.083 21.257) translate(-1099.611 -120.828)" fill="#005088" />
            </G>
            <G data-name="\uADF8\uB8F9 11468">
              <Path data-name="\uD328\uC2A4 16413" d="M1128.865 160.152a12.961 12.961 0 01-7.894-2.651 2.135 2.135 0 112.58-3.4 8.721 8.721 0 005.314 1.784 8.806 8.806 0 000-17.613 2.135 2.135 0 110-4.27 13.076 13.076 0 010 26.152z" transform="translate(115.5 466.792) translate(25.032 28.287) translate(-1120.126 -134)" fill="#9791de" />
            </G>
            <G data-name="\uADF8\uB8F9 11469">
              <Path data-name="\uD328\uC2A4 16414" d="M1107 162.767a33.776 33.776 0 01-28-52.655 2.135 2.135 0 113.538 2.391A29.5 29.5 0 101107 99.494a2.135 2.135 0 010-4.27 33.772 33.772 0 010 67.543z" transform="translate(115.5 466.792) translate(0 7.592) translate(-1073.224 -95.224)" fill="#ffc8c8" />
            </G>
            <G data-name="\uADF8\uB8F9 11470">
              <Path data-name="\uD328\uC2A4 16415" d="M1123.387 163.727a41.289 41.289 0 01-13.576-2.28 2.135 2.135 0 011.4-4.033 37.1 37.1 0 1012.175-72.144 2.135 2.135 0 110-4.27 41.363 41.363 0 010 82.727z" transform="translate(115.5 466.792) translate(18.762) translate(-1108.377 -81)" fill="#f5948d" />
            </G>
            <G data-name="\uADF8\uB8F9 11471">
              <Path data-name="\uD328\uC2A4 16416" d="M1150.872 155.894a2.135 2.135 0 01-1.394-3.753 22.763 22.763 0 00-14.843-40.021 2.135 2.135 0 110-4.27 27.033 27.033 0 0117.629 47.526 2.126 2.126 0 01-1.392.518z" transform="translate(115.5 466.792) translate(31.637 14.331) translate(-1132.5 -107.851)" fill="#8ba9d4" />
            </G>
          </G>
          <G transform="translate(33 112)" filter="url(#c)">
            <G data-name="\uC0AC\uAC01\uD615 9069" transform="translate(109 77)" fill="#fff" stroke="#dedafd" strokeWidth={1.5}>
              <Path stroke="none" d="M0 0H91V32H0z" />
              <Path fill="none" d="M0.75 0.75H90.25V31.25H0.75z" />
            </G>
          </G>
          <G data-name="\uD0C0\uC6D0 1985" transform="translate(55.414 447.696)" fill="#f8f8f8" stroke="#dbdcdc" strokeWidth={1}>
            <Circle cx={21.053} cy={21.053} r={21.053} stroke="none" />
            <Circle cx={21.053} cy={21.053} r={20.553} fill="none" />
          </G>
          <G data-name="\uD0C0\uC6D0 1988" transform="translate(55.414 493.63)" fill="#f8f8f8" stroke="#dbdcdc" strokeWidth={1}>
            <Circle cx={21.053} cy={21.053} r={21.053} stroke="none" />
            <Circle cx={21.053} cy={21.053} r={20.553} fill="none" />
          </G>
          <G data-name="\uD0C0\uC6D0 1989" transform="translate(55.48 539.563)" fill="#f8f8f8" stroke="#dbdcdc" strokeWidth={1}>
            <Circle cx={21.053} cy={21.053} r={21.053} stroke="none" />
            <Circle cx={21.053} cy={21.053} r={20.553} fill="none" />
          </G>
          <Text data-name="1397 \uBB38\uD56D" transform="translate(76.998 477.55)" fill="#1b2c49" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.03em">
            <TSpan x={-14.844} y={0}>
              {"1397"}
            </TSpan>
            <TSpan y={0} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              {" \uBB38\uD56D"}
            </TSpan>
          </Text>
          <Text data-name="\uC804\uCCB4 \uBB38\uD56D" transform="translate(76.707 464.721)" fill="#1b2c49" fontSize={6} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500} letterSpacing="-0.03em">
            <TSpan x={-11.355} y={0}>
              {"\uC804\uCCB4 \uBB38\uD56D"}
            </TSpan>
          </Text>
          <Text data-name="58 \uBB38\uD56D" transform="translate(76.451 523.484)" fill="#1b2c49" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.03em">
            <TSpan x={-10.931} y={0}>
              {"58"}
            </TSpan>
            <TSpan y={0} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              {" \uBB38\uD56D"}
            </TSpan>
          </Text>
          <Text data-name="\uC774\uBC88\uC8FC \uBB38\uD56D" transform="translate(75.998 510.655)" fill="#1b2c49" fontSize={6} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500} letterSpacing="-0.03em">
            <TSpan x={-14.025} y={0}>
              {"\uC774\uBC88\uC8FC \uBB38\uD56D"}
            </TSpan>
          </Text>
          <Text data-name="34H56M" transform="translate(77.011 569.521)" fill="#1b2c49" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.03em">
            <TSpan x={-13.216} y={0}>
              {"34"}
            </TSpan>
            <TSpan y={0} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              {"H"}
            </TSpan>
            <TSpan y={0}>{"56"}</TSpan>
            <TSpan y={0} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              {"M"}
            </TSpan>
          </Text>
          <Text data-name="\uC774\uBC88\uC8FC \uC2DC\uAC04" transform="translate(76.435 556.134)" fill="#1b2c49" fontSize={6} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500} letterSpacing="-0.05em">
            <TSpan x={-13.725} y={0}>
              {"\uC774\uBC88\uC8FC \uC2DC\uAC04"}
            </TSpan>
          </Text>
          <G data-name="\uC0AC\uAC01\uD615 8123" transform="translate(205 459)" fill="#fff" stroke="#dbdcdc" strokeWidth={1}>
            <Rect width={113} height={16} rx={8} stroke="none" />
            <Rect x={0.5} y={0.5} width={112} height={15} rx={7.5} fill="none" />
          </G>
          <G data-name="\uC0AC\uAC01\uD615 8413" transform="translate(205 479)" fill="#fff" stroke="#dbdcdc" strokeWidth={1}>
            <Rect width={113} height={16} rx={8} stroke="none" />
            <Rect x={0.5} y={0.5} width={112} height={15} rx={7.5} fill="none" />
          </G>
          <G data-name="\uC0AC\uAC01\uD615 8414" transform="translate(205 499)" fill="#fff" stroke="#dbdcdc" strokeWidth={1}>
            <Rect width={113} height={17} rx={8.5} stroke="none" />
            <Rect x={0.5} y={0.5} width={112} height={16} rx={8} fill="none" />
          </G>
          <G data-name="\uC0AC\uAC01\uD615 8415" transform="translate(205 520)" fill="#fff" stroke="#dbdcdc" strokeWidth={1}>
            <Rect width={113} height={16} rx={8} stroke="none" />
            <Rect x={0.5} y={0.5} width={112} height={15} rx={7.5} fill="none" />
          </G>
          <G data-name="\uC0AC\uAC01\uD615 8538" transform="translate(205 540)" fill="#fff" stroke="#dbdcdc" strokeWidth={1}>
            <Rect width={113} height={16} rx={8} stroke="none" />
            <Rect x={0.5} y={0.5} width={112} height={15} rx={7.5} fill="none" />
          </G>
          <Text data-name="23\uBB38\uD56D" transform="translate(314 470)" fill="#ad9e81" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-21.126} y={0}>
              {"23\uBB38\uD56D"}
            </TSpan>
          </Text>
          <Text data-name="23\uBB38\uD56D" transform="translate(314 490)" fill="#ad9e81" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-21.126} y={0}>
              {"23\uBB38\uD56D"}
            </TSpan>
          </Text>
          <Text data-name="23\uBB38\uD56D" transform="translate(314 510)" fill="#ad9e81" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-21.126} y={0}>
              {"23\uBB38\uD56D"}
            </TSpan>
          </Text>
          <Text data-name="23\uBB38\uD56D" transform="translate(314 531)" fill="#ad9e81" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-21.126} y={0}>
              {"23\uBB38\uD56D"}
            </TSpan>
          </Text>
          <Text data-name="23\uBB38\uD56D" transform="translate(314 551)" fill="#ad9e81" fontSize={7} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-21.126} y={0}>
              {"23\uBB38\uD56D"}
            </TSpan>
          </Text>
          <Circle data-name="\uD0C0\uC6D0 1945" cx={2.5} cy={2.5} r={2.5} transform="translate(209 465)" fill="#f5948d" />
          <Circle data-name="\uD0C0\uC6D0 1981" cx={2.5} cy={2.5} r={2.5} transform="translate(209 485)" fill="#ffc8c8" />
          <Circle data-name="\uD0C0\uC6D0 1982" cx={2.5} cy={2.5} r={2.5} transform="translate(209 505)" fill="#8ba9d4" />
          <Circle data-name="\uD0C0\uC6D0 1983" cx={2.5} cy={2.5} r={2.5} transform="translate(209 526)" fill="#005088" />
          <Circle data-name="\uD0C0\uC6D0 1990" cx={2.5} cy={2.5} r={2.5} transform="translate(209 546)" fill="#9791de" />
          <Text data-name="CHERY \uC790\uCCB4\uBB38\uD56D" transform="translate(219 470)" fill="#1b2c49" fontSize={7} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={0} y={0}>
              {"CHERY "}
            </TSpan>
            <TSpan y={0}>{"\uC790\uCCB4\uBB38\uD56D"}</TSpan>
          </Text>
          <Text data-name="\uAD50\uC721\uD615 \uAE30\uCD9C\uBB38\uC81C [\uACE03]" transform="translate(219 490)" fill="#1b2c49" fontSize={7} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={0} y={0}>
              {"\uAD50\uC721\uD615 \uAE30\uCD9C\uBB38\uC81C [\uACE03]"}
            </TSpan>
          </Text>
          <Text data-name="\uAD50\uC721\uD615 \uAE30\uCD9C\uBB38\uC81C [\uACE01,2]" transform="translate(219 510)" fill="#1b2c49" fontSize={7} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={0} y={0}>
              {"\uAD50\uC721\uD615 \uAE30\uCD9C\uBB38\uC81C [\uACE01,2]"}
            </TSpan>
          </Text>
          <Text data-name="\uACBD\uCC30\uB300 \uC0AC\uAD00\uD559\uAD50" transform="translate(219 531)" fill="#1b2c49" fontSize={7} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={0} y={0}>
              {"\uACBD\uCC30\uB300 \uC0AC\uAD00\uD559\uAD50"}
            </TSpan>
          </Text>
          <Text data-name="\uD3C9\uAC00\uC6D0 \uAE30\uCD9C\uBB38\uC81C" transform="translate(219 550)" fill="#1b2c49" fontSize={6} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
            <TSpan x={0} y={0}>
              {"\uD3C9\uAC00\uC6D0 \uAE30\uCD9C\uBB38\uC81C"}
            </TSpan>
          </Text>
          <Text transform="translate(54 247)" fill="#1b2c49" fontSize={15} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={0} y={0}>
              {"\uD559\uC2B5\uAE30\uB85D"}
            </TSpan>
          </Text>
          <Path data-name="\uC0AC\uAC01\uD615 9066" transform="translate(96 254)" fill="#dedafd" d="M0 0H62V16H0z" />
          <Path data-name="\uC0AC\uAC01\uD615 9076" transform="translate(163 254)" fill="#dedafd" d="M0 0H62V16H0z" />
          <Path data-name="\uC0AC\uAC01\uD615 9077" transform="translate(230 254)" fill="#dedafd" d="M0 0H32V16H0z" />
          <Text data-name="\uB098\uC758 \uD559\uC2B5\uD604\uD669" transform="translate(54 410)" fill="#1b2c49" fontSize={15} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={0} y={0}>
              {"\uB098\uC758 \uD559\uC2B5\uD604\uD669"}
            </TSpan>
          </Text>
          <Text data-name="CHERY \uBA58\uD1A0" transform="translate(54 609)" fill="#1b2c49" fontSize={15} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={0} y={0}>
              {"CHERY "}
            </TSpan>
            <TSpan y={0}>{"\uBA58\uD1A0"}</TSpan>
          </Text>
          <Text data-name="\uD559\uC2B5\uAE30\uB85D, \uB098\uC758 \uD559\uC2B5\uD604\uD669, CHERY \uBA58\uD1A0 \uBA54\uB274\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." transform="translate(342 128)" fill="#dedafd" fontSize={14} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-267.26} y={0}>
              {"\uD559\uC2B5\uAE30\uB85D, \uB098\uC758 \uD559\uC2B5\uD604\uD669, "}
            </TSpan>
            <TSpan y={0}>{"CHERY "}</TSpan>
            <TSpan y={0}>{"\uBA58\uD1A0 "}</TSpan>
            <TSpan y={0} fill="#fff" fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              {"\uBA54\uB274\uB97C "}
            </TSpan>
            <TSpan fill="#fff" fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              <TSpan x={-113.512} y={20}>
                {"\uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}
              </TSpan>
            </TSpan>
          </Text>
          <Text data-name="\uD559\uC2B5\uD604\uD669" transform="translate(187.5 212.987)" fill="#1b2c49" fontSize={20} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-36.8} y={0}>
              {"\uD559\uC2B5\uD604\uD669"}
            </TSpan>
          </Text>
          <G data-name="\uADF8\uB8F9 12399" transform="rotate(42 223.248 1.697)" fill="none" stroke="#dedafd" strokeLinecap="round" strokeWidth={1.5}>
            <Path data-name="\uC120 1491" transform="translate(282.5 149.5)" d="M12.831 39L0 0" />
            <Path data-name="\uD328\uC2A4 17513" d="M280.762 154.043l1.517-5.322 4.629 3.164" strokeLinejoin="round" />
          </G>
          <Text data-name="\uADF8\uB3D9\uC548\uC758 \uC8FC\uAC04\uD559\uC2B5\uAE30\uB85D, \uC5F0\uAC04\uD559\uC2B5\uAE30\uB85D, \uC815\uB2F5\uB960\uC744 \uD655\uC778\uD558\uC138\uC694." transform="translate(54 253)" fill="#1b2c49" fontSize={11} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
            <TSpan x={0} y={13}>
              {"\uADF8\uB3D9\uC548\uC758 "}
            </TSpan>
            <TSpan y={13} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
              {"\uC8FC\uAC04\uD559\uC2B5\uAE30\uB85D, \uC5F0\uAC04\uD559\uC2B5\uAE30\uB85D, \uC815\uB2F5\uB960"}
            </TSpan>
            <TSpan y={13}>{"\uC744 \uD655\uC778\uD558\uC138\uC694."}</TSpan>
          </Text>
          <Path data-name="\uC0AC\uAC01\uD615 9072" transform="translate(98 417)" fill="#dedafd" d="M0 0H91V16H0z" />
          <Path data-name="\uC0AC\uAC01\uD615 9073" transform="translate(164 584)" fill="#dedafd" d="M0 0H87V16H0z" />
          <Text data-name="\uADF8\uB3D9\uC548 \uD47C \uBAA8\uB4E0 \uBB38\uC81C\uB97C \uD55C \uB208\uC5D0 \uBCFC \uC218 \uC788\uC5B4\uC694." transform="translate(54 416)" fill="#1b2c49" fontSize={11} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
            <TSpan x={0} y={13}>
              {"\uADF8\uB3D9\uC548 \uD47C "}
            </TSpan>
            <TSpan y={13} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
              {"\uBAA8\uB4E0 \uBB38\uC81C\uB97C \uD55C \uB208\uC5D0"}
            </TSpan>
            <TSpan y={13}>{" \uBCFC \uC218 \uC788\uC5B4\uC694."}</TSpan>
          </Text>
          <Text data-name="SKY \uB300\uD559\uC0DD \uBA58\uD1A0\uAC00 \uACF5\uBD80\uC790\uADF9\uACFC\uB3D9\uAE30\uBD80\uC5EC\uB97C \uD574\uC918\uC694!" transform="translate(318 596)" fill="#1b2c49" fontSize={12} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
            <TSpan x={-151.98} y={0}>
              {"SKY "}
            </TSpan>
            <TSpan y={0}>{"\uB300\uD559\uC0DD \uBA58\uD1A0"}</TSpan>
            <TSpan y={0} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              {"\uAC00"}
            </TSpan>
            <TSpan y={0} />
            <TSpan y={0} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              {"\uACF5\uBD80\uC790\uADF9\uACFC"}
            </TSpan>
            <TSpan fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
              <TSpan x={-95.136} y={18}>
                {"\uB3D9\uAE30\uBD80\uC5EC\uB97C \uD574\uC918\uC694!"}
              </TSpan>
            </TSpan>
          </Text>
        </G>
      </G>
    </Svg>
  );
}

export default WeakTutorialModal;
