import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Circle,
  Path,
  Text,
  TSpan,
  G,
  Rect,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

  function HomeTutorialModal(props) {
    const width = props.size? props.size*0.536: 309;
    const height = props.size? props.size*1: 576;  
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 309 576"
      fill = "#000"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__g"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0.078} stopColor="#78b8f0" />
          <Stop offset={0.917} stopColor="#b2f0e4" />
        </LinearGradient>
        <LinearGradient
          id="prefix__i"
          x1={0.702}
          y1={-0.022}
          x2={0.355}
          y2={0.875}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0.078} stopColor="#575b8c" />
          <Stop offset={0.917} stopColor="#b6a4ff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__j"
          x1={0.012}
          y1={0.14}
          x2={0.866}
          y2={0.77}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#d8f0a6" />
          <Stop offset={0.866} stopColor="#9be255" />
        </LinearGradient>
        <ClipPath id="prefix__f">
          <Circle
            data-name="\uD0C0\uC6D0 114-2"
            cx={21.134}
            cy={21.134}
            r={21.134}
            fill="none"
          />
        </ClipPath>
        <ClipPath id="prefix__h">
          <Circle
            data-name="\uD0C0\uC6D0 114-2"
            cx={21.134}
            cy={21.134}
            r={21.134}
            fill="none"
          />
        </ClipPath>
        <ClipPath id="prefix__l">
          <Path fill="#bbc2cf" d="M0 0h19.999v16.316H0z" />
        </ClipPath>
      </Defs>
      <Path
        data-name="Rectangle 9023"
        fill="#5571ff"
        d="M206.034 248.299h28v28h-28z"
      />
      <Text
        transform="translate(219.034 269.299)"
        fill="#fff"
        fontSize={17}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={-6.069} y={0}>
          {"D"}
        </TSpan>
      </Text>
      <Text
        data-name="-"
        transform="translate(240.034 269.299)"
        fill="#5571ff"
        fontSize={17}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={-3.145} y={0}>
          {"-"}
        </TSpan>
      </Text>
      <Path
        data-name="Rectangle 9025"
        fill="#5571ff"
        d="M248.034 248.299h28v28h-28z"
      />
      <Text
        data-name={6}
        transform="translate(262.034 269.299)"
        fill="#fff"
        fontSize={17}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={-5.006} y={0}>
          {"6"}
        </TSpan>
      </Text>
      <Text
        data-name={1}
        transform="translate(294.034 269.299)"
        fill="#fff"
        fontSize={17}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={-5.006} y={0}>
          {"1"}
        </TSpan>
      </Text>
      <G
        data-name="Rectangle 9026"
        transform="translate(111 342)"
        fill="#fff"
        stroke="#5471ff"
      >
        <Rect width={46} height={19} rx={9.5} stroke="none" />
        <Rect x={0.5} y={0.5} width={45} height={18} rx={9} fill="none" />
      </G>
      <Text
        transform="translate(118 356)"
        fill="#5471ff"
        fontSize={11}
        fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR"
      >
        <TSpan x={0} y={0}>
          {"MORE"}
        </TSpan>
      </Text>
      <Path
        data-name="Path 17499"
        d="M277.98 179.344v.36l-.18-.18z"
        fill="none"
        stroke="#0d0c0c"
      />
      <Path
        data-name="Path 17500"
        d="M278.069 179.799l-.09-.09v.15zm-.27-.27l.18.18v-.36z"
        fill="none"
        stroke="#0d0c0c"
      />
      <Path
        data-name="Path 17501"
        d="M277.8 179.524l.18-.18v.36z"
        fill="none"
        stroke="#0d0c0c"
      />
      <Rect
        data-name="Rectangle 9039"
        width={309}
        height={520}
        rx={12}
        transform="translate(0 56)"
        fill="#fdfdfd"
      />
      <G data-name="Group 12359">
        <G data-name="Group 11433">
          <Path
            data-name="Path 16359"
            d="M141.729 79.922v7.284h-7.631v-7.284h-3.469V97.96h3.469v-7.284h7.631v7.284h3.469V79.922z"
            fill="#5571ff"
          />
          <Path
            data-name="Path 16360"
            d="M179.265 90.579a5.376 5.376 0 00-1.009-10.657h-10.164V97.96h3.469v-7.285h3.73l4.311 7.285h4.026l-3.353-5.667zm-7.7-3.373V83.39h6.695a1.908 1.908 0 110 3.816h-6.695z"
            fill="#5571ff"
          />
          <Path
            data-name="Path 16361"
            d="M118.251 95.185a6.244 6.244 0 115.566-9.158h3.773a9.713 9.713 0 100 5.828h-3.772a6.3 6.3 0 01-5.567 3.33z"
            fill="#5571ff"
          />
          <Path
            data-name="Path 16363"
            d="M163.927 85.46l-13.778 2.148a2.437 2.437 0 01-2.801-2.193 2.437 2.437 0 012.053-2.625l14.1-2.198z"
            fill="#f7ea93"
          />
          <Path
            data-name="Path 16364"
            d="M163.646 92.436l-14.068.462a2.406 2.406 0 01-2.485-2.364 2.4 2.4 0 012.403-2.447l14.076-.016z"
            fill="#ff77a8"
          />
          <Path
            data-name="Rectangle 8063"
            d="M150.681 93.072h14.072v4.888h-14.072a2.444 2.444 0 01-2.444-2.444 2.444 2.444 0 012.444-2.444z"
            fill="#9be7ff"
          />
          <Path
            data-name="Path 16362"
            d="M200.539 79.922h-4.03l-3.938 6.654-3.938-6.654h-4.031l3.413 5.768 2.816 4.759v7.511h3.469v-7.5l2.821-4.767z"
            fill="#5571ff"
          />
        </G>
      </G>
      <G filter="url(#prefix__a)">
        <G data-name="Path 17510" fill="#fff">
          <Path d="M98.036 293.565H25.12a5.826 5.826 0 01-5.819-5.819V214.83c0-3.209 2.61-5.819 5.82-5.819h72.916c3.209 0 5.82 2.61 5.82 5.82v72.916c0 3.209-2.611 5.82-5.82 5.82z" />
          <Path
            d="M25.12 209.76a5.075 5.075 0 00-5.07 5.07v72.916a5.075 5.075 0 005.07 5.07h72.916a5.075 5.075 0 005.07-5.07V214.83a5.075 5.075 0 00-5.07-5.069H25.12m0-1.5h72.917a6.57 6.57 0 016.57 6.57v72.916a6.57 6.57 0 01-6.57 6.57H25.12a6.57 6.57 0 01-6.569-6.57V214.83a6.57 6.57 0 016.57-6.569z"
            fill="#dedafd"
          />
        </G>
      </G>
      <Text
        transform="translate(61.786 279.582)"
        fill="#0c0c0d"
        fontSize={15}
        fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
        fontWeight={500}
      >
        <TSpan x={-27.6} y={0}>
          {"\uD559\uC2B5\uD558\uAE30"}
        </TSpan>
      </Text>
      <G data-name="Group 12361" stroke="#1d1d1d">
        <Path
          data-name="Rectangle 8261"
          fill="#fff"
          d="M58.78 252.974l-7.642-7.642 14.479-14.478 7.642 7.641z"
        />
        <Path
          data-name="Path 16548"
          d="M56.131 250.528l-2.546-2.546 14.48-14.478 2.545 2.545z"
          fill="#fff"
        />
        <Path
          data-name="Path 16528"
          d="M58.635 252.974l-2.546-2.546 14.48-14.478 2.545 2.545z"
          fill="#4865f5"
        />
        <Path
          data-name="Path 16549"
          d="M53.686 248.024l-2.546-2.546L65.62 231l2.545 2.545z"
          fill="#4865f5"
        />
        <Path
          data-name="Path 16452"
          d="M48.479 253.13l2.5 2.505-2.11.721a.868.868 0 01-1.116-1.117z"
          fill="#1b2c49"
        />
        <Path
          data-name="Path 16453"
          d="M51.138 245.332l7.641 7.641-7.8 2.66-2.505-2.505z"
          fill="#fee77e"
        />
        <Path
          data-name="Rectangle 8265"
          fill="#fee77e"
          d="M73.032 238.722l-7.642-7.642 2.011-2.01 7.642 7.641z"
        />
        <Path
          data-name="Path 16550"
          d="M75.043 236.711l-7.642-7.642 1.846-1.845a1.371 1.371 0 011.94 0l5.702 5.703a1.371 1.371 0 010 1.938z"
          fill="#f7969a"
        />
      </G>
      <G filter="url(#prefix__b)">
        <G data-name="Path 17509" fill="#fff">
          <Path d="M191.346 293.545H118.43a5.826 5.826 0 01-5.819-5.819V214.81c0-3.209 2.61-5.819 5.82-5.819h72.916c3.209 0 5.82 2.61 5.82 5.82v72.916c0 3.209-2.611 5.82-5.82 5.82z" />
          <Path
            d="M118.43 209.74a5.075 5.075 0 00-5.07 5.07v72.916a5.075 5.075 0 005.07 5.07h72.916a5.075 5.075 0 005.07-5.07V214.81a5.075 5.075 0 00-5.07-5.069H118.43m0-1.5h72.917a6.57 6.57 0 016.57 6.57v72.916a6.57 6.57 0 01-6.57 6.57H118.43a6.57 6.57 0 01-6.569-6.57V214.81a6.57 6.57 0 016.57-6.569z"
            fill="#dedafd"
          />
        </G>
      </G>
      <Text
        transform="translate(154.988 279.582)"
        fill="#060606"
        fontSize={15}
        fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
        fontWeight={500}
      >
        <TSpan x={-27.6} y={0}>
          {"\uC774\uC5B4\uD480\uAE30"}
        </TSpan>
      </Text>
      <G data-name="Group 12363">
        <G data-name="Group 11844">
          <G data-name="Group 11842">
            <Path
              data-name="Path 16591"
              d="M155.938 253.489a27.719 27.719 0 00-18.776 0v-24.252a27.719 27.719 0 0118.776 0z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 11843">
            <Path
              data-name="Path 16592"
              d="M156.071 228.866l-.133-.047a28.215 28.215 0 00-18.909.047l-.258.094v25.081l.524-.188a27.316 27.316 0 0118.252-.086c.086.023.172.055.258.086l.133.047.133-.047c.086-.031.172-.063.258-.086V228.96zm-18.518.641a27.392 27.392 0 0117.993 0v23.431a28.109 28.109 0 00-17.993 0z"
            />
          </G>
        </G>
        <G data-name="Group 11847">
          <G data-name="Group 11845">
            <Path
              data-name="Path 16593"
              d="M174.713 253.489a27.718 27.718 0 00-18.775 0v-24.252a27.718 27.718 0 0118.775 0z"
              fill="#fff"
            />
          </G>
          <G data-name="Group 11846">
            <Path
              data-name="Path 16594"
              d="M174.847 228.866a28.215 28.215 0 00-18.909-.047l-.133.047-.258.094v24.807c.086.023.172.055.258.086l.133.047.133-.047c.086-.031.172-.063.258-.086a27.316 27.316 0 0118.252.086l.524.188V228.96zm-.524 24.072a28.109 28.109 0 00-17.993 0v-23.431a27.392 27.392 0 0117.993 0z"
            />
          </G>
        </G>
        <G data-name="Group 11848">
          <Path
            data-name="Path 16595"
            d="M154.372 255.438a.407.407 0 01-.132-.023 22.75 22.75 0 00-15.382 0 .391.391 0 01-.264-.737 23.536 23.536 0 0115.911 0 .391.391 0 01-.132.76z"
          />
        </G>
        <G data-name="Group 11849">
          <Path
            data-name="Path 16596"
            d="M173.149 255.438a.408.408 0 01-.132-.023 22.75 22.75 0 00-15.382 0 .391.391 0 01-.264-.737 23.535 23.535 0 0115.911 0 .391.391 0 01-.132.76z"
          />
        </G>
        <G data-name="Group 11850">
          <Path
            data-name="Path 16597"
            d="M139.509 232.168a.587.587 0 01-.16-1.152c.346-.1 8.546-2.378 13.926.029a.587.587 0 11-.479 1.072c-5-2.232-13.045.006-13.126.029a.6.6 0 01-.161.022z"
          />
        </G>
        <G data-name="Group 11851">
          <Path
            data-name="Path 16598"
            d="M158.284 232.168a.587.587 0 01-.16-1.152c.347-.1 8.546-2.378 13.926.029a.587.587 0 11-.479 1.072c-5-2.232-13.045.006-13.126.029a.6.6 0 01-.161.022z"
          />
        </G>
        <G data-name="Group 11852">
          <Path
            data-name="Path 16599"
            d="M158.284 235.297a.587.587 0 01-.16-1.152c.347-.1 8.546-2.378 13.926.029a.587.587 0 11-.479 1.072c-5-2.233-13.045.005-13.126.029a.6.6 0 01-.161.022z"
          />
        </G>
        <G data-name="Group 11853">
          <Path
            data-name="Path 16600"
            d="M139.51 235.254a.587.587 0 01-.213-1.134 18.4 18.4 0 018.915-.775.587.587 0 01.483.675.593.593 0 01-.675.483 17.564 17.564 0 00-8.3.711.57.57 0 01-.21.04z"
          />
        </G>
        <G data-name="Group 11854">
          <Path
            data-name="Path 16601"
            d="M158.285 238.382a.587.587 0 01-.213-1.134 18.4 18.4 0 018.915-.775.587.587 0 11-.193 1.158 17.566 17.566 0 00-8.3.711.572.572 0 01-.209.04z"
          />
        </G>
        <G data-name="\uADF8\uB8F9 11862">
          <G data-name="\uC0AC\uAC01\uD615 8261">
            <Path
              data-name="Rectangle 8533"
              fill="#fff"
              d="M165.731 243.188l7.244-7.244 3.824 3.823-7.245 7.244z"
            />
            <Path
              data-name="Path 16657"
              d="M173.254 235.671l-.282-.281-7.244 7.244-.336.344-.039.109-.071.2 4.17 4.17.2-.071.109-.039.344-.336 7.244-7.244zm-4.42 10.069l-.031-.031-.524-.524-.031-.031-.649-.649-.039-.039-.242-.243-.031-.031-.962-.962-.039-.039 6.579-6.579.109-.11 1 1 .031.031.282.282.649.649.274.274.039.039.274.274.72.72-6.689 6.689-.031-.031z"
              fill="#1d1d1d"
            />
          </G>
          <G data-name="\uD328\uC2A4 16548">
            <Path
              data-name="Path 16658"
              d="M168.229 245.788l-1.272-1.273 7.247-7.247 1.272 1.273z"
              fill="#fff"
            />
            <Path
              data-name="Path 16659"
              d="M175.445 237.96l-.657-.649-.587-.587-.062.055-.164.172-.031.031-.078.078-.172.164-6.689 6.689-.031.039-.242.235v.008l-.039.031-.235.243-.039.031-.016.016 1.831 1.831.016-.016.039-.031.235-.243.039-.031v-.008l.242-.235.031-.039 6.579-6.579.086-.078.023-.031.172-.164.078-.078.031-.031.164-.172.063-.062zm-7.244 7.244l-.688-.688 6.689-6.689.039.039.649.649.031.031-6.689 6.689z"
              fill="#1d1d1d"
            />
          </G>
          <G data-name="\uD328\uC2A4 16528">
            <Path
              data-name="Path 16660"
              d="M169.483 247.011l-1.272-1.273 7.247-7.247 1.272 1.273z"
              fill="#4865f5"
            />
            <Path
              data-name="Path 16661"
              d="M176.767 239.246l-1.306-1.307-.078.078-.164.172-.11.109-.172.164-6.963 6.963v.008l-.055.047-.219.227-.039.031 1.424 1.424.313.313.055-.016.2-.07 7.627-7.628zm-8 6.493l.039-.031 6.579-6.579.078-.086.72.72-.078.086-6.579 6.579-.039.031z"
              fill="#1d1d1d"
            />
          </G>
          <G data-name="\uD328\uC2A4 16549">
            <Path
              data-name="Path 16662"
              d="M167.006 244.536l-1.272-1.273 7.247-7.247 1.272 1.273z"
              fill="#4865f5"
            />
            <Path
              data-name="Path 16663"
              d="M173.497 235.977l-.274-.274-.242-.242-7.628 7.628-.071.2-.016.055.3.305.845.845.587.595.039-.039.227-.227.047-.047.235-.227.047-.047 6.689-6.689.164-.172.063-.062.047-.047.172-.164.055-.063.016-.016zm.125 1.393l-6.579 6.579-.039.031-.72-.72.039-.031 6.579-6.579.078-.078.681.681.039.039z"
              fill="#1d1d1d"
            />
          </G>
          <G data-name="\uD328\uC2A4 16452">
            <Path
              data-name="Path 16664"
              d="M164.399 247.092l1.252 1.252-1.055.361a.434.434 0 01-.559-.559z"
              fill="#1b2c49"
            />
            <Path
              data-name="Path 16665"
              d="M166.056 248.197l-1.518-1.518-.305-.305-.282.822-.282.814a.819.819 0 000 .579.829.829 0 00.43.462.874.874 0 00.344.07.8.8 0 00.274-.047l.829-.282.821-.282zm-1.494-.383l.368.36-.462.156-.055-.062z"
              fill="#1d1d1d"
            />
          </G>
          <G data-name="\uD328\uC2A4 16453">
            <Path
              data-name="Path 16666"
              d="M165.731 243.188l3.824 3.823-3.9 1.33-1.252-1.252z"
              fill="#fee77e"
            />
            <Path
              data-name="Path 16667"
              d="M170.07 246.976l-.516-.516-.031-.031-.688-.688-.031-.031-.524-.524-.031-.031-.649-.649-.039-.039-.242-.243-.031-.031-.962-.962-.039-.039-.235-.235-.039-.039-.282-.282-.336.344-.039.109-.071.2-.016.055-1.033 3.027-.282.822.305.305.305.313.368.36.618.618.821-.282 3.027-1.033.055-.016.2-.07.109-.039.344-.336zm-1.291-.117l-3.02 1.033-.907-.907 1.033-3.02.016-.055 2.934 2.934z"
              fill="#1d1d1d"
            />
          </G>
          <G data-name="\uC0AC\uAC01\uD615 8265">
            <Path
              data-name="Rectangle 8534"
              fill="#fee77e"
              d="M172.863 236.057l1.006-1.006 3.824 3.823-1.007 1.006z"
            />
            <Path
              data-name="Path 16668"
              d="M174.733 237.369l-.172.164-.047.047-.062.063-.164.172-.109.109.649.649.109-.109.172-.164.109-.11.164-.172zm0 0l-.172.164-.047.047-.062.063-.164.172-.109.109.649.649.109-.109.172-.164.109-.11.164-.172zm3.239 1.228l-.274-.274h-.008l-3.262-3.27h-.008l-.266-.274-.282-.282-.556.556-.344.336-.665.665.282.282.039.039.235.235.039.039.962.962.031.031.243.243.039.039.649.649.031.031.524.524.031.031.688.688.031.031.516.516.039.039.665-.665.336-.344.555-.555zm-.829.281l-.344.336-.031.031-.078.078-.72-.72-.587-.587-.649-.649-.595-.595-.72-.72.109-.109.344-.336 3.27 3.262zm-2.409-1.51l-.172.164-.047.047-.062.063-.164.172-.109.109.649.649.109-.109.172-.164.109-.11.164-.172zm0 0l-.172.164-.047.047-.062.063-.164.172-.109.109.649.649.109-.109.172-.164.109-.11.164-.172z"
              fill="#1d1d1d"
            />
          </G>
          <G data-name="\uD328\uC2A4 16550">
            <Path
              data-name="Path 16669"
              d="M177.693 238.874l-3.824-3.824.924-.923a.687.687 0 01.97 0l2.853 2.853a.686.686 0 010 .971z"
              fill="#f7969a"
            />
            <Path
              data-name="Path 16670"
              d="M178.895 236.705l-2.855-2.855a1.091 1.091 0 00-1.526 0l-.641.649-.556.556.274.274 3.552 3.552.274.274.274.274.555-.555.649-.642a1.091 1.091 0 000-1.527zm-.555.97l-.642.649h-.008l-3.27-3.27h.008l.641-.649a.288.288 0 01.415 0l2.855 2.855a.288.288 0 010 .415z"
              fill="#1d1d1d"
            />
          </G>
        </G>
      </G>
      <G filter="url(#prefix__c)">
        <G
          data-name="Ellipse 2125"
          transform="translate(252 77)"
          fill="#fff"
          stroke="#dedafd"
          strokeWidth={1.5}
        >
          <Circle cx={22} cy={22} r={22} stroke="none" />
          <Circle cx={22} cy={22} r={21.25} fill="none" />
        </G>
      </G>
      <G data-name="Group 12360" fill="#5571ff">
        <Path
          data-name="Rectangle 8409"
          d="M264.395 90.314h19.12v3.642h-19.12z"
        />
        <Path
          data-name="Rectangle 8410"
          d="M264.395 97.598h19.12v3.642h-19.12z"
        />
        <Path
          data-name="Rectangle 8411"
          d="M264.395 104.882h19.12v3.642h-19.12z"
        />
      </G>
      <Path
        data-name="Line 1491"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M265.5 79.5l-17-50"
      />
      <G filter="url(#prefix__d)">
        <G data-name="Path 17508" fill="#fff">
          <Path d="M284.886 293.545H211.97a5.826 5.826 0 01-5.819-5.819V214.81c0-3.209 2.61-5.819 5.82-5.819h72.916c3.209 0 5.82 2.61 5.82 5.82v72.916c0 3.209-2.611 5.82-5.82 5.82z" />
          <Path
            d="M211.97 209.74a5.075 5.075 0 00-5.07 5.07v72.916a5.075 5.075 0 005.07 5.07h72.916a5.075 5.075 0 005.07-5.07V214.81a5.075 5.075 0 00-5.07-5.069H211.97m0-1.5h72.917a6.57 6.57 0 016.57 6.57v72.916a6.57 6.57 0 01-6.57 6.57H211.97a6.57 6.57 0 01-6.569-6.57V214.81a6.57 6.57 0 016.57-6.569z"
            fill="#dedafd"
          />
        </G>
      </G>
      <Text
        transform="translate(248.259 279.24)"
        fill="#060606"
        fontSize={15}
        fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
        fontWeight={500}
      >
        <TSpan x={-27.6} y={0}>
          {"\uBB38\uD56D\uBD84\uC11D"}
        </TSpan>
      </Text>
      <G data-name="Group 12362">
        <Path
          data-name="Path 16551"
          d="M240.682 234.352h3.839a.822.822 0 01.822.822v17.154a.822.822 0 01-.822.822h-3.839a.822.822 0 01-.822-.822v-17.154a.822.822 0 01.822-.822z"
          fill="#fee77e"
          stroke="#0d0c0c"
        />
        <Path
          data-name="Path 16552"
          d="M248.987 230.436h3.679a.9.9 0 01.9.9v20.911a.9.9 0 01-.9.9h-3.679a.9.9 0 01-.9-.9v-20.911a.9.9 0 01.9-.9z"
          fill="#f7969a"
          stroke="#0d0c0c"
        />
        <G data-name="Group 11766" transform="translate(231.634 224.975)">
          <Rect
            data-name="Rectangle 8287"
            width={5.483}
            height={13.316}
            rx={0.885}
            transform="translate(0 14.86)"
            fill="#4865f5"
            stroke="#0d0c0c"
          />
          <Path
            data-name="Path 16526"
            d="M23.022 2.942a10.049 10.049 0 10-1.563 15.491l2.274 2.275-.8.8a.886.886 0 000 1.252l8.7 8.7a.884.884 0 001.252 0l4.433-4.432a.886.886 0 000-1.252l-8.7-8.7a.885.885 0 00-1.252 0l-.795.795-2.276-2.274a10.057 10.057 0 00-1.273-12.655zM10.941 15.023a7.035 7.035 0 119.949 0 7.031 7.031 0 01-9.949-.001z"
            fill="#7bb5f7"
            stroke="#16163a"
          />
        </G>
      </G>
      <G data-name="Group 12369">
        <G transform="translate(-.005)" filter="url(#prefix__e)">
          <Circle
            data-name="Ellipse 896"
            cx={24.777}
            cy={24.777}
            r={24.777}
            transform="translate(236.44 141)"
            fill="#fff"
          />
        </G>
        <G
          data-name="Group 6826"
          transform="translate(240.079 144.644)"
          clipPath="url(#prefix__f)"
        >
          <G data-name="\uADF8\uB8F9 4461">
            <G data-name="Group 6822">
              <Circle
                data-name="\uD0C0\uC6D0 114-2"
                cx={21.134}
                cy={21.134}
                r={21.134}
                fill="url(#prefix__g)"
              />
            </G>
          </G>
          <G data-name="Group 6825">
            <Path
              data-name="Path 9985"
              d="M37.38 36.678H4.887l1.691-18.7a12.728 12.728 0 01.713-4.235 12.909 12.909 0 0112.2-8.665h3.293a12.918 12.918 0 0112.2 8.665 12.959 12.959 0 01.713 4.235z"
              fill="#120f0f"
            />
            <Path
              data-name="Path 9986"
              d="M33.048 18.504v15.313H21.134V19.843h-1.118a.838.838 0 01-.837-.845.831.831 0 01.837-.837h1.118V7.938h1.347a10.569 10.569 0 0110.567 10.566z"
              fill="#fff6f5"
            />
            <Path
              data-name="Path 9987"
              d="M19.179 18.997a.838.838 0 00.836.845h1.118v13.974H9.22V18.504A10.564 10.564 0 0119.787 7.937h1.347V18.16h-1.118a.831.831 0 00-.837.837z"
              fill="#fed1cc"
            />
            <Path
              data-name="Path 9988"
              d="M22.521 22.215a1.384 1.384 0 01-1.389 1.379 1.384 1.384 0 01-1.388-1.379"
              fill="none"
              stroke="#ff9d92"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.439}
            />
            <G
              data-name="Group 6823"
              transform="translate(15.467 16.122)"
              fill="#120f0f"
            >
              <Circle data-name="Ellipse 782" cx={0.919} cy={0.919} r={0.919} />
              <Circle
                data-name="Ellipse 783"
                cx={0.919}
                cy={0.919}
                r={0.919}
                transform="translate(9.495)"
              />
            </G>
            <Path
              data-name="Path 9989"
              d="M34.976 13.74c-.431.079-.88.15-1.338.211q-.753.106-1.532.211c-.986.114-2.008.22-3.056.308-2.492.2-5.151.317-7.916.317-2.862 0-5.618-.123-8.189-.343a62.14 62.14 0 01-2.791-.291 51.797 51.797 0 01-1.805-.247 19.632 19.632 0 01-1.057-.167 12.909 12.909 0 0112.2-8.665h3.293a12.917 12.917 0 0112.191 8.666z"
              fill="#120f0f"
            />
            <Path
              data-name="Path 9990"
              d="M21.178 32.39v28.618A19.023 19.023 0 012.149 41.979a18.873 18.873 0 013.46-10.936 82.828 82.828 0 0015.524 1.347z"
              fill="#912b23"
            />
            <Path
              data-name="Path 9991"
              d="M40.207 41.979a19.023 19.023 0 01-19.029 19.029V32.39a81.5 81.5 0 0015.559-1.365 18.912 18.912 0 013.47 10.954z"
              fill="#e5625c"
            />
            <Path
              data-name="Path 9992"
              d="M8.35 23.852a2.718 2.718 0 01-2.717-2.717 2.717 2.717 0 012.717-2.717z"
              fill="#fed1cc"
            />
            <Path
              data-name="Path 9993"
              d="M33.617 18.417a2.716 2.716 0 012.717 2.717 2.717 2.717 0 01-2.717 2.717z"
              fill="#fff6f5"
            />
            <G data-name="Group 6824" transform="translate(11.788 17.96)">
              <Circle
                data-name="Ellipse 784"
                cx={2.144}
                cy={2.144}
                r={2.144}
                transform="translate(14.493)"
                fill="#fbc9c0"
              />
              <Circle
                data-name="Ellipse 785"
                cx={2.144}
                cy={2.144}
                r={2.144}
                fill="#fcaba1"
              />
            </G>
            <Path
              data-name="Rectangle 4509"
              d="M8.351 11.898h4.594v34.119a4.594 4.594 0 01-4.594-4.594V11.898z"
              fill="#120f0f"
            />
            <Path
              data-name="Rectangle 4510"
              d="M29.046 11.898h4.594v29.525a4.594 4.594 0 01-4.594 4.594V11.898z"
              fill="#120f0f"
            />
            <Path data-name="Line 745" fill="none" d="M21.178 32.39v-.678" />
          </G>
        </G>
        <G data-name="Group 11077">
          <G
            data-name="Group 10811"
            transform="translate(240.079 144.644)"
            clipPath="url(#prefix__h)"
          >
            <G data-name="\uADF8\uB8F9 4461">
              <G data-name="Group 10773">
                <Circle
                  data-name="\uD0C0\uC6D0 114-2"
                  cx={21.134}
                  cy={21.134}
                  r={21.134}
                  fill="url(#prefix__i)"
                />
              </G>
            </G>
            <G data-name="Group 10810">
              <Path
                data-name="Path 15658"
                d="M8.687 35.33H5.094A3.594 3.594 0 001.5 38.923v29.9h7.188V43.13h1.181v-7.8z"
                fill="#212121"
              />
              <Path
                data-name="Path 15659"
                d="M37.429 24.12a2.308 2.308 0 01-.053.342 5.812 5.812 0 01-1.762 3.437 8.326 8.326 0 01-3.4 1.885 15.792 15.792 0 01-4.506.6h-10.52c-5.988 0-10.564-2.6-9.652-8.556a13.277 13.277 0 0113.22-13.317h3.375a13.316 13.316 0 0113.22 12.773c.009.175.009.359.009.544v.026l.018 2.165z"
                fill="#16397f"
              />
              <Path
                data-name="Path 15660"
                d="M34.413 22.663v2.726c.009.009.009.009 0 .018v12.5H22.551V23.994h-1.114a.838.838 0 010-1.675h1.114V12.141h1.341a10.515 10.515 0 019.933 7.066 10.246 10.246 0 01.588 3.456z"
                fill="#fff5f4"
              />
              <Path
                data-name="Path 15661"
                d="M20.604 23.148a.834.834 0 00.833.842h1.113v13.913H10.689V22.657a10.517 10.517 0 0110.52-10.52h1.341v10.178h-1.113a.827.827 0 00-.833.833z"
                fill="#ffcec9"
              />
              <G data-name="Group 10774" transform="translate(13.245 22.116)">
                <Circle
                  data-name="Ellipse 1787"
                  cx={2.134}
                  cy={2.134}
                  r={2.134}
                  transform="translate(14.429)"
                  fill="#ffc6bd"
                />
                <Circle
                  data-name="Ellipse 1788"
                  cx={2.134}
                  cy={2.134}
                  r={2.134}
                  fill="#ffa69e"
                />
              </G>
              <Path
                data-name="Line 1362"
                fill="none"
                d="M22.594 36.482v-.675"
              />
              <Path
                data-name="Path 15662"
                d="M33.33 30.199V18.58h1.753v7.046c0 2.525.877 1.967-1.753 4.573z"
                fill="#16397f"
              />
              <Path
                data-name="Path 15663"
                d="M36.94 18.648a7.232 7.232 0 01-4.182 1.324 7.321 7.321 0 01-2.744-.535h-.009a6.963 6.963 0 01-1.254-.684 7.214 7.214 0 01-3.235-5.365H23c.815 0 1.6-.009 2.4-.035h.061a1.006 1.006 0 00-.053-.324 1.423 1.423 0 00-1.376-1.052 1.439 1.439 0 00-1.438 1.411 1.646 1.646 0 00-.026-.3 1.412 1.412 0 00-1.4-1.113 1.439 1.439 0 00-1.438 1.411h-.035a7.287 7.287 0 01-11.441 5.26 12.379 12.379 0 01.561-2.279 12.86 12.86 0 019.258-8.3 13.045 13.045 0 012.884-.324h3.279a12.415 12.415 0 011.727.123 10.476 10.476 0 011.166.21c.272.061.535.132.8.21h.009a12.9 12.9 0 018.442 8.083 12.36 12.36 0 01.56 2.279z"
                fill="#16397f"
              />
              <Path
                data-name="Path 15664"
                d="M22.55 13.391h-2.867a1.439 1.439 0 011.438-1.411 1.4 1.4 0 011.429 1.411z"
                fill="#726161"
              />
              <Path
                data-name="Path 15665"
                d="M23.086 27.987a1.289 1.289 0 01-1.165 0"
                fill="none"
                stroke="#ffa69e"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.25}
              />
              <Path
                data-name="Rectangle 7600"
                fill="#fff5f4"
                d="M26.111 58.167h5.935v60.353h-5.935z"
              />
              <Path
                data-name="Path 15666"
                d="M18.536 118.5v13.816H2.081a7.582 7.582 0 017.592-7.583h2.928V118.5z"
                fill="#ffcec9"
              />
              <Path
                data-name="Rectangle 7601"
                fill="#ffcec9"
                d="M12.602 58.167h5.935v60.353h-5.935z"
              />
              <Path
                data-name="Path 15667"
                d="M26.111 118.5v6.233h.017v7.583h16.455a7.582 7.582 0 00-7.592-7.583h-2.945V118.5z"
                fill="#fff5f4"
              />
              <Path
                data-name="Rectangle 7602"
                d="M2.08 132.319h16.457v1.84a.7.7 0 01-.7.7H2.78a.7.7 0 01-.7-.7v-1.84z"
                fill="#ea907f"
              />
              <Path
                data-name="Path 15668"
                d="M10.599 132.324H3.853a13.6 13.6 0 01-.533-4.245 3.473 3.473 0 013.475-3.346h3.8a13.6 13.6 0 00.004 7.591z"
                fill="#ffb09d"
              />
              <Path
                data-name="Rectangle 7603"
                d="M41.87 134.856H26.81a.7.7 0 01-.7-.7v-1.84h16.46v1.84a.7.7 0 01-.7.7z"
                fill="#ea907f"
              />
              <Path
                data-name="Path 15669"
                d="M34.051 132.324h6.745a13.6 13.6 0 00.53-3.274 4.173 4.173 0 00-4.176-4.317h-3.1a13.6 13.6 0 01.001 7.591z"
                fill="#ffb09d"
              />
              <Path
                data-name="Path 15670"
                d="M1.467 68.788v.3l-.3-.3-2.271 2.27a1.32 1.32 0 001.867 1.867l.7-.7v2.369a3.594 3.594 0 107.188 0v-5.808z"
                fill="#ffcec9"
              />
              <Path
                data-name="Path 15671"
                d="M37.683 23.74a2.714 2.714 0 01-.289 1.219 2.673 2.673 0 01-1.78 1.4 2.49 2.49 0 01-.631.079v-5.409a2.713 2.713 0 012.393 1.447l.053.105a2.693 2.693 0 01.254 1.159z"
                fill="#fff5f4"
              />
              <Path
                data-name="Rectangle 7604"
                fill="#5b4a49"
                d="M18.186 11.567h9.643v4.383h-9.643z"
              />
              <Path
                data-name="Path 15672"
                d="M36.063 35.33h3.593a3.593 3.593 0 013.594 3.593v29.9h-7.187V43.13h-1.181v-7.8z"
                fill="#212121"
              />
              <Path
                data-name="Path 15673"
                d="M43.283 68.788v.3l.3-.3 2.27 2.27a1.32 1.32 0 01-1.866 1.867l-.7-.7v2.369a3.594 3.594 0 11-7.188 0v-5.808z"
                fill="#fff5f4"
              />
              <Path
                data-name="Rectangle 7605"
                fill="#16397f"
                d="M26.536 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7606"
                fill="#16397f"
                d="M25.659 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7607"
                fill="#16397f"
                d="M24.783 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7608"
                fill="#16397f"
                d="M23.906 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7609"
                fill="#16397f"
                d="M23.029 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7610"
                fill="#16397f"
                d="M22.153 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7611"
                fill="#16397f"
                d="M21.276 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7612"
                fill="#16397f"
                d="M20.399 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7613"
                fill="#16397f"
                d="M19.523 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7614"
                fill="#16397f"
                d="M18.646 11.567h.438v7.89h-.438z"
              />
              <Path
                data-name="Rectangle 7615"
                fill="#16397f"
                d="M17.769 11.567h.438v7.89h-.438z"
              />
              <G data-name="Group 10781">
                <G data-name="Group 10777" transform="translate(17.337 19.791)">
                  <G data-name="Group 10775">
                    <Path
                      data-name="Path 15674"
                      d="M.877.796a.11.11 0 01-.109-.11V.109a.11.11 0 11.219 0v.577a.11.11 0 01-.11.11z"
                      fill="#251714"
                    />
                  </G>
                  <G data-name="Group 10776">
                    <Path
                      data-name="Path 15675"
                      d="M.343.968a.109.109 0 01-.1-.073L.05.351A.11.11 0 01.257.278l.192.544a.109.109 0 01-.1.146z"
                      fill="#251714"
                    />
                  </G>
                  <Rect
                    data-name="Rectangle 7616"
                    width={1.753}
                    height={2.63}
                    rx={0.877}
                    transform="translate(0 .718)"
                    fill="#130f0f"
                  />
                </G>
                <G data-name="Group 10780" transform="translate(26.104 19.791)">
                  <G data-name="Group 10778">
                    <Path
                      data-name="Path 15676"
                      d="M.877.796a.11.11 0 00.109-.11V.109a.11.11 0 10-.219 0v.577a.11.11 0 00.11.11z"
                      fill="#251714"
                    />
                  </G>
                  <G data-name="Group 10779">
                    <Path
                      data-name="Path 15677"
                      d="M1.411.968a.109.109 0 00.1-.073l.193-.544a.11.11 0 00-.207-.073l-.192.544a.109.109 0 00.1.146z"
                      fill="#251714"
                    />
                  </G>
                  <Rect
                    data-name="Rectangle 7617"
                    width={1.753}
                    height={2.63}
                    rx={0.877}
                    transform="rotate(-180 .877 1.674)"
                    fill="#130f0f"
                  />
                </G>
              </G>
              <G
                data-name="Group 10782"
                fill="none"
                stroke="#a73439"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
              >
                <Path
                  data-name="Path 15678"
                  d="M21.508 27.127a.558.558 0 011.09 0"
                />
                <Path
                  data-name="Path 15679"
                  d="M22.598 27.127a.558.558 0 011.09 0"
                />
              </G>
              <Path
                data-name="Path 15680"
                d="M21.355 61.537H9.66V37.583l.877 2.034h5.462l.474 1.929-1.92 1.894 2.709 1.35 1.42 5.795.018.079.044.149.052.228z"
                fill="#212121"
              />
              <Path
                data-name="Path 15681"
                d="M18.426 39.62l-1.6 1.569-.359.359-.473-1.929z"
                fill="#212121"
              />
              <Path
                data-name="Path 15682"
                d="M21.627 46.958l-2.586 3.279-.193.245-.149.184-.018-.079-1.42-5.795.508.254z"
                fill="#212121"
              />
              <Path
                data-name="Path 15683"
                d="M35.083 37.525v24.012H21.355l-2.56-10.494-.052-.228.377-.245 11.581-7.443-.132-.175-2.186-2.876 6.277-.947z"
                fill="#212121"
              />
              <Path
                data-name="Path 15684"
                d="M35.083 35.237v2.288l-.421 1.6-6.277.947 2.314 3.051-11.581 7.443-.377.245-.044-.149.149-.184.193-.246 2.586-3.279-3.857-1.911v-.009l-.508-.245v-.009l-2.709-1.341 1.92-1.894.359-.359 1.6-1.569h-7.89l-.88-2.029v-2.349z"
                fill="#575b8c"
              />
              <G data-name="Group 10783" fill="gray">
                <Path
                  data-name="Path 15685"
                  d="M19.067 50.342l-.219.14-.166.105-1.42-5.795-.789-3.241-.474-1.929-.412-1.7.421-.105.438 1.806.386 1.569.938 3.857 1.271 5.19z"
                />
                <Path
                  data-name="Path 15686"
                  d="M21.792 61.488l-.237.053-.193.044-.009-.044-2.56-10.494-.053-.228-.044-.149-.018-.079.167-.105.219-.14.053.228.061.228z"
                />
              </G>
              <G data-name="Group 10795">
                <G data-name="Group 10784">
                  <Path
                    data-name="Rectangle 7618"
                    fill="gray"
                    d="M12.666 41.699l.415-.14 2.951 8.719-.414.14z"
                  />
                </G>
                <G data-name="Group 10785">
                  <Path
                    data-name="Rectangle 7619"
                    fill="#333"
                    d="M12.877 42.322l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10786">
                  <Path
                    data-name="Rectangle 7620"
                    fill="#333"
                    d="M13.158 43.152l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10787">
                  <Path
                    data-name="Rectangle 7621"
                    fill="#333"
                    d="M13.439 43.983l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10788">
                  <Path
                    data-name="Rectangle 7622"
                    fill="#333"
                    d="M13.72 44.813l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10789">
                  <Path
                    data-name="Rectangle 7623"
                    fill="#333"
                    d="M14.001 45.643l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10790">
                  <Path
                    data-name="Rectangle 7624"
                    fill="#333"
                    d="M14.282 46.474l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10791">
                  <Path
                    data-name="Rectangle 7625"
                    fill="#333"
                    d="M14.563 47.304l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10792">
                  <Path
                    data-name="Rectangle 7626"
                    fill="#333"
                    d="M14.845 48.134l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10793">
                  <Path
                    data-name="Rectangle 7627"
                    fill="#333"
                    d="M15.126 48.965l.415-.14.14.414-.415.14z"
                  />
                </G>
                <G data-name="Group 10794">
                  <Path
                    data-name="Rectangle 7628"
                    fill="#333"
                    d="M15.407 49.795l.415-.14.14.414-.415.14z"
                  />
                </G>
              </G>
              <Path
                data-name="Path 15687"
                d="M35.008 61.069v.544c0 7.3-5.555 13.238-12.466 13.352a1.646 1.646 0 01-.208.009c-6.994 0-12.674-5.988-12.674-13.36v-.544z"
              />
              <Path
                data-name="Path 15688"
                d="M18.427 39.62h-7.89l-.877-2.034-.973-2.253 2.148-3.542 3.34 3.445z"
                fill="#1a1a1a"
              />
              <Path
                data-name="Rectangle 7629"
                d="M10.884 16.827h3.445v13.192a3.445 3.445 0 01-3.445-3.445v-9.747z"
                fill="#16397f"
              />
              <G data-name="Group 10796">
                <Path
                  data-name="Path 15689"
                  d="M35.88 14.192a103.619 103.619 0 00-12.072-.693 100.711 100.711 0 00-14.228.978c-.263.035-.517.07-.771.114 1.859-4.8 5.453-11.787 7.684-11.787h1.341C20.001 2.8 33.33 6.307 35.88 14.192z"
                  fill="#16110b"
                />
                <Path
                  data-name="Path 15690"
                  d="M36.792 17.506a104.7 104.7 0 00-28.737-.035 12.759 12.759 0 01.587-2.446c.053-.149.105-.3.167-.438.254-.044.509-.079.772-.114a100.709 100.709 0 0114.228-.973 103.61 103.61 0 0112.072.693c.114.272.228.552.324.833a12.939 12.939 0 01.587 2.48z"
                  fill="#1a1a1a"
                />
              </G>
              <Path
                data-name="Path 15691"
                d="M35.846 34.614l-.763 2.911-.421 1.6-6.277.947-1.525.228 3.621-5.067 2.718-3.814z"
                fill="#1a1a1a"
              />
              <Path
                data-name="Path 15692"
                d="M30.701 43.127L19.12 50.57l-.377.245-.044-.149.149-.184.219-.14-.026-.105 2.586-3.279 1.911-2.428 3.322-4.226 1.4-.386.123.158 2.183 2.875z"
                fill="#1a1a1a"
              />
              <Path
                data-name="Path 15693"
                d="M23.972 44.95l-1.569 2.393-.78-.386-7.075-3.515 3.875-3.822 5.111 4.909z"
                fill="#1a1a1a"
              />
              <G data-name="Group 10797">
                <Path
                  data-name="Path 15694"
                  d="M30.823 43.311l-11.642 7.487-.386.245-.053-.228-.044-.149-.018-.079.167-.105.219-.14 11.5-7.39.009-.009.123.184z"
                  fill="gray"
                />
              </G>
              <Path
                data-name="Path 15696"
                d="M19.399 50.14h-1.068a.212.212 0 00-.211.211v1.674a.745.745 0 001.49 0v-1.674a.211.211 0 00-.211-.211zm-.534 2.367a.438.438 0 11.438-.438.438.438 0 01-.433.438z"
                fill="#666"
              />
              <G data-name="Group 10809">
                <G data-name="Group 10798">
                  <Path
                    data-name="Rectangle 7630"
                    fill="gray"
                    d="M28.676 53.867l2.485-8.863.422.118-2.485 8.863z"
                  />
                </G>
                <G data-name="Group 10799">
                  <Path
                    data-name="Rectangle 7631"
                    fill="#333"
                    d="M30.865 46.059l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10800">
                  <Path
                    data-name="Rectangle 7632"
                    fill="#333"
                    d="M30.629 46.903l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10801">
                  <Path
                    data-name="Rectangle 7633"
                    fill="#333"
                    d="M30.392 47.747l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10802">
                  <Path
                    data-name="Rectangle 7634"
                    fill="#333"
                    d="M30.155 48.591l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10803">
                  <Path
                    data-name="Rectangle 7635"
                    fill="#333"
                    d="M29.919 49.436l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10804">
                  <Path
                    data-name="Rectangle 7636"
                    fill="#333"
                    d="M29.682 50.28l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10805">
                  <Path
                    data-name="Rectangle 7637"
                    fill="#333"
                    d="M29.445 51.124l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10806">
                  <Path
                    data-name="Rectangle 7638"
                    fill="#333"
                    d="M29.209 51.968l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10807">
                  <Path
                    data-name="Rectangle 7639"
                    fill="#333"
                    d="M28.972 52.812l.118-.422.422.119-.118.421z"
                  />
                </G>
                <G data-name="Group 10808">
                  <Path
                    data-name="Rectangle 7640"
                    fill="#333"
                    d="M28.735 53.656l.118-.422.422.119-.118.421z"
                  />
                </G>
              </G>
              <Path
                data-name="Path 15697"
                d="M33.067 108.001H11.676L9.66 61.537h25.423z"
              />
              <Path
                data-name="Path 15698"
                d="M40.344 112.333l-5.335-50.721s-25.348.086-25.348 0l-5.26 50.721-.438 2.541c1.713 0 1.275.508 2.987.508s1.712-2.033 3.423-2.033 1.713 2.033 3.425 2.033 1.713-2.033 3.427-2.033 1.713 2.033 3.426 2.033 1.713-2.033 3.427-2.033 1.713 2.033 3.425 2.033 1.713-2.033 3.426-2.033 1.714 2.033 3.427 2.033 1.717-2.033 3.433-2.033 1.277 2.541 2.994 2.541z"
                opacity={0.85}
              />
              <Path
                data-name="Path 15699"
                d="M7.534 21.824c0 3.6-1.753 3.6-1.753 7.2s1.753 3.6 1.753 7.2-1.753 3.6-1.753 7.2 1.753 3.6 1.753 7.2-1.753 3.6-1.753 7.207 1.753 3.6 1.753 7.206c0 0-.066 6.575 6.071 6.575 0 0-2.381-4.159-.811-6.575 2.564-3.945.811-3.945 1.753-7.2 1-3.458-1.753-3.6-1.753-7.2s1.753-3.6 1.753-7.2-1.753-3.6-1.753-7.2 1.753-3.6 1.753-7.206-1.753-3.6-1.753-7.207z"
                fill="#16397f"
              />
              <Path
                data-name="Path 15700"
                d="M10.884 26.44a2.705 2.705 0 010-5.41z"
                fill="#ffcec9"
              />
            </G>
          </G>
        </G>
        <G data-name="Group 8937">
          <Path
            data-name="Path 13330"
            d="M289.634 178.498v9.314a1.487 1.487 0 01-.754 1.3l-8.061 4.657a1.489 1.489 0 01-1.508 0l-5.213-3.007-1.631-.943-1.225-.707a1.535 1.535 0 01-.632-.707 1.566 1.566 0 01-.122-.594v-9.314a1.531 1.531 0 01.754-1.31l8.069-4.647a1.489 1.489 0 011.508 0l2.489 1.433 5.572 3.214a1.55 1.55 0 01.452.405 1.474 1.474 0 01.302.906z"
            fill="#fff"
          />
          <Path
            data-name="Path 13331"
            d="M289.123 178.753v8.8a1.442 1.442 0 01-.714 1.239l-7.63 4.4a1.429 1.429 0 01-1.428 0l-7.63-4.4a1.442 1.442 0 01-.714-1.239v-8.8a1.441 1.441 0 01.714-1.239l7.63-4.4a1.429 1.429 0 011.428 0l7.63 4.4a1.444 1.444 0 01.314.241v.007a1.427 1.427 0 01.4.991z"
            fill="#357513"
          />
          <Path
            data-name="Path 13332"
            d="M288.831 178.294v8.832a1.428 1.428 0 01-.7 1.224l-7.5 4.394a1.4 1.4 0 01-1.429 0l-7.5-4.394a1.413 1.413 0 01-.7-1.224v-8.373a1.441 1.441 0 01.714-1.239l7.63-4.4a1.429 1.429 0 011.428 0l7.63 4.4a1.444 1.444 0 01.314.241v.007a1.317 1.317 0 01.113.532z"
            fill="#80c93a"
          />
          <Path
            data-name="Path 13333"
            d="M3068.1-322.036v7.2a1.148 1.148 0 01-.583 1.006l-6.231 3.6a1.152 1.152 0 01-1.166 0l-4.03-2.325-1.261-.729-.947-.547a1.186 1.186 0 01-.489-.547 1.2 1.2 0 01-.095-.459v-7.2a1.184 1.184 0 01.583-1.013l6.238-3.593a1.151 1.151 0 011.166 0l1.924 1.108 4.307 2.485a1.2 1.2 0 01.35.313 1.137 1.137 0 01.234.701z"
            transform="translate(-2780.64 501.591)"
            fill="url(#prefix__j)"
          />
          <Path
            data-name="Path 13334"
            d="M287.227 178.855l-14.473 8.359a1.2 1.2 0 01-.095-.459v-4.97l9.911-5.728 4.307 2.485a1.2 1.2 0 01.35.313z"
            fill="#daf5a9"
          />
          <Path
            data-name="Path 13335"
            d="M287.462 180.648v1.457l-12.01 6.93-1.261-.729z"
            fill="#daf5a9"
          />
          <G data-name="Group 8936">
            <G data-name="Group 8933" fill="#3b7c11">
              <Path
                data-name="Path 13336"
                d="M279.438 183.345v3.258c0 .087 0 .087-.095.095a1.028 1.028 0 00-.146.007c-.036 0-.051-.022-.043-.058a.66.66 0 01.008-.124 2.109 2.109 0 01.007-.211c0-.1.015-.023.015-.117l.043-.809c.022-.335.029-.656.051-.991 0-.044.007-.095.007-.138s.008-.08.008-.124l.043-.729v-.073c-.015 0-.029.007-.043.007a.024.024 0 00-.015.007.476.476 0 00-.109.029c0-.051.007-.095.007-.146v-.073c-.11.022-.2.051-.306.073a5 5 0 01-1.319.109 3.2 3.2 0 01-1.516-.459 2.145 2.145 0 01-.5-.423 2.971 2.971 0 01-.4-.627 4.454 4.454 0 01-.386-1.3c-.036-.211-.051-.43-.08-.641a.171.171 0 00-.015-.058v-.022c.116-.007.226-.022.335-.022.2-.007.408-.015.6-.015.175 0 .342.015.51.029a4.1 4.1 0 012.273.86 2.9 2.9 0 01.16.146.007.007 0 00.007.007 2.915 2.915 0 01.758 1.348 1.41 1.41 0 01.051.241 2.905 2.905 0 01.073.51c.007.087.007.175.007.255a1.4 1.4 0 01.01.179z"
              />
              <Path
                data-name="Path 13337"
                d="M284.333 180.183c-.3-.02-.6-.052-.9-.058a6.407 6.407 0 00-1.036.067 4.682 4.682 0 00-1.277.356 2.789 2.789 0 00-1.118.877 2.892 2.892 0 00-.549 1.745c-.009 1.205 0 2.238 0 3.444a.363.363 0 010 .036c0 .04.017.053.055.054.057 0 .113 0 .17.007s.067-.01.063-.061c-.007-.077-.009-.153-.014-.23-.008-.149-.016-.126-.026-.275l-.047-.764-.026-.443-.047-.746c-.01-.166-.023-.332-.032-.5l-.019-.367.054.018a3.98 3.98 0 001.88.289 2.769 2.769 0 00.9-.241 2.95 2.95 0 001.268-1.148 5.9 5.9 0 00.742-2c.013-.036-.004-.057-.041-.06z"
              />
            </G>
            <G data-name="Group 8935">
              <G data-name="Group 8934" fill="#9edc0d">
                <Path
                  data-name="Path 13338"
                  d="M279.28 183.17v3.44c0 .087 0 .087-.094.095h-.022a.751.751 0 00-.124.007c-.036 0-.052-.022-.044-.058 0-.109.008-.226.015-.335s.014-.2.014-.3l.044-.809c.015-.379.036-.751.058-1.13l.044-.707c0-.051.007-.095.007-.146v-.073c-.109.022-.2.051-.306.073a5 5 0 01-1.319.109 3.2 3.2 0 01-1.516-.459 2.156 2.156 0 01-.5-.423 3.036 3.036 0 01-.561-.8 4.424 4.424 0 01-.386-1.3c-.037-.211-.051-.43-.08-.641a.1.1 0 00-.015-.051v-.029l.335-.022c.2-.007.4-.015.6-.015.175.007.343.015.51.029a4.108 4.108 0 012.273.867 2.6 2.6 0 01.321.313.007.007 0 00.008.007 2.993 2.993 0 01.6 1.173 3.737 3.737 0 01.125.751c.004.15.013.295.013.434z"
                />
                <Path
                  data-name="Path 13339"
                  d="M279.369 183.152c.007.13.011.249.019.367l.032.5c.017.248.032.5.047.746.01.147.018.3.026.443l.047.764c.01.149.017.3.026.449 0 .077.007.154.014.231 0 .05-.016.064-.062.06s-.114-.007-.17-.007c-.037 0-.058-.014-.055-.054v-.036c0-1.206-.005-2.411 0-3.617a2.889 2.889 0 01.549-1.745 2.786 2.786 0 011.118-.877 4.687 4.687 0 011.277-.356 6.42 6.42 0 011.037-.067c.3.007.6.038.9.058.038 0 .054.022.047.06a5.894 5.894 0 01-.743 2 2.957 2.957 0 01-1.268 1.148 2.789 2.789 0 01-.9.24 3.975 3.975 0 01-1.879-.289z"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
      <Text
        data-name="\uD559\uC2B5\uD604\uD669\uACFC \uD559\uC2B5\uAE30\uB85D, CHERY\uC324\uC758 \uD55C\uB9C8\uB514\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        transform="translate(294 438)"
        fill="#1b2c49"
        fontSize={12}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={-219.732} y={0}>
          {"\uD559\uC2B5\uD604\uD669"}
        </TSpan>
        <TSpan
          y={0}
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          {"\uACFC"}
        </TSpan>
        <TSpan y={0}>{" \uD559\uC2B5\uAE30\uB85D, "}</TSpan>
        <TSpan y={0}>{"CHERY"}</TSpan>
        <TSpan y={0}>{"\uC324\uC758 \uD55C\uB9C8\uB514"}</TSpan>
        <TSpan
          y={0}
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          {"\uB97C "}
        </TSpan>
        <TSpan
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          <TSpan x={-97.296} y={18}>
            {"\uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}
          </TSpan>
        </TSpan>
      </Text>
      <Path
        data-name="Path 17518"
        d="M157 294l-13.136 18.23-3.678 5.104"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <Text
        data-name="\uB098\uC758 \uD559\uC2B5\uD604\uD669"
        transform="translate(19 478)"
        fill="#1b2c49"
        fontSize={15}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={0} y={0}>
          {"\uB098\uC758 \uD559\uC2B5\uD604\uD669"}
        </TSpan>
      </Text>
      <G filter="url(#prefix__k)">
        <G
          data-name="Rectangle 9043"
          transform="translate(109 460)"
          fill="#fff"
          stroke="#dedafd"
          strokeWidth={1.5}
        >
          <Rect width={44} height={25} rx={5} stroke="none" />
          <Rect
            x={0.75}
            y={0.75}
            width={42.5}
            height={23.5}
            rx={4.25}
            fill="none"
          />
        </G>
      </G>
      <G
        data-name="Rectangle 9042"
        transform="translate(113 465)"
        fill="#fff"
        stroke="#5471ff"
      >
        <Rect width={35} height={15} rx={7.5} stroke="none" />
        <Rect x={0.5} y={0.5} width={34} height={14} rx={7} fill="none" />
      </G>
      <Text
        data-name="MORE"
        transform="translate(119 476)"
        fill="#5471ff"
        fontSize={8}
        fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR"
      >
        <TSpan x={0} y={0}>
          {"MORE"}
        </TSpan>
      </Text>
      <Path
        data-name="Line 1495"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M152.5 467.5l26-12"
      />
      <G data-name="Group 11656" fill="#5471ff">
        <Text
          transform="translate(43.453 554.835)"
          fontSize={9}
          fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
          fontWeight={700}
        >
          <TSpan x={-4.14} y={0}>
            {"\uD648"}
          </TSpan>
        </Text>
        <G data-name="Group 8739">
          <Path
            data-name="Path 6056"
            d="M38.885 536.174c-.3-.046-.53-.062-.754-.121a1.482 1.482 0 01-.753-2.41q2.829-3.07 5.7-6.1a2 2 0 012.958 0q2.871 3.031 5.7 6.105a1.472 1.472 0 01-.716 2.391 7.151 7.151 0 01-.792.139v.489c0 1.556.006 3.112 0 4.667a1.74 1.74 0 01-2.178 1.819 1.577 1.577 0 01-1.364-1.633c-.009-1.556 0-3.112 0-4.667v-.706h-4.212c-.01.235-.028.449-.029.662 0 1.525-.036 3.05.01 4.574a1.7 1.7 0 01-1.749 1.82 1.7 1.7 0 01-1.8-1.779c-.021-1.478-.005-2.956-.005-4.434z"
          />
          <Path
            data-name="Path 6057"
            d="M50.201 527.073h1.07a.508.508 0 01.562.587 40.42 40.42 0 01-.121 2.229.579.579 0 01-.317.395.516.516 0 01-.442-.134q-1.117-1.152-2.192-2.343a.559.559 0 01-.116-.484.6.6 0 01.44-.247c.369-.036.744-.011 1.116-.011z"
          />
        </G>
      </G>
      <G data-name="Group 11657">
        <Text
          transform="translate(115.374 556.835)"
          fill="#bbc2cf"
          fontSize={10}
          fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR"
        >
          <TSpan x={-18.4} y={0}>
            {"\uD559\uC2B5\uD604\uD669"}
          </TSpan>
        </Text>
        <G data-name="Group 6374">
          <G data-name="Group 3490">
            <G
              data-name="Group 3489"
              clipPath="url(#prefix__l)"
              fill="#bbc2cf"
              transform="translate(106.703 526.888)"
            >
              <Path
                data-name="Path 5609"
                d="M11.258 12a2.6 2.6 0 01-2.561 0l-5.8-3.556s-.523-.321-.523.406v3.551c0 1.87 3.4 3.887 7.6 3.887s7.6-2.016 7.6-3.887V8.65c0-.583-.372-.3-.372-.3zm0 0"
              />
              <Path
                data-name="Path 5610"
                d="M19.619 5.615a.537.537 0 000-.994L10.787.204a1.7 1.7 0 00-1.62 0L.335 4.621a.537.537 0 000 .994l8.832 5.417a1.7 1.7 0 001.62 0"
              />
            </G>
          </G>
          <Path
            data-name="Path 5611"
            d="M126.019 540.76v-5.473s0-.259-.15-.174a4.446 4.446 0 00-.532.33.458.458 0 00-.1.347v4.97a.146.146 0 01-.09.121.945.945 0 10.954 0 .141.141 0 01-.086-.119zm0 0"
            fill="#bbc2cf"
          />
        </G>
      </G>
      <G data-name="Group 11658">
        <Text
          transform="translate(190.292 556.835)"
          fill="#bbc2cf"
          fontSize={10}
          fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR"
        >
          <TSpan x={-13.8} y={0}>
            {"\uB2E8\uC5B4\uC7A5"}
          </TSpan>
        </Text>
        <G data-name="Group 11083">
          <G data-name="Group 11082">
            <Path
              data-name="Path 16241"
              d="M182.419 535.042c0-.542-.007-1.084-.007-1.626v-5.119a1.31 1.31 0 011.416-1.409h13.511a1.31 1.31 0 011.277.8 1.472 1.472 0 01.1.563v13.632a1.285 1.285 0 01-1.315 1.322q-6.876 0-13.752-.005a1.127 1.127 0 01-1.048-.637c.1-.014.14.068.194.122a1.412 1.412 0 001.026.429q6.757.009 13.513 0a1.3 1.3 0 001.3-1.305v-6.566c0-.159-.045-.2-.2-.2-.877.007-1.754 0-2.631 0-.008-.16-.01-.32-.023-.479a1.139 1.139 0 00-.753-1.039 3.318 3.318 0 00-1.849-.189 1.572 1.572 0 00-1.432 1.446c-.018.128 0 .18.148.175.3-.01.6-.007.9 0a.148.148 0 00.176-.137.562.562 0 01.318-.436 1.291 1.291 0 011.05.025.406.406 0 01.095.643l-4.351-.006c-.016-.037-.035-.072-.048-.11-.362-1.019-.727-2.038-1.082-3.059a.2.2 0 00-.225-.162q-.6.013-1.2 0a.188.188 0 00-.213.154c-.074.229-.158.454-.24.68l-.9 2.5z"
              fill="#bbc2cf"
            />
            <Path
              data-name="Path 16242"
              d="M182.419 535.042l3.753.007c-.013.045-.024.09-.04.134q-.5 1.415-1.011 2.829c-.042.116-.057.179.107.174q.551-.015 1.1 0c.13 0 .172-.053.206-.162.106-.337.226-.671.331-1.009a.2.2 0 01.226-.164q1.023.01 2.046 0a.2.2 0 01.222.167c.1.346.216.688.318 1.034a.16.16 0 00.185.134c.374-.006.749-.009 1.123 0 .173 0 .2-.035.14-.2-.353-.98-.695-1.963-1.04-2.945l4.351.006a.464.464 0 01-.314.159c-.421.071-.847.121-1.265.208a1.448 1.448 0 00-1.247 1.8 1.176 1.176 0 00.537.855 1.749 1.749 0 001.464.189 2.332 2.332 0 00.964-.608c.024.13.046.241.065.352a.192.192 0 00.23.184c.341-.013.682 0 1.023-.006.058 0 .144.04.165-.06a.141.141 0 00-.072-.168.381.381 0 01-.168-.345 45.807 45.807 0 01-.014-2.568h2.631c.159 0 .2.044.2.2v6.566a1.3 1.3 0 01-1.3 1.305h-13.513a1.412 1.412 0 01-1.026-.429c-.054-.054-.1-.136-.194-.122 0-.041-.009-.072-.054-.082a1.043 1.043 0 01-.143-.554q-.005-3.419 0-6.838a.287.287 0 01.014-.043z"
              fill="#d9dee6"
            />
            <Path
              data-name="Path 16243"
              d="M187.528 535.037l.551-1.719a.612.612 0 01.06-.089l.566 1.807z"
              fill="#bbc2cf"
            />
            <Path
              data-name="Path 16244"
              d="M187.528 535.037h1.182c.061.19.118.382.184.569.033.093.023.13-.087.128h-1.379c-.105 0-.127-.035-.09-.131.064-.187.125-.377.19-.566z"
              fill="#d9dee6"
            />
            <Path
              data-name="Path 16245"
              d="M194.545 535.864a4.271 4.271 0 01-.029.771 1.046 1.046 0 01-1.294.753.5.5 0 01-.371-.449.6.6 0 01.287-.652 2.151 2.151 0 01.689-.2 2.06 2.06 0 00.718-.223z"
              fill="#d9dee7"
            />
          </G>
        </G>
      </G>
      <G data-name="Group 11659" fill="#bbc2cf">
        <Text
          transform="translate(260.585 556.839)"
          fontSize={10}
          fontFamily="NotoSansCJKkr-Regular, Noto Sans CJK KR"
        >
          <TSpan x={-18.4} y={0}>
            {"\uB9C8\uC774\uCCB4\uB9AC"}
          </TSpan>
        </Text>
        <G data-name="Group 11133">
          <Path
            data-name="Path 10823"
            d="M262.446 529.535a4.026 4.026 0 01-.532 3.494 3.546 3.546 0 01-.249.351 4.233 4.233 0 01-3.08-2.43 4.882 4.882 0 01.7-4.061 3.983 3.983 0 01.476.16 4.57 4.57 0 012.685 2.486z"
          />
          <Path
            data-name="Path 10824"
            d="M267.605 536.038a5.7 5.7 0 01-5.006-.132 4.7 4.7 0 01-.537-.288s.148-3.354 2.873-4.759 5.835.27 5.835.27a5.711 5.711 0 01-.142.7 6.478 6.478 0 01-3.023 4.209z"
          />
          <Path
            data-name="Path 10825"
            d="M264.549 539.587a3.5 3.5 0 00-3.546-3.45 3.5 3.5 0 00-7 .1l.075 5.442a1.554 1.554 0 001.575 1.532l5.442-.075a3.5 3.5 0 003.454-3.549z"
          />
        </G>
      </G>
      <Path
        data-name="Line 1496"
        fill="none"
        stroke="#dbdcdc"
        d="M0 518.5h309"
      />
      <Path
        data-name="Path 17511"
        d="M278.585 294.315s15.3 22.095 4.058 42.385"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <Path
        data-name="Path 17512"
        d="M281.552 331.711l.794 5.532 5.359-3"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        data-name="Path 17513"
        d="M246.762 34.043l1.517-5.322 4.629 3.164"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        data-name="Path 17514"
        d="M139.576 313.76l.366 4.155 4.109-1.548"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        data-name="Path 17515"
        d="M175 454.591l4.159.788-2.365 3.862"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        data-name="Path 17516"
        d="M18.55 227.211s-17.217-17.707 0-33.788"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <Path data-name="Rectangle 9045" fill="#dedafd" d="M93 151h68v16H93z" />
      <Path
        data-name="Path 17517"
        d="M14.724 193.424l4.432-.7-.492 4.551"
        fill="none"
        stroke="#dedafd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path data-name="Rectangle 9046" fill="#dedafd" d="M93 170h47v17H93z" />
      <Text
        data-name="\uB9E4\uC77C\uD559\uC2B5\uC73C\uB85C \uC624\uB298\uC758 5\uBB38\uD56D\uC744 \uD480\uACE0,\uC57D\uC810\uD559\uC2B5\uC73C\uB85C \uCDE8\uC57D\uC720\uD615\uC744 \uACF5\uB7B5\uD558\uC138\uC694!"
        transform="translate(26 163)"
        fill="#1b2c49"
        fontSize={12}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={0} y={0}>
          {"\uB9E4\uC77C\uD559\uC2B5"}
        </TSpan>
        <TSpan
          y={0}
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          {"\uC73C\uB85C \uC624\uB298\uC758 "}
        </TSpan>
        <TSpan y={0}>{"5"}</TSpan>
        <TSpan
          y={0}
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          {"\uBB38\uD56D\uC744 \uD480\uACE0,"}
        </TSpan>
        <TSpan x={0} y={20}>
          {"\uC57D\uC810\uD559\uC2B5"}
        </TSpan>
        <TSpan
          y={20}
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          {
            "\uC73C\uB85C \uCDE8\uC57D\uC720\uD615\uC744 \uACF5\uB7B5\uD558\uC138\uC694!"
          }
        </TSpan>
      </Text>
      <Path data-name="Rectangle 9044" fill="#dedafd" d="M136 325h47v18h-47z" />
      <Text
        data-name="\uC26C\uB294\uC2DC\uAC04\uC774 \uD544\uC694\uD560 \uB54C\uB294 \uC784\uC2DC\uC800\uC7A5\uC744 \uD558\uACE0, \uC774\uC5B4\uC11C \uD559\uC2B5\uD558\uC138\uC694!"
        transform="translate(19 338)"
        fill="#1b2c49"
        fontSize={12}
        fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
        fontWeight={500}
      >
        <TSpan x={0} y={0}>
          {"\uC26C\uB294\uC2DC\uAC04\uC774 \uD544\uC694\uD560 \uB54C\uB294 "}
        </TSpan>
        <TSpan
          y={0}
          fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
          fontWeight={700}
        >
          {"\uC784\uC2DC\uC800\uC7A5"}
        </TSpan>
        <TSpan y={0}>{"\uC744 \uD558\uACE0, "}</TSpan>
        <TSpan
          fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
          fontWeight={700}
        >
          <TSpan x={0} y={18}>
            {"\uC774\uC5B4\uC11C \uD559\uC2B5"}
          </TSpan>
          <TSpan
            y={18}
            fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
            fontWeight={500}
          >
            {"\uD558\uC138\uC694!"}
          </TSpan>
        </TSpan>
      </Text>
      <Path data-name="Rectangle 9041" fill="#dedafd" d="M166 352h87v18h-87z" />
      <Text
        data-name="chery \uC790\uCCB4 \uD574\uC124\uC744 \uD1B5\uD574 \uBB38\uD56D\uBD84\uC11D\uC744 \uC644\uBCBD\uD558\uAC8C \uD558\uC138\uC694!"
        transform="translate(290 365)"
        fill="#1b2c49"
        fontSize={12}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={-121.392} y={0}>
          {"chery "}
        </TSpan>
        <TSpan y={0}>{"\uC790\uCCB4 \uD574\uC124"}</TSpan>
        <TSpan
          y={0}
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          {"\uC744 \uD1B5\uD574 "}
        </TSpan>
        <TSpan
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          <TSpan x={-141.996} y={18}>
            {
              "\uBB38\uD56D\uBD84\uC11D\uC744 \uC644\uBCBD\uD558\uAC8C \uD558\uC138\uC694!"
            }
          </TSpan>
        </TSpan>
      </Text>
      <Text
        data-name="\uD68C\uC6D0\uC815\uBCF4, \uACE0\uAC1D\uC13C\uD130 \uB4F1 \uBA54\uB274\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        transform="translate(107 16)"
        fill="#dedafd"
        fontSize={14}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={0} y={0}>
          {"\uD68C\uC6D0\uC815\uBCF4, \uACE0\uAC1D\uC13C\uD130"}
        </TSpan>
        <TSpan y={0} fill="#fff" />
        <TSpan
          y={0}
          fill="#fff"
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          {"\uB4F1 \uBA54\uB274\uB97C "}
        </TSpan>
        <TSpan
          fill="#fff"
          fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
          fontWeight={500}
        >
          <TSpan x={0} y={20}>
            {"\uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."}
          </TSpan>
        </TSpan>
      </Text>
    </Svg>
  )
}

export default HomeTutorialModal;
