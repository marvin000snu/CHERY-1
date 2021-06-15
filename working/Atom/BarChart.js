import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BarChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";
import moment from "moment";
const Styled = {
  body: styled.View`
  padding-bottom: ${hp(1.5)}px;
    margin-top: ${hp(2)};
    width: ${wp(100)};
    height: ${hp(25)}px;
    align-items: center;
    background-color: #f5f5f5;
    justify-content: space-between;
  `,
  chart: styled.View`
    height: ${hp(18)};
    flex-flow: row;
    align-items: flex-start;
  `,
  xAxis: styled.View`
    justify-content: flex-end;
  `,
  texts: styled.View`
  height: ${hp(6)}
  align-items: center;
  `,
  timeText: styled.Text`
    font-size: ${hp(2.5)}px;
    font-weight: 500;
  `,
  index: styled.Text`
    font-size: ${hp(2)}px;
    color: gray;
  `,
};

const BarCharts = (props) => {
  const { studyTime, data, type } = props;
  let dayOrMonth = type===0?"TODAY":"2021"
  const fill = "#5174ff";
  const strokeLinecap = "round";
  const strokeLinejoin = "round";
  // const data = [120, 16, 30, 69, 70, 40, 90];
  var days =
    type === 0
      ? ["S", "M", "T", "W", "T", "F", "S"]
      : [5, 4, 3, 2, 1, 0].map((v) => {
          return parseInt(moment().subtract(v,"month").format("MM"));
        });
  let max = data
    ? data.reduce((a, b) => {
        return Math.max(a, b);
      })
    : 0;
  let yAxis = [];
    for (i = Math.max(max,0); i > 0; i = i - Math.max(max,0) / 4)
      yAxis.push(i);
    yAxis.push(0);
  return (
    <Styled.body>
      <Styled.texts>
        <Styled.timeText>{"1h 22m"}</Styled.timeText>
        <Styled.index>{dayOrMonth}</Styled.index>
      </Styled.texts>
      <Styled.chart>
        <YAxis
          style={{ height: hp(15) }}
          data={yAxis}
          scale={scale.scaleBand}
          svg={{
            fill: "grey",
            fontSize: 10,
          }}
          formatLabel={(value) => `${value}`}
        />
        <Styled.xAxis>
          <BarChart style={{ height: hp(18), width: wp(85) }} spacingOuter={0.5} data={data} svg={{ fill, strokeLinecap, strokeLinejoin }} spacingInner={0.5} yMax={max} contentInset={{ top: 25, bottom: 25 }} numberOfTicks={4}>
            <Grid svg={{ strokeDasharray: "6.5" }} />
          </BarChart>
          <XAxis style={{ marginHorizontal: -10 }} data={data} formatLabel={(value, index) => days[index]} svg={{ fontSize: 10, fill: "black" }} scale={scale.scaleBand} spacingOuter={0.5} />
        </Styled.xAxis>
      </Styled.chart>
    </Styled.body>
  );
};

export default BarCharts;
