import React from "react";
import styled from "styled-components";
import Pie from "react-native-pie";
import Percent from "./Percent";
const Styled = {
  Wrap: styled.View`
    width: 30%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `,
  GraphTitleBox: styled.View`
    width: 100%;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #5471ff;
  `,
  GraphTitle: styled.Text`
    font-family: NotoSansKR-Bold;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  `,
  GraphBox: styled.View`
    width: 100%;
    height: 94px;
    border: 1px solid #dbdcdc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  `,
  GraphText: styled.Text`
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    top: 22;
    font-family: NotoSansKR-Bold;
  `,
};
const Graph = (props) => {
  const { percent, index } = props;
  if (index === 0) {
    return (
      <Styled.Wrap>
        <Styled.GraphTitleBox>
          <Styled.GraphTitle>예측 오답률</Styled.GraphTitle>
        </Styled.GraphTitleBox>
        <Styled.GraphBox>
          <Pie
            radius={32}
            innerRadius={22}
            sections={[
              {
                percentage: percent,
                color: "#5571FF",
              },
            ]}
            backgroundColor="#EAEAEA"
          />
          <Percent percent={percent} />
          <Styled.GraphText>{percent}%</Styled.GraphText>
        </Styled.GraphBox>
      </Styled.Wrap>
    );
  } else if (index === 1) {
    return (
      <Styled.Wrap>
        <Styled.GraphTitleBox>
          <Styled.GraphTitle>지문 난이도</Styled.GraphTitle>
        </Styled.GraphTitleBox>
        <Styled.GraphBox>
          <Pie
            radius={32}
            innerRadius={22}
            sections={[
              {
                percentage: percent,
                color: "#5571FF",
              },
            ]}
            backgroundColor="#EAEAEA"
          />
          <Percent percent={percent} />
          <Styled.GraphText>{percent}%</Styled.GraphText>
        </Styled.GraphBox>
      </Styled.Wrap>
    );
  } else {
    return (
      <Styled.Wrap>
        <Styled.GraphTitleBox>
          <Styled.GraphTitle>어휘 난이도</Styled.GraphTitle>
        </Styled.GraphTitleBox>
        <Styled.GraphBox>
          <Pie
            radius={32}
            innerRadius={22}
            sections={[
              {
                percentage: percent,
                color: "#5571FF",
              },
            ]}
            backgroundColor="#EAEAEA"
          />
          <Percent percent={percent} />
          <Styled.GraphText>{percent}%</Styled.GraphText>
        </Styled.GraphBox>
      </Styled.Wrap>
    );
  }
};
export default Graph;
