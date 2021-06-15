import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Text, TSpan, Rect, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function WordTutorial(props) {
  const width = props.size ? props.size * 0.536 : 309;
  const height = props.size ? props.size * 1 : 576;
  return (
    <Svg width={width} height={height} viewBox="0 0 309 589" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H309V589H0z" />
        </ClipPath>
        <ClipPath id="b">
          <Path fill="none" d="M0 0H342V589H0z" />
        </ClipPath>
        <ClipPath id="c">
          <Path fill="#bbc2cf" d="M0 0H19.999V16.316H0z" />
        </ClipPath>
      </Defs>
      <G data-name="\uADF8\uB8F9 12416">
        <G
          data-name="\uC2A4\uD06C\uB864 \uADF8\uB8F9 6"
          transform="translate(-17 -120) translate(17 120)"
          clipPath="url(#a)"
          style={{
            isolation: "isolate",
          }}
        >
          <Rect data-name="\uC0AC\uAC01\uD615 9050" width={309} height={520} rx={12} transform="translate(0 69)" fill="#fdfdfd" />
          <G data-name="\uC2A4\uD06C\uB864 \uADF8\uB8F9 4">
            <G data-name="\uADF8\uB8F9 12412" clipPath="url(#b)">
              <G data-name="\uADF8\uB8F9 12411" transform="translate(-33 -108)">
                <Text transform="translate(77.453 674.836)" fill="#bbc2cf" fontSize={9} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
                  <TSpan x={-4.14} y={0}>
                    {"\uD648"}
                  </TSpan>
                </Text>
                <G data-name="\uADF8\uB8F9 12379" fill="#bbc2cf">
                  <Path data-name="\uD328\uC2A4 6056" d="M1243.051-314.938c-.3-.046-.53-.062-.754-.121a1.482 1.482 0 01-.753-2.41q2.829-3.07 5.7-6.1a2 2 0 012.958 0q2.871 3.031 5.7 6.105a1.472 1.472 0 01-.716 2.391 7.151 7.151 0 01-.792.139v.489c0 1.556.006 3.112 0 4.667a1.74 1.74 0 01-2.178 1.819 1.577 1.577 0 01-1.364-1.633c-.009-1.556 0-3.112 0-4.667v-.706h-4.212c-.01.235-.028.449-.029.662 0 1.525-.036 3.05.01 4.574a1.7 1.7 0 01-1.749 1.82 1.7 1.7 0 01-1.8-1.779c-.021-1.478-.005-2.956-.005-4.434z" transform="translate(70.006 646.888) translate(-1241.172 324.224)" />
                  <Path data-name="\uD328\uC2A4 6057" d="M1367.244-322.412h1.07a.508.508 0 01.562.587 40.42 40.42 0 01-.121 2.229.579.579 0 01-.317.395.516.516 0 01-.442-.134q-1.117-1.152-2.192-2.343a.559.559 0 01-.116-.484.6.6 0 01.44-.247c.369-.036.744-.011 1.116-.011z" transform="translate(70.006 646.888) translate(-1354.049 322.597)" />
                </G>
                <Text transform="translate(149.374 676.836)" fill="#bbc2cf" fontSize={10} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
                  <TSpan x={-18.4} y={0}>
                    {"\uD559\uC2B5\uD604\uD669"}
                  </TSpan>
                </Text>
                <G data-name="\uADF8\uB8F9 12380">
                  <G data-name="\uADF8\uB8F9 3490">
                    <G data-name="\uADF8\uB8F9 3489" clipPath="url(#c)" fill="#bbc2cf" transform="translate(139.703 646.888)">
                      <Path data-name="\uD328\uC2A4 5609" d="M654.867 1030.193a2.6 2.6 0 01-2.561 0l-5.8-3.556s-.523-.321-.523.406v3.551c0 1.87 3.4 3.887 7.6 3.887s7.6-2.016 7.6-3.887v-3.751c0-.583-.372-.3-.372-.3zm0 0" transform="translate(-643.609 -1018.193)" />
                      <Path data-name="\uD328\uC2A4 5610" d="M627.619 899.614a.537.537 0 000-.994l-8.832-4.417a1.7 1.7 0 00-1.62 0l-8.832 4.417a.537.537 0 000 .994l8.832 5.417a1.7 1.7 0 001.62 0" transform="translate(-608 -893.999)" />
                    </G>
                  </G>
                  <Path data-name="\uD328\uC2A4 5611" d="M893.99 1018.887v-5.473s0-.259-.15-.174a4.446 4.446 0 00-.532.33.458.458 0 00-.1.347v4.97a.146.146 0 01-.09.121.945.945 0 10.954 0 .141.141 0 01-.086-.119zm0 0" transform="translate(139.703 646.888) translate(-874.674 -1005.015)" fill="#bbc2cf" />
                </G>
                <Text transform="translate(223.292 676.835)" fill="#5471ff" fontSize={10} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={-13.8} y={0}>
                    {"\uB2E8\uC5B4\uC7A5"}
                  </TSpan>
                </Text>
                <Path data-name="\uD328\uC2A4 16241" d="M-90.708 158.272c0-.542-.007-1.084-.007-1.626v-5.119a1.31 1.31 0 011.416-1.409h13.511a1.31 1.31 0 011.277.8 1.472 1.472 0 01.1.563v13.632a1.285 1.285 0 01-1.315 1.322q-6.876 0-13.752-.005a1.127 1.127 0 01-1.048-.637c.1-.014.14.068.194.122a1.412 1.412 0 001.026.429q6.757.009 13.513 0a1.3 1.3 0 001.3-1.305v-6.566c0-.159-.045-.2-.2-.2-.877.007-1.754 0-2.631 0-.008-.16-.01-.32-.023-.479a1.139 1.139 0 00-.753-1.039 3.318 3.318 0 00-1.849-.189 1.572 1.572 0 00-1.432 1.446c-.018.128 0 .18.148.175.3-.01.6-.007.9 0a.148.148 0 00.176-.137.562.562 0 01.318-.436 1.291 1.291 0 011.05.025.406.406 0 01.095.643l-4.351-.006c-.016-.037-.035-.072-.048-.11-.362-1.019-.727-2.038-1.082-3.059a.2.2 0 00-.225-.162q-.6.013-1.2 0a.188.188 0 00-.213.154c-.074.229-.158.454-.24.68l-.9 2.5z" transform="translate(306.127 496.771)" fill="#5471ff" />
                <Path data-name="\uD328\uC2A4 16242" d="M-90.707 171.759l3.753.007c-.013.045-.024.09-.04.134q-.5 1.415-1.011 2.829c-.042.116-.057.179.107.174q.551-.015 1.1 0c.13 0 .172-.053.206-.162.106-.337.226-.671.331-1.009a.2.2 0 01.226-.164q1.023.01 2.046 0a.2.2 0 01.222.167c.1.346.216.688.318 1.034a.16.16 0 00.185.134c.374-.006.749-.009 1.123 0 .173 0 .2-.035.14-.2-.353-.98-.695-1.963-1.04-2.945l4.351.006a.464.464 0 01-.314.159c-.421.071-.847.121-1.265.208a1.448 1.448 0 00-1.247 1.8 1.176 1.176 0 00.537.855 1.749 1.749 0 001.464.189 2.332 2.332 0 00.964-.608c.024.13.046.241.065.352a.192.192 0 00.23.184c.341-.013.682 0 1.023-.006.058 0 .144.04.165-.06a.141.141 0 00-.072-.168.381.381 0 01-.168-.345 45.807 45.807 0 01-.014-2.568h2.631c.159 0 .2.044.2.2v6.566a1.3 1.3 0 01-1.3 1.305h-13.513a1.412 1.412 0 01-1.026-.429c-.054-.054-.1-.136-.194-.122 0-.041-.009-.072-.054-.082a1.043 1.043 0 01-.143-.554q-.005-3.419 0-6.838a.287.287 0 01.014-.043z" transform="translate(306.126 483.283)" fill="#728aff" />
                <Path data-name="\uD328\uC2A4 16243" d="M-77.133 168.763l.551-1.719a.612.612 0 01.06-.089l.566 1.807z" transform="translate(297.661 486.275)" fill="#5471ff" />
                <Path data-name="\uD328\uC2A4 16244" d="M-77.482 171.754h1.182c.061.19.118.382.184.569.033.093.023.13-.087.128h-1.379c-.105 0-.127-.035-.09-.131.064-.187.125-.377.19-.566z" transform="translate(298.01 483.284)" fill="#728aff" />
                <Path data-name="\uD328\uC2A4 16245" d="M-61.316 173.948a4.271 4.271 0 01-.029.771 1.046 1.046 0 01-1.294.753.5.5 0 01-.371-.449.6.6 0 01.287-.652 2.151 2.151 0 01.689-.2 2.06 2.06 0 00.718-.223z" transform="translate(288.86 481.916)" fill="#728aff" />
                <G data-name="\uADF8\uB8F9 12382" fill="#bbc2cf">
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
                <Path data-name="\uC120 1498" transform="translate(33 638.5)" fill="none" stroke="#dbdcdc" strokeWidth={1} d="M0 0L309 0" />
                <G data-name="\uC0AC\uAC01\uD615 5387" transform="translate(73 565)" fill="#fff" stroke="#cdcdcd" strokeWidth={1}>
                  <Rect width={110} height={52} rx={5} stroke="none" />
                  <Rect x={0.5} y={0.5} width={109} height={51} rx={4.5} fill="none" />
                </G>
                <Rect data-name="\uC0AC\uAC01\uD615 7885" width={110} height={52} rx={5} transform="translate(192 565)" fill="#5471ff" />
                <Text data-name="Get it fixed" transform="translate(87 583)" fill="#1b2c49" fontSize={10} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                  <TSpan x={-25.675} y={12}>
                    {"Get it fixed"}
                  </TSpan>
                </Text>
                <Text data-name="\uB0A0\uCE74\uB85C\uC6B4 \uBAA8\uC11C\uB9AC" transform="translate(199 584)" fill="#fff" fontSize={10} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500} letterSpacing="-0.03em">
                  <TSpan x={-32.275} y={12}>
                    {"\uB0A0\uCE74\uB85C\uC6B4 \uBAA8\uC11C\uB9AC"}
                  </TSpan>
                </Text>
                <G data-name="\uC0AC\uAC01\uD615 5430" transform="translate(197 568)" fill="#fff" stroke="#5471ff" strokeWidth={1}>
                  <Rect width={30} height={12} rx={6} stroke="none" />
                  <Rect x={0.5} y={0.5} width={29} height={11} rx={5.5} fill="none" />
                </G>
                <Text transform="translate(212 576)" fill="#5471ff" fontSize={6} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.05em">
                  <TSpan x={-5.37} y={0}>
                    {"\uBA85\uC0AC"}
                  </TSpan>
                </Text>
                <Text transform="translate(53 511)" fill="#1b2c49" fontSize={15} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.03em">
                  <TSpan x={0} y={17}>
                    {"\uC554\uAE30\uC644\uB8CC"}
                  </TSpan>
                </Text>
                <Text data-name="\uC624\uB298 \uC2A4\uD06C\uB7A9" transform="translate(53 374)" fill="#1b2c49" fontSize={15} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.03em">
                  <TSpan x={0} y={17}>
                    {"\uC624\uB298 \uC2A4\uD06C\uB7A9"}
                  </TSpan>
                </Text>
                <G transform="translate(33 108)" filter="url(#d)">
                  <G data-name="\uC0AC\uAC01\uD615 9054" transform="translate(85 81)" fill="#fff" stroke="#dedafd" strokeWidth={1.5}>
                    <Path stroke="none" d="M0 0H135V32H0z" />
                    <Path fill="none" d="M0.75 0.75H134.25V31.25H0.75z" />
                  </G>
                </G>
                <Text data-name="\uB098\uB9CC\uC758 \uB2E8\uC5B4\uC7A5" transform="translate(185.958 212.987)" fill="#1b2c49" fontSize={20} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={-57.47} y={0}>
                    {"\uB098\uB9CC\uC758 \uB2E8\uC5B4\uC7A5"}
                  </TSpan>
                </Text>
                <Rect data-name="\uC0AC\uAC01\uD615 6935" width={133.705} height={71.83} rx={8} transform="translate(52.124 423.5)" fill="#e6ebff" />
                <Text transform="translate(119.677 458.415)" fill="#1b2c49" fontSize={12} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={-36.984} y={0}>
                    {"Bureaucracy"}
                  </TSpan>
                </Text>
                <G transform="translate(33 108)" filter="url(#e)">
                  <Rect data-name="\uC0AC\uAC01\uD615 6932" width={60.037} height={12.865} rx={5} transform="translate(56.41 368.1)" fill="#fff" />
                </G>
                <G transform="translate(33 108)" filter="url(#f)">
                  <G data-name="\uC0AC\uAC01\uD615 8854" transform="translate(128.17 319.79)" fill="#fff" stroke="#dbdcdc" strokeWidth={0.5}>
                    <Rect width={21.442} height={10.721} rx={5} stroke="none" />
                    <Rect x={0.25} y={0.25} width={20.942} height={10.221} rx={4.75} fill="none" />
                  </G>
                </G>
                <Text data-name="\uC554\uAE30 \uC644\uB8CC" transform="translate(118.825 484.928)" fill="#5471ff" fontSize={7} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500} letterSpacing="0.03em">
                  <TSpan x={-14.088} y={0}>
                    {"\uC554\uAE30 \uC644\uB8CC"}
                  </TSpan>
                </Text>
                <Text data-name="\u276F" transform="translate(179.108 435.365)" fill="#1b2c49" fontSize={7} fontFamily="ZapfDingbatsITC, '\\\\.Apple Symbols Fallback'">
                  <TSpan x={-3.562} y={0}>
                    {"\u276F"}
                  </TSpan>
                </Text>
                <Text data-name="\u276F" transform="rotate(180 82.338 215.219)" fill="#1b2c49" fontSize={7} fontFamily="ZapfDingbatsITC, '\\\\.Apple Symbols Fallback'">
                  <TSpan x={-3.562} y={0}>
                    {"\u276F"}
                  </TSpan>
                </Text>
                <Path data-name="\uC120 1462" transform="translate(171.892 429.932)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth={1} d="M0 0L0 6.433" />
                <Text data-name="\uC138 \uAC00\uC9C0 \uBA54\uB274 \uD0ED\uC744 \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." transform="translate(43 148)" fill="#dedafd" fontSize={14} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={0} y={0}>
                    {"\uC138 \uAC00\uC9C0 \uBA54\uB274 \uD0ED"}
                  </TSpan>
                  <TSpan y={0} fill="#fff" fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                    {"\uC744"}
                  </TSpan>
                  <TSpan y={0} />
                  <TSpan y={0} fill="#fff" fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                    {"\uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}
                  </TSpan>
                  <TSpan fill="#fff" fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500} />
                </Text>
                <Text data-name="\uB9DE\uCDA4\uD615 \uCD94\uCC9C" transform="translate(53 230)" fill="#1b2c49" fontSize={15} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.03em">
                  <TSpan x={0} y={17}>
                    {"\uB9DE\uCDA4\uD615 \uCD94\uCC9C"}
                  </TSpan>
                </Text>
                <Text transform="translate(58.625 108)" fill="#fff" fontSize={12} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                  <TSpan x={0} y={14}>
                    {"\uCD94\uCC9C\uB2E8\uC5B4"}
                  </TSpan>
                </Text>
                <Path data-name="\uD328\uC2A4 17443" d="M477.134 895.835c-.17-.021-.341-.039-.51-.065a11.786 11.786 0 01-1.865-.488c-.393-.128-.787-.257-1.183-.378a1.16 1.16 0 00-.327-.044h-2.067a.949.949 0 01-.943-.751 1.263 1.263 0 01-.022-.269v-4.739a.958.958 0 011.02-1.015h1.9a.282.282 0 00.23-.09c.213-.238.432-.471.638-.715.37-.439.728-.888 1.1-1.327a1.455 1.455 0 00.271-.625c.086-.355.163-.712.265-1.062a2.015 2.015 0 01.228-.487 1.092 1.092 0 011.151-.537 2.554 2.554 0 011 .306 1.785 1.785 0 01.842 1.3 3.445 3.445 0 01-.247 2.162.963.963 0 00-.033.1c.052 0 .094.009.136.009.381 0 .764.018 1.144 0a1.954 1.954 0 011.866 2.619c-.052.155-.137.3-.2.449a.37.37 0 00-.033.194 2.185 2.185 0 01-.193 1.412.455.455 0 00-.041.221 2.2 2.2 0 01-.376 1.459.4.4 0 00-.069.2 2.348 2.348 0 01-.225.987 2.135 2.135 0 01-1.726 1.151c-.044.006-.086.018-.129.028zm3.24-5.81a.777.777 0 00.2-.146 1.3 1.3 0 00.293-.939.992.992 0 00-1-.866h-2.363c-.288 0-.307-.006-.22-.289a8.6 8.6 0 01.384-1.035 2.7 2.7 0 00.256-1.7.907.907 0 00-.894-.842.611.611 0 00-.183-.01.249.249 0 00-.159.081 1.991 1.991 0 00-.19.423c-.073.256-.126.517-.182.778a2.686 2.686 0 01-.68 1.314c-.287.3-.53.647-.789.975a6.284 6.284 0 01-.969 1.044.831.831 0 01-.618.227c-.125-.013-.147.043-.147.156q.005 2.277 0 4.554c0 .044 0 .088.006.13a.158.158 0 00.043.015 3.569 3.569 0 011.327.281 16.054 16.054 0 001.9.566 9.225 9.225 0 002.279.114 1.583 1.583 0 00.374-.069 1.04 1.04 0 00.8-.961c.017-.186-.005-.376 0-.564a.176.176 0 01.048-.122 1.166 1.166 0 00.336-1.346.135.135 0 01.027-.172 1.1 1.1 0 00.318-.923 5 5 0 00-.197-.674zm-8.225 3.387a.488.488 0 00-.491-.49.5.5 0 00-.484.488.49.49 0 00.495.487.479.479 0 00.481-.485z" transform="translate(-427.216 -772.659)" fill="#fff" />
                <Text transform="translate(134.498 108)" fill="#fff" fontSize={12} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                  <TSpan x={0} y={14}>
                    {"\uC2A4\uD06C\uB7A9"}
                  </TSpan>
                </Text>
                <Path data-name="\uD328\uC2A4 14015" d="M3028.11-295.9l1.565 3.171a.389.389 0 00.293.213l3.5.509a.389.389 0 01.215.664l-2.531 2.468a.389.389 0 00-.112.344l.6 3.485a.389.389 0 01-.564.41l-3.13-1.646a.389.389 0 00-.362 0l-3.13 1.646a.389.389 0 01-.564-.41l.6-3.485a.387.387 0 00-.112-.344l-2.532-2.468a.389.389 0 01.215-.664l3.5-.509a.389.389 0 00.293-.213l1.565-3.171a.389.389 0 01.691 0z" transform="translate(-2903.283 407.163)" fill="#fff" />
                <Text data-name="\uC554\uAE30\uC644\uB8CC" transform="translate(204.641 108)" fill="#fff" fontSize={12} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                  <TSpan x={0} y={14}>
                    {"\uC554\uAE30\uC644\uB8CC"}
                  </TSpan>
                </Text>
                <G data-name="\uADF8\uB8F9 12247">
                  <G data-name="\uADF8\uB8F9 12247">
                    <Path data-name="\uD328\uC2A4 17444" d="M661.05 957.737v7.554a.738.738 0 01-.737.737h-14.576a.738.738 0 01-.737-.737v-7.554a.738.738 0 01.737-.737h.642v7.283a.182.182 0 00.236.186 13.719 13.719 0 015.923 0 .242.242 0 01.471 0 13.719 13.719 0 015.923 0 .182.182 0 00.236-.186V957h1.144a.738.738 0 01.738.737z" transform="translate(184.59 111.218) translate(0 1.756) translate(-645 -957)" fill="#fff" />
                  </G>
                  <G data-name="\uADF8\uB8F9 12248">
                    <Path data-name="\uD328\uC2A4 17445" d="M660.308 963.106a.557.557 0 01-.348-.12.567.567 0 01-.21-.448v-8.045a.7.7 0 01.527-.663 14.2 14.2 0 016.09 0 .7.7 0 01.531.664v8.045a.557.557 0 01-.7.552 13.433 13.433 0 00-5.757 0 .588.588 0 01-.133.015zm-.029-.75zm6.085 0zm-5.862-7.8v7.757a14.23 14.23 0 015.643 0v-7.758a13.44 13.44 0 00-5.645-.003z" transform="translate(184.59 111.218) translate(7.398) translate(-659.75 -953.499)" fill="#fff" />
                  </G>
                  <G data-name="\uADF8\uB8F9 12249">
                    <Path data-name="\uD328\uC2A4 17446" d="M647.558 963.106a.557.557 0 01-.348-.12.566.566 0 01-.21-.448v-8.045a.7.7 0 01.527-.663 14.2 14.2 0 016.09 0 .7.7 0 01.531.664v8.045a.557.557 0 01-.7.552 13.433 13.433 0 00-5.757 0 .588.588 0 01-.133.015zm-.029-.75zm6.085 0zm-5.862-7.8v7.757a14.23 14.23 0 015.643 0v-7.758a13.44 13.44 0 00-5.643-.003z" transform="translate(184.59 111.218) translate(1.003) translate(-647 -953.499)" fill="#fff" />
                  </G>
                </G>
                <G data-name="\uADF8\uB8F9 12387" transform="translate(-176.762 16.5)" fill="none" stroke="#dedafd" strokeLinecap="round" strokeWidth={1.5}>
                  <Path data-name="\uC120 1491" transform="translate(282.5 149.5)" d="M12.831 39L0 0" />
                  <Path data-name="\uD328\uC2A4 17513" d="M280.762 154.043l1.517-5.322 4.629 3.164" strokeLinejoin="round" />
                </G>
                <Text transform="translate(266 454)" fill="#fff" fontSize={10} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={-30.41} y={0}>
                    {"Byreaucracy"}
                  </TSpan>
                </Text>
                <Text data-name="Bureaucracy" transform="translate(202 441)" fill="#1b2c49" fontSize={9} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={0} y={10}>
                    {"Bureaucracy"}
                  </TSpan>
                </Text>
                <Text data-name="\uC694\uC2DD \uCCB4\uACC4, \uAD00\uB8CC (\uCCB4\uC81C); \uAD00\uB8CC \uAD6D\uAC00" transform="translate(202 456)" fill="#1b2c49" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
                  <TSpan x={0} y={6}>
                    {"\uC694\uC2DD \uCCB4\uACC4, \uAD00\uB8CC (\uCCB4\uC81C); \uAD00\uB8CC \uAD6D\uAC00"}
                  </TSpan>
                </Text>
                <Text data-name="the power of the state bureaucracy" transform="translate(208 470)" fill="#1b2c49" fontSize={6} fontFamily="NotoSansCJKkr-Light, Noto Sans CJK KR" fontWeight={300}>
                  <TSpan x={0} y={7}>
                    {"the power of the state "}
                  </TSpan>
                  <TSpan y={7} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                    {"bureaucracy"}
                  </TSpan>
                </Text>
                <Text data-name="\uAD6D\uAC00 \uAD00\uB8CC\uC758 \uAD8C\uB825" transform="translate(208 481)" fill="#1b2c49" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
                  <TSpan x={0} y={6}>
                    {"\uAD6D\uAC00 \uAD00\uB8CC\uC758 \uAD8C\uB825"}
                  </TSpan>
                </Text>
                <G data-name="\uC0AC\uAC01\uD615 5430" transform="translate(202 429)" fill="#fff" stroke="#5471ff" strokeWidth={0.5} opacity={0.5}>
                  <Rect width={20} height={8} rx={4} stroke="none" />
                  <Rect x={0.25} y={0.25} width={19.5} height={7.5} rx={3.75} fill="none" />
                </G>
                <Text data-name="\uBA85\uC0AC" transform="translate(212 435)" fill="#5471ff" fontSize={5} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.05em">
                  <TSpan x={-4.475} y={0}>
                    {"\uBA85\uC0AC"}
                  </TSpan>
                </Text>
                <Path data-name="\uC0AC\uAC01\uD615 8780" transform="translate(202 470)" fill="#5471ff" d="M0 0H3V20H0z" />
                <G transform="translate(33 108)" filter="url(#g)">
                  <G data-name="\uC0AC\uAC01\uD615 9062" transform="translate(264 319.79)" fill="#fff" stroke="#dbdcdc" strokeWidth={0.5}>
                    <Rect width={21.442} height={10.721} rx={5} stroke="none" />
                    <Rect x={0.25} y={0.25} width={20.942} height={10.221} rx={4.75} fill="none" />
                  </G>
                </G>
                <Text data-name="\u276F" transform="translate(314.937 435.365)" fill="#1b2c49" fontSize={7} fontFamily="ZapfDingbatsITC, '\\\\.Apple Symbols Fallback'">
                  <TSpan x={-3.562} y={0}>
                    {"\u276F"}
                  </TSpan>
                </Text>
                <Text data-name="\u276F" transform="rotate(180 150.252 215.219)" fill="#1b2c49" fontSize={7} fontFamily="ZapfDingbatsITC, '\\\\.Apple Symbols Fallback'">
                  <TSpan x={-3.562} y={0}>
                    {"\u276F"}
                  </TSpan>
                </Text>
                <Path data-name="\uC120 1500" transform="translate(307.721 429.932)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth={1} d="M0 0L0 6.433" />
                <Rect data-name="\uC0AC\uAC01\uD615 9064" width={127} height={63} rx={8} transform="translate(57 282)" fill="#e6ebff" />
                <Text transform="translate(121 316)" fill="#1b2c49" fontSize={10} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={-34.115} y={0}>
                    {"Thermometer"}
                  </TSpan>
                </Text>
                <G data-name="\uC0AC\uAC01\uD615 6935" transform="translate(189 282)" fill="#fff" stroke="#e6ebff" strokeWidth={1}>
                  <Rect width={129} height={63} rx={10} stroke="none" />
                  <Rect x={0.5} y={0.5} width={128} height={62} rx={9.5} fill="none" />
                </G>
                <Text data-name="Thermometer" transform="translate(197 297)" fill="#1b2c49" fontSize={9} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={0} y={10}>
                    {"Thermometer"}
                  </TSpan>
                </Text>
                <Text data-name="\uC628\uB3C4\uACC4, \uCCB4\uC628\uACC4" transform="translate(197 310)" fill="#1b2c49" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
                  <TSpan x={0} y={6}>
                    {"\uC628\uB3C4\uACC4, \uCCB4\uC628\uACC4"}
                  </TSpan>
                </Text>
                <Text data-name="a thermometer reading" transform="translate(203 322)" fill="#1b2c49" fontSize={6} fontFamily="NotoSansCJKkr-Light, Noto Sans CJK KR" fontWeight={300}>
                  <TSpan x={0} y={7}>
                    {"a "}
                  </TSpan>
                  <TSpan y={7} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                    {"thermometer"}
                  </TSpan>
                  <TSpan y={7}>{" reading"}</TSpan>
                </Text>
                <Text data-name="\uC628\uB3C4\uACC4 \uC2DC\uB3C4 [\uB208\uAE08]" transform="translate(203 332)" fill="#1b2c49" fontSize={5} fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR">
                  <TSpan x={0} y={6}>
                    {"\uC628\uB3C4\uACC4 \uC2DC\uB3C4 [\uB208\uAE08]"}
                  </TSpan>
                </Text>
                <G data-name="\uC0AC\uAC01\uD615 5430" transform="translate(197 287)" fill="none" stroke="#6678d1" strokeWidth={0.5}>
                  <Rect width={16} height={7} rx={3.5} stroke="none" />
                  <Rect x={0.25} y={0.25} width={15.5} height={6.5} rx={3.25} />
                </G>
                <Text data-name="\uBA85\uC0AC" transform="translate(205 292)" fill="#6678d1" fontSize={4} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700} letterSpacing="-0.05em">
                  <TSpan x={-3.58} y={0}>
                    {"\uBA85\uC0AC"}
                  </TSpan>
                </Text>
                <Path data-name="\uC0AC\uAC01\uD615 8780" transform="translate(197 322)" fill="#5471ff" d="M0 0H2V17H0z" />
                <Text data-name="\uD130\uCE58\uD574\uC11C \uB4A4\uC9D1\uAE30" transform="translate(318 353)" fill="#1b2c49" fontSize={12} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                  <TSpan x={-79.98} y={9}>
                    {"\uD130\uCE58\uD574\uC11C \uB4A4\uC9D1\uAE30"}
                  </TSpan>
                </Text>
                <G data-name="\uADF8\uB8F9 12400">
                  <G data-name="\uADF8\uB8F9 12397" fill="none" stroke="#dedafd" strokeLinecap="round" strokeWidth={1.5}>
                    <Path data-name="\uD328\uC2A4 17511" d="M162.085 284.106s15.856-13.97 28.212-1.605" />
                    <Path data-name="\uD328\uC2A4 17512" d="M186.437 282.692l4.544-.217-2.074-4.331" strokeLinejoin="round" />
                  </G>
                </G>
                <G data-name="\uADF8\uB8F9 12398" fill="none" stroke="#dedafd" strokeLinecap="round" strokeWidth={1.5}>
                  <Path data-name="\uD328\uC2A4 17511" d="M162.085 284.106s15.856-13.97 28.212-1.605" transform="scale(-1) rotate(-53 -763.068 195.19)" />
                  <Path data-name="\uD328\uC2A4 17512" d="M186.437 282.692l4.544-.217-2.074-4.331" strokeLinejoin="round" transform="scale(-1) rotate(-53 -763.068 195.19)" />
                </G>
                <Path data-name="\uC0AC\uAC01\uD615 9051" transform="translate(150 254)" fill="#dedafd" d="M0 0H100V17H0z" />
                <Path data-name="\uC0AC\uAC01\uD615 9074" transform="translate(150 397)" fill="#dedafd" d="M0 0H66V17H0z" />
                <Path data-name="\uC0AC\uAC01\uD615 9075" transform="translate(51 535)" fill="#dedafd" d="M0 0H87V17H0z" />
                <Text data-name="\uAC19\uC740 \uB4F1\uAE09\uC758 \uD559\uC0DD\uB4E4\uC774 \uAC00\uC7A5 \uB9CE\uC774 \uB2F4\uC740 \uB2E8\uC5B4\uB4E4\uC744 \uCD94\uCC9C\uD574\uB4DC\uB824\uC694." transform="translate(53 254)" fill="#1b2c49" fontSize={11} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                  <TSpan x={0} y={13}>
                    {"\uAC19\uC740 \uB4F1\uAE09\uC758 \uD559\uC0DD\uB4E4\uC774 "}
                  </TSpan>
                  <TSpan y={13} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                    {"\uAC00\uC7A5 \uB9CE\uC774 \uB2F4\uC740 \uB2E8\uC5B4\uB4E4"}
                  </TSpan>
                  <TSpan y={13}>{"\uC744 \uCD94\uCC9C\uD574\uB4DC\uB824\uC694."}</TSpan>
                </Text>
                <Text data-name="\uC9C1\uC811 \uC2A4\uD06C\uB7A9\uD55C \uB2E8\uC5B4\uB85C \uB098\uB9CC\uC758 \uB2E8\uC5B4\uC7A5\uC744 \uB9CC\uB4E4\uC5B4 \uC554\uAE30\uD574\uBCF4\uC138\uC694." transform="translate(53 397)" fill="#1b2c49" fontSize={11} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                  <TSpan x={0} y={13}>
                    {"\uC9C1\uC811 \uC2A4\uD06C\uB7A9\uD55C \uB2E8\uC5B4\uB85C "}
                  </TSpan>
                  <TSpan y={13} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                    {"\uB098\uB9CC\uC758 \uB2E8\uC5B4\uC7A5"}
                  </TSpan>
                  <TSpan y={13}>{"\uC744 \uB9CC\uB4E4\uC5B4 \uC554\uAE30\uD574\uBCF4\uC138\uC694."}</TSpan>
                </Text>
                <Text data-name="\uB2E8\uC5B4\uB97C \uB4A4\uC9D1\uC73C\uBA74\uC11C \uB73B\uC744 \uB9DE\uCDB0\uBCF4\uC138\uC694!" transform="translate(53 535)" fill="#1b2c49" fontSize={11} fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR" fontWeight={700}>
                  <TSpan x={0} y={13}>
                    {"\uB2E8\uC5B4\uB97C \uB4A4\uC9D1\uC73C\uBA74\uC11C"}
                  </TSpan>
                  <TSpan y={13} fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR" fontWeight={500}>
                    {" \uB73B\uC744 \uB9DE\uCDB0\uBCF4\uC138\uC694!"}
                  </TSpan>
                </Text>
                <G data-name="\uADF8\uB8F9 12404" transform="translate(0 1)">
                  <Circle data-name="\uD0C0\uC6D0 2136" cx={4} cy={4} r={4} transform="translate(164 717)" fill="#fff" />
                  <Circle data-name="\uD0C0\uC6D0 2137" cx={4} cy={4} r={4} transform="translate(177 717)" fill="#fff" />
                  <Circle data-name="\uD0C0\uC6D0 2138" cx={4} cy={4} r={4} transform="translate(190 717)" fill="#5471ff" />
                  <Circle data-name="\uD0C0\uC6D0 2139" cx={4} cy={4} r={4} transform="translate(203 717)" fill="#fff" />
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default WordTutorial;
