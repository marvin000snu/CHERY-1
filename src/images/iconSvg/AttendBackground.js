import * as React from "react"
import Svg, {
  Defs,
  ClipPath,
  Path,
  LinearGradient,
  Stop,
  G
} from "react-native-svg"

function AttendBackground(props) {
  return (
    <Svg width={props.size} height={props.size*222/375} viewBox="0 0 375 222" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path data-name="\uAD50\uCC28 1" d="M0 222V0h375v222z" fill="none" />
        </ClipPath>
        <LinearGradient
          id="b"
          x1={0.499}
          y1={0.02}
          x2={0.501}
          y2={0.955}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#29348a" />
          <Stop offset={1} stopColor="#d8c7ff" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={0.5}
          y1={0.947}
          x2={0.5}
          y2={-0.222}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
      <G data-name="\uADF8\uB8F9 7205">
        <G
          data-name="\uADF8\uB8F9 7204"
          transform="translate(-2245.048 -1108.896) translate(2245.048 1108.896)"
          clipPath="url(#a)"
        >
          <Path
            data-name="\uC0AC\uAC01\uD615 4662"
            transform="translate(-265.382 -83.338)"
            fill="url(#b)"
            d="M0 0H905.763V370.789H0z"
          />
          <Path
            data-name="\uD328\uC2A4 10495"
            d="M2432.876 1367.238v144.48h452.68v-331.965a26.7 26.7 0 00-32.43-25.959 26.739 26.739 0 00-44.762-8.058 30.156 30.156 0 00-43.612 30.315 26.757 26.757 0 00-9.561 9.049 26.6 26.6 0 00-10.946 2.874 26.676 26.676 0 00-49.953 18.165 26.58 26.58 0 00-13.588 20.552 34 34 0 00-25.59 46.7 26.726 26.726 0 00-6.09 6.78 26.771 26.771 0 00-33.255 8.571 26.641 26.641 0 00-15.274-4.788 26.965 26.965 0 00-3.768.269 36.686 36.686 0 00-69.593 16.034 36.265 36.265 0 002.594 13.51 26.611 26.611 0 00-2.356 2.27 26.738 26.738 0 00-47.531-2.436 26.615 26.615 0 00-37.309 33.177 26.481 26.481 0 00-9.656 20.46zm301.962-139.886l-.921.686c-.04-.806-.121-1.6-.232-2.386q.545.874 1.153 1.7z"
            transform="translate(-2245.048 -1108.77)"
            fill="#fff"
            opacity={0.55}
          />
          <Path
            data-name="\uD328\uC2A4 10496"
            d="M2432.876 1416.461v95.034h452.68v-282.52a26.7 26.7 0 00-32.43-25.958 26.739 26.739 0 00-44.762-8.058 30.156 30.156 0 00-43.612 30.313 24.693 24.693 0 01-20.507 11.924 26.676 26.676 0 00-49.953 18.165 26.58 26.58 0 00-13.588 20.553 34 34 0 00-25.59 46.7 26.725 26.725 0 00-6.09 6.78 26.771 26.771 0 00-33.255 8.571 26.634 26.634 0 00-15.274-4.788 27.114 27.114 0 00-3.768.268 36.686 36.686 0 00-69.593 16.034 36.26 36.26 0 002.594 13.51 26.674 26.674 0 00-2.356 2.271 26.737 26.737 0 00-47.531-2.436 26.616 26.616 0 00-37.309 33.176 26.481 26.481 0 00-9.656 20.461zm301.962-139.886l-.921.686c-.04-.806-.121-1.6-.232-2.386q.545.872 1.153 1.7z"
            transform="translate(-2245.048 -1108.547)"
            fill="#fff"
            opacity={0.55}
          />
          <Path
            data-name="\uD328\uC2A4 10497"
            d="M2261.661 1193.086a20.159 20.159 0 018.817 2.007c4.49-9.475 14.705-16.1 26.6-16.1a31.082 31.082 0 019.613 1.515c5.22-10.94 17.036-18.579 30.784-18.579 15.2 0 28.035 9.331 32.211 22.141a30.487 30.487 0 0116.974-5.077c12.332 0 22.862 7.122 27.072 17.162a13.363 13.363 0 015.289-1.088c6.608 0 12.018 4.717 12.538 10.713H2243.4c2.293-7.33 9.6-12.694 18.261-12.694z"
            transform="translate(-2245.048 -1108.656)"
            opacity={0.32}
            fill="url(#c)"
          />
          <G data-name="\uADF8\uB8F9 7203">
            <G data-name="\uADF8\uB8F9 7202" opacity={0.15}>
              <G data-name="\uADF8\uB8F9 7201">
                <G data-name="\uADF8\uB8F9 7200" opacity={0.86}>
                  <Path
                    data-name="\uD328\uC2A4 10498"
                    d="M2066.388 1133.554l5.869 95.648-5.869-.773a1.845 1.845 0 00-.9-.966l-.718-6.306-.718 6.306a1.845 1.845 0 00-.9.967l-5.868.771 5.868-95.648a1.847 1.847 0 00.9.966l.718 6.306.718-6.306a1.845 1.845 0 00.9-.965z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1015.061)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10499"
                    d="M2693.306 1195.251l6.357-.837-6.357-.836a2 2 0 00-.973-1.047l-.779-6.833-.778 6.833a2 2 0 00-.975 1.047l-6.357.836 6.357.837a2 2 0 00.975 1.048l.778 6.832.779-6.832a2 2 0 00.973-1.048z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1014.825)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10500"
                    d="M2713.932 1197.653l3.913-.514-3.913-.515a1.228 1.228 0 00-.6-.644l-.479-4.2-.479 4.2a1.23 1.23 0 00-.6.646l-3.911.513 3.911.514a1.223 1.223 0 00.6.646l.479 4.2.479-4.2a1.219 1.219 0 00.6-.646z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1014.798)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10501"
                    d="M2236.506 1171.921l4.4-.579-4.4-.579a1.388 1.388 0 00-.675-.724l-.538-4.73-.539 4.73a1.39 1.39 0 00-.675.725l-4.4.578 4.4.579a1.39 1.39 0 00.675.725l.539 4.73.538-4.73a1.387 1.387 0 00.675-.725z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1014.918)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10502"
                    d="M2587.98 1126.843l6.691-.88-6.691-.881a2.113 2.113 0 00-1.025-1.1l-.82-7.191-.819 7.191a2.1 2.1 0 00-1.026 1.1l-6.691.879 6.691.88a2.1 2.1 0 001.026 1.1l.819 7.191.82-7.191a2.113 2.113 0 001.025-1.098z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1015.137)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10503"
                    d="M2429 1146.941l5.868-.771-5.868-.77a1.846 1.846 0 00-.9-.965l-.718-6.307-.719 6.307a1.842 1.842 0 00-.9.966l-5.867.772 5.867.771a1.852 1.852 0 00.9.967l.719 6.306.718-6.306a1.854 1.854 0 00.9-.97z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1015.041)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10504"
                    d="M2411.984 1122.5l4.4-.58-4.4-.579a1.385 1.385 0 00-.675-.725l-.539-4.73-.538 4.73a1.39 1.39 0 00-.675.725l-4.4.579 4.4.58a1.387 1.387 0 00.675.725l.538 4.729.539-4.729a1.381 1.381 0 00.675-.725z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1015.141)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10505"
                    d="M2066.524 1099.4l6.357-.837-6.357-.836a2 2 0 00-.974-1.047l-.779-6.833-.779 6.833a2 2 0 00-.974 1.047l-6.356.836 6.356.837a2 2 0 00.974 1.049l.779 6.83.779-6.83a2 2 0 00.974-1.049z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1015.259)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10506"
                    d="M2211.338 1156.85l4.4-.58-4.4-.579a1.391 1.391 0 00-.674-.725l-.54-4.73-.538 4.73a1.383 1.383 0 00-.674.725l-4.4.579 4.4.58a1.376 1.376 0 00.674.725l.538 4.729.54-4.729a1.383 1.383 0 00.674-.725z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1014.986)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10507"
                    d="M2750.148 1120.969l6.846-.9-6.846-.9a2.161 2.161 0 00-1.051-1.127l-.836-7.359-.839 7.359a2.156 2.156 0 00-1.049 1.128l-6.846.9 6.846.9a2.155 2.155 0 001.049 1.129l.839 7.357.836-7.357a2.166 2.166 0 001.051-1.13z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1015.165)"
                    fill="#fff"
                  />
                  <Path
                    data-name="\uD328\uC2A4 10508"
                    d="M2347.265 1069.845l8.314-1.095-8.314-1.092a2.609 2.609 0 00-1.275-1.37l-1.016-8.935-1.019 8.935a2.627 2.627 0 00-1.274 1.37l-8.312 1.092 8.312 1.095a2.624 2.624 0 001.274 1.37l1.019 8.933 1.016-8.933a2.609 2.609 0 001.275-1.37z"
                    transform="translate(-253.879 -93.724) translate(-1991.17 -1015.406)"
                    fill="#fff"
                  />
                  <G data-name="\uADF8\uB8F9 7129">
                    <Path
                      data-name="\uD328\uC2A4 10509"
                      d="M2347.726 1137.919c2.495 0 2.495-4.159 0-4.159s-2.5 4.159 0 4.159z"
                      transform="translate(-253.879 -93.724) translate(354.685 118.7) translate(-2345.855 -1133.76)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7130">
                    <Path
                      data-name="\uD328\uC2A4 10510"
                      d="M2183.036 1447.793c2.829 0 2.829-4.714 0-4.714s-2.829 4.714 0 4.714z"
                      transform="translate(-253.879 -93.724) translate(189.745 429.418) translate(-2180.914 -1443.079)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7131">
                    <Path
                      data-name="\uD328\uC2A4 10511"
                      d="M2839.6 1180.334c2.829 0 2.829-4.714 0-4.714s-2.828 4.714 0 4.714z"
                      transform="translate(-253.879 -93.724) translate(846.308 160.749) translate(-2837.478 -1175.62)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7132">
                    <Path
                      data-name="\uD328\uC2A4 10512"
                      d="M2666.253 1224.753c1.663 0 1.663-2.773 0-2.773s-1.665 2.773 0 2.773z"
                      transform="translate(-253.879 -93.724) translate(673.834 207.319) translate(-2665.004 -1221.98)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7133">
                    <Path
                      data-name="\uD328\uC2A4 10513"
                      d="M2216.827 1369.4c2.581 0 2.581-4.3 0-4.3s-2.582 4.3 0 4.3z"
                      transform="translate(-253.879 -93.724) translate(223.721 351.085) translate(-2214.891 -1365.099)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7134">
                    <Path
                      data-name="\uD328\uC2A4 10514"
                      d="M2084.281 1424.447a.967.967 0 01-.219-.046l1.043.863-.01-.015v1.9a2.025 2.025 0 00.246-.984 1.775 1.775 0 10-3.54 0v.019a2.034 2.034 0 00.519 1.344 1.673 1.673 0 001.721.489l-.467.067a1.571 1.571 0 00.247-.019 1.618 1.618 0 00.867-.252 1.843 1.843 0 00.787-1.1 1.973 1.973 0 00-.173-1.42 1.649 1.649 0 00-1.026-.847z"
                      transform="translate(-253.879 -93.724) translate(90.629 410.519) translate(-2081.799 -1424.265)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7135">
                    <Path
                      data-name="\uD328\uC2A4 10515"
                      d="M2659.438 1468.586c2.413 0 2.413-4.022 0-4.022s-2.413 4.022 0 4.022z"
                      transform="translate(-253.879 -93.724) translate(666.458 451) translate(-2657.628 -1464.564)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7136">
                    <Path
                      data-name="\uD328\uC2A4 10516"
                      d="M2412.018 1185.948c1.665 0 1.665-2.772 0-2.772s-1.663 2.772 0 2.772z"
                      transform="translate(-253.879 -93.724) translate(419.601 168.338) translate(-2410.771 -1183.175)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7137">
                    <Path
                      data-name="\uD328\uC2A4 10517"
                      d="M2702.879 1521.1a2.06 2.06 0 00-2.06.926 1.737 1.737 0 000 1.653 2.06 2.06 0 002.06.926c2.1.026 2.1-3.533 0-3.506z"
                      transform="translate(-253.879 -93.724) translate(709.44 507.795) translate(-2700.61 -1521.103)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7138">
                    <Path
                      data-name="\uD328\uC2A4 10518"
                      d="M2715.355 1112.008c3.319 0 3.319-5.532 0-5.532s-3.318 5.532 0 5.532z"
                      transform="translate(-253.879 -93.724) translate(721.697 91.292) translate(-2712.867 -1106.476)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7139">
                    <Path
                      data-name="\uD328\uC2A4 10519"
                      d="M2506.133 1091.222c3.252 0 3.252-5.421 0-5.421s-3.252 5.421 0 5.421z"
                      transform="translate(-253.879 -93.724) translate(512.524 70.523) translate(-2503.694 -1085.8)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7140">
                    <Path
                      data-name="\uD328\uC2A4 10520"
                      d="M2671.373 1125.7c3.252 0 3.252-5.419 0-5.419s-3.252 5.419 0 5.419z"
                      transform="translate(-253.879 -93.724) translate(677.764 105.156) translate(-2668.934 -1120.277)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7141">
                    <Path
                      data-name="\uD328\uC2A4 10521"
                      d="M2250.409 1117.687c3.252 0 3.252-5.419 0-5.419s-3.252 5.419 0 5.419z"
                      transform="translate(-253.879 -93.724) translate(256.8 97.11) translate(-2247.97 -1112.268)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7142">
                    <Path
                      data-name="\uD328\uC2A4 10522"
                      d="M1992.15 1555.971a.7.7 0 000-1.386.7.7 0 000 1.386z"
                      transform="translate(-253.879 -93.724) translate(.356 541.429) translate(-1991.526 -1554.585)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7143">
                    <Path
                      data-name="\uD328\uC2A4 10523"
                      d="M2847.808 1453.984c2.011 0 2.011-3.352 0-3.352s-2.012 3.352 0 3.352z"
                      transform="translate(-253.879 -93.724) translate(855.129 437.005) translate(-2846.299 -1450.632)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7144">
                    <Path
                      data-name="\uD328\uC2A4 10524"
                      d="M2805.405 1138.28c2.012 0 2.012-3.352 0-3.352s-2.011 3.352 0 3.352z"
                      transform="translate(-253.879 -93.724) translate(812.727 119.873) translate(-2803.897 -1134.928)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7145">
                    <Path
                      data-name="\uD328\uC2A4 10525"
                      d="M2675.072 1487.026c2.012 0 2.012-3.353 0-3.353s-2.012 3.353 0 3.353z"
                      transform="translate(-253.879 -93.724) translate(682.393 470.196) translate(-2673.563 -1483.673)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7146">
                    <Path
                      data-name="\uD328\uC2A4 10526"
                      d="M2292 1185.152c1.663 0 1.663-2.772 0-2.772s-1.663 2.772 0 2.772z"
                      transform="translate(-253.879 -93.724) translate(299.578 167.54) translate(-2290.748 -1182.38)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7147">
                    <Path
                      data-name="\uD328\uC2A4 10527"
                      d="M2160.973 1210.562l.445-.329a1.888 1.888 0 000-3.088l-.445-.329c-3.729-2.764-3.729 6.511 0 3.747z"
                      transform="translate(-253.879 -93.724) translate(167.006 191.562) translate(-2158.176 -1206.295)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7148">
                    <Path
                      data-name="\uD328\uC2A4 10528"
                      d="M2332.5 1152.39l.446-.328a1.89 1.89 0 000-3.088l-.446-.329c-3.728-2.765-3.728 6.511 0 3.746z"
                      transform="translate(-253.879 -93.724) translate(338.532 133.128) translate(-2329.702 -1148.123)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7149">
                    <Path
                      data-name="\uD328\uC2A4 10529"
                      d="M2167.235 1517.691c1.663 0 1.663-2.773 0-2.773s-1.663 2.773 0 2.773z"
                      transform="translate(-253.879 -93.724) translate(174.818 501.582) translate(-2165.988 -1514.918)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7150">
                    <Path
                      data-name="\uD328\uC2A4 10530"
                      d="M2621.312 1202.8c1.663 0 1.663-2.771 0-2.771s-1.664 2.771 0 2.771z"
                      transform="translate(-253.879 -93.724) translate(628.894 185.266) translate(-2620.064 -1200.027)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7151">
                    <Path
                      data-name="\uD328\uC2A4 10531"
                      d="M2146.408 1400.9c2.5 0 2.5-4.159 0-4.159s-2.495 4.159 0 4.159z"
                      transform="translate(-253.879 -93.724) translate(153.367 382.868) translate(-2144.537 -1396.739)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7152">
                    <Path
                      data-name="\uD328\uC2A4 10532"
                      d="M2612.157 1159.218c3.554 0 3.554-5.923 0-5.923s-3.554 5.923 0 5.923z"
                      transform="translate(-253.879 -93.724) translate(618.322 138.323) translate(-2609.491 -1153.295)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7153">
                    <Path
                      data-name="\uD328\uC2A4 10533"
                      d="M2762.343 1372.6c0 .083.01.167.015.25a1.411 1.411 0 001.338 1.436 1.393 1.393 0 001.335-1.436c-.02-.327-.039-.654-.061-.98-.034-.553-.358-1.231-.936-1.323a1.509 1.509 0 00-.677 0c-.577.092-.9.77-.938 1.323-.02.326-.039.653-.061.98a1.34 1.34 0 102.673 0l.014-.25a1.352 1.352 0 10-2.7 0z"
                      transform="translate(-253.879 -93.724) translate(771.17 356.521) translate(-2762.34 -1370.51)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7154">
                    <Path
                      data-name="\uD328\uC2A4 10534"
                      d="M2190.533 1478.557a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(198.382 462.868) translate(-2189.552 -1476.378)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7155">
                    <Path
                      data-name="\uD328\uC2A4 10535"
                      d="M2185.738 1146.057a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(193.588 128.863) translate(-2184.758 -1143.878)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7156">
                    <Path
                      data-name="\uD328\uC2A4 10536"
                      d="M1992.15 1124.069a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(0 106.776) translate(-1991.17 -1121.89)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7157">
                    <Path
                      data-name="\uD328\uC2A4 10537"
                      d="M2210.124 1103.874a1.1 1.1 0 000-2.18 1.1 1.1 0 000 2.18z"
                      transform="translate(-253.879 -93.724) translate(217.974 86.489) translate(-2209.144 -1101.694)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7158">
                    <Path
                      data-name="\uD328\uC2A4 10538"
                      d="M2366.521 1103.874a1.1 1.1 0 000-2.18 1.1 1.1 0 000 2.18z"
                      transform="translate(-253.879 -93.724) translate(374.371 86.489) translate(-2365.541 -1101.694)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7159">
                    <Path
                      data-name="\uD328\uC2A4 10539"
                      d="M2798.178 1209.655c2.494 0 2.494-4.159 0-4.159s-2.5 4.159 0 4.159z"
                      transform="translate(-253.879 -93.724) translate(805.136 190.76) translate(-2796.306 -1205.496)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7160">
                    <Path
                      data-name="\uD328\uC2A4 10540"
                      d="M2235.572 1376.78a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(243.421 360.63) translate(-2234.591 -1374.601)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7161">
                    <Path
                      data-name="\uD328\uC2A4 10541"
                      d="M2590.5 1211.508c1.664 0 1.664-2.772 0-2.772s-1.664 2.772 0 2.772z"
                      transform="translate(-253.879 -93.724) translate(598.081 194.015) translate(-2589.251 -1208.736)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7162">
                    <Path
                      data-name="\uD328\uC2A4 10542"
                      d="M2259.567 1453.395a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(267.416 437.592) translate(-2258.586 -1451.216)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7163">
                    <Path
                      data-name="\uD328\uC2A4 10543"
                      d="M2184.4 1162.033a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(192.248 144.912) translate(-2183.418 -1159.854)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7164">
                    <Path
                      data-name="\uD328\uC2A4 10544"
                      d="M2044.135 1017.774a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(51.985) translate(-2043.155 -1015.595)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7165">
                    <Path
                      data-name="\uD328\uC2A4 10545"
                      d="M2326.666 1152.807a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(334.515 135.644) translate(-2325.685 -1150.628)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7166">
                    <Path
                      data-name="\uD328\uC2A4 10546"
                      d="M1992.15 1123.786a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(0 106.492) translate(-1991.17 -1121.607)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7167">
                    <Path
                      data-name="\uD328\uC2A4 10547"
                      d="M2726.172 1550.565a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(734.021 535.202) translate(-2725.19 -1548.386)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7168">
                    <Path
                      data-name="\uD328\uC2A4 10548"
                      d="M2801.029 1494.575a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(808.879 478.958) translate(-2800.049 -1492.396)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7169">
                    <Path
                      data-name="\uD328\uC2A4 10549"
                      d="M2861.033 1058.744a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(868.883 41.155) translate(-2860.053 -1056.565)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7170">
                    <Path
                      data-name="\uD328\uC2A4 10550"
                      d="M2671.373 1063.661a1.1 1.1 0 000-2.18 1.1 1.1 0 000 2.18z"
                      transform="translate(-253.879 -93.724) translate(679.223 46.094) translate(-2670.393 -1061.481)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7171">
                    <Path
                      data-name="\uD328\uC2A4 10551"
                      d="M2692.535 1588.015a1.1 1.1 0 000-2.181 1.1 1.1 0 000 2.181z"
                      transform="translate(-253.879 -93.724) translate(700.384 572.819) translate(-2691.554 -1585.834)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7172">
                    <Path
                      data-name="\uD328\uC2A4 10552"
                      d="M2847.706 1186.489a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(855.554 169.478) translate(-2846.724 -1184.31)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7173">
                    <Path
                      data-name="\uD328\uC2A4 10553"
                      d="M2485.705 1151.476a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(493.556 134.307) translate(-2484.726 -1149.297)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7174">
                    <Path
                      data-name="\uD328\uC2A4 10554"
                      d="M2766.1 1166.724a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(773.945 149.624) translate(-2765.115 -1164.545)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7175">
                    <Path
                      data-name="\uD328\uC2A4 10555"
                      d="M2073.32 1210.251a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(81.17 193.348) translate(-2072.34 -1208.072)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7176">
                    <Path
                      data-name="\uD328\uC2A4 10556"
                      d="M2020.942 1517.393a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(28.792 501.879) translate(-2019.962 -1515.214)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7177">
                    <Path
                      data-name="\uD328\uC2A4 10557"
                      d="M2726.172 1103.874a1.1 1.1 0 000-2.18 1.1 1.1 0 000 2.18z"
                      transform="translate(-253.879 -93.724) translate(734.021 86.489) translate(-2725.19 -1101.694)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7178">
                    <Path
                      data-name="\uD328\uC2A4 10558"
                      d="M2519.318 1174.51a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(527.168 157.445) translate(-2518.338 -1172.331)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7179">
                    <Path
                      data-name="\uD328\uC2A4 10559"
                      d="M2140.627 1568.8a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(148.476 553.515) translate(-2139.646 -1566.617)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7180">
                    <Path
                      data-name="\uD328\uC2A4 10560"
                      d="M2633.581 1103.874a1.1 1.1 0 000-2.18 1.1 1.1 0 000 2.18z"
                      transform="translate(-253.879 -93.724) translate(641.429 86.489) translate(-2632.599 -1101.694)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7181">
                    <Path
                      data-name="\uD328\uC2A4 10561"
                      d="M2459.2 1210.657a1.1 1.1 0 000-2.178 1.095 1.095 0 000 2.178z"
                      transform="translate(-253.879 -93.724) translate(467.053 193.757) translate(-2458.223 -1208.479)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7182">
                    <Path
                      data-name="\uD328\uC2A4 10562"
                      d="M2232.913 1196.739a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(240.763 179.775) translate(-2231.933 -1194.56)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7183">
                    <Path
                      data-name="\uD328\uC2A4 10563"
                      d="M2625.705 1171.178a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(633.554 154.098) translate(-2624.724 -1168.999)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7184">
                    <Path
                      data-name="\uD328\uC2A4 10564"
                      d="M2336.5 1124.069a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(344.345 106.776) translate(-2335.515 -1121.89)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7185">
                    <Path
                      data-name="\uD328\uC2A4 10565"
                      d="M2000.884 1385.249a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(8.733 369.138) translate(-1999.903 -1383.07)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7186">
                    <Path
                      data-name="\uD328\uC2A4 10566"
                      d="M2090.712 1539.556a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(98.561 524.143) translate(-2089.731 -1537.377)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7187">
                    <Path
                      data-name="\uD328\uC2A4 10567"
                      d="M2566.341 1174.347a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(574.191 157.281) translate(-2565.361 -1172.168)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7188">
                    <Path
                      data-name="\uD328\uC2A4 10568"
                      d="M2249.029 1194.385a1.1 1.1 0 000-2.178 1.095 1.095 0 000 2.178z"
                      transform="translate(-253.879 -93.724) translate(256.878 177.411) translate(-2248.048 -1192.207)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7189">
                    <Path
                      data-name="\uD328\uC2A4 10569"
                      d="M2149.947 1191.439a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(157.798 174.451) translate(-2148.968 -1189.26)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7190">
                    <Path
                      data-name="\uD328\uC2A4 10570"
                      d="M2880.048 1105.563c3.327 0 3.327-5.544 0-5.544s-3.329 5.544 0 5.544z"
                      transform="translate(-253.879 -93.724) translate(886.381 84.806) translate(-2877.551 -1100.019)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7191">
                    <Path
                      data-name="\uD328\uC2A4 10571"
                      d="M2438.808 1171.273c1.664 0 1.664-2.772 0-2.772s-1.663 2.772 0 2.772z"
                      transform="translate(-253.879 -93.724) translate(446.391 153.597) translate(-2437.561 -1168.5)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7192">
                    <Path
                      data-name="\uD328\uC2A4 10572"
                      d="M2470.132 1116.06a1.1 1.1 0 000-2.179 1.1 1.1 0 000 2.179z"
                      transform="translate(-253.879 -93.724) translate(477.982 98.731) translate(-2469.152 -1113.881)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7193">
                    <Path
                      data-name="\uD328\uC2A4 10573"
                      d="M2020.942 1203.043c3.252 0 3.252-5.42 0-5.42s-3.252 5.42 0 5.42z"
                      transform="translate(-253.879 -93.724) translate(27.333 182.852) translate(-2018.503 -1197.623)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7194">
                    <Path
                      data-name="\uD328\uC2A4 10574"
                      d="M2095.8 1123.3l.015.249a1.411 1.411 0 001.336 1.437 1.4 1.4 0 001.337-1.437l-.061-.979c-.034-.554-.359-1.233-.937-1.323a1.513 1.513 0 00-.677 0c-.578.09-.9.769-.937 1.323l-.061.979a1.4 1.4 0 001.336 1.437 1.412 1.412 0 001.337-1.437l.014-.249a1.352 1.352 0 10-2.7 0z"
                      transform="translate(-253.879 -93.724) translate(104.629 106.096) translate(-2095.799 -1121.213)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7195">
                    <Path
                      data-name="\uD328\uC2A4 10575"
                      d="M2034.911 1449.861c2.495 0 2.495-4.159 0-4.159s-2.495 4.159 0 4.159z"
                      transform="translate(-253.879 -93.724) translate(41.87 432.053) translate(-2033.04 -1445.702)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7196">
                    <Path
                      data-name="\uD328\uC2A4 10576"
                      d="M2091.886 1421.182a1.049 1.049 0 000-2.087 1.049 1.049 0 000 2.087z"
                      transform="translate(-253.879 -93.724) translate(99.777 405.326) translate(-2090.947 -1419.095)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7197">
                    <Path
                      data-name="\uD328\uC2A4 10577"
                      d="M2277.026 1191.448a1.1 1.1 0 000-2.178 1.095 1.095 0 000 2.178z"
                      transform="translate(-253.879 -93.724) translate(284.876 174.461) translate(-2276.046 -1189.27)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7198">
                    <Path
                      data-name="\uD328\uC2A4 10578"
                      d="M2020.942 1053.24c1.664 0 1.664-2.771 0-2.771s-1.663 2.771 0 2.771z"
                      transform="translate(-253.879 -93.724) translate(28.525 35.031) translate(-2019.695 -1050.468)"
                      fill="#fff"
                    />
                  </G>
                  <G data-name="\uADF8\uB8F9 7199">
                    <Path
                      data-name="\uD328\uC2A4 10579"
                      d="M2085.819 1098.327a1.1 1.1 0 000-2.178 1.095 1.095 0 000 2.178z"
                      transform="translate(-253.879 -93.724) translate(93.669 80.919) translate(-2084.839 -1096.149)"
                      fill="#fff"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
          <Path
            data-name="\uD328\uC2A4 10580"
            d="M2422.966 1346.775a26.67 26.67 0 00-37.309-33.177 26.738 26.738 0 00-47.531 2.436 26.644 26.644 0 00-2.356-2.27 36.5 36.5 0 00-34.062-50.015 36.669 36.669 0 00-32.937 20.471 26.968 26.968 0 00-3.769-.269 26.637 26.637 0 00-15.273 4.788 26.771 26.771 0 00-33.255-8.571 26.749 26.749 0 00-6.09-6.78 34 34 0 00-25.59-46.7 26.58 26.58 0 00-13.588-20.552 26.689 26.689 0 00-49.953-18.165 26.609 26.609 0 00-10.946-2.874 26.757 26.757 0 00-9.561-9.049 30.253 30.253 0 00-43.612-30.315 26.739 26.739 0 00-44.762 8.058 26.7 26.7 0 00-32.43 25.959v331.964h452.68v-144.48a26.481 26.481 0 00-9.656-20.459zm-291.153-121.124c-.111.786-.192 1.58-.232 2.386l-.921-.686q.607-.825 1.153-1.699z"
            transform="translate(-2245.048 -1108.77)"
            fill="#fff"
            opacity={0.55}
          />
          <Path
            data-name="\uD328\uC2A4 10581"
            d="M2422.966 1396a26.67 26.67 0 00-37.309-33.177 26.737 26.737 0 00-47.531 2.436 26.707 26.707 0 00-2.356-2.271 36.5 36.5 0 00-34.062-50.014 36.67 36.67 0 00-32.937 20.47 27.118 27.118 0 00-3.769-.268 26.63 26.63 0 00-15.273 4.788 26.771 26.771 0 00-33.255-8.571 26.748 26.748 0 00-6.09-6.78 34 34 0 00-25.59-46.7 26.58 26.58 0 00-13.588-20.553 26.689 26.689 0 00-49.953-18.165 26.625 26.625 0 00-10.946-2.875 26.768 26.768 0 00-9.561-9.049 30.253 30.253 0 00-43.612-30.313 26.739 26.739 0 00-44.762 8.058 26.7 26.7 0 00-32.43 25.958v282.52h452.68v-95.034a26.481 26.481 0 00-9.656-20.46zm-291.153-121.124c-.111.786-.192 1.58-.232 2.386l-.921-.686q.607-.827 1.153-1.701z"
            transform="translate(-2245.048 -1108.547)"
            fill="#fff"
            opacity={0.55}
          />
          <Path
            data-name="\uD328\uC2A4 10582"
            d="M2625.588 1193.086a20.162 20.162 0 018.817 2.007c4.49-9.475 14.705-16.1 26.6-16.1a31.082 31.082 0 019.613 1.515c5.22-10.94 17.036-18.579 30.784-18.579 15.2 0 28.035 9.331 32.211 22.141a30.487 30.487 0 0116.974-5.077c12.331 0 22.862 7.122 27.072 17.162a13.363 13.363 0 015.289-1.088c6.608 0 12.018 4.717 12.538 10.713h-188.164c2.298-7.33 9.603-12.694 18.266-12.694z"
            transform="translate(-2245.048 -1108.656)"
            opacity={0.32}
            fill="url(#c)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default AttendBackground
