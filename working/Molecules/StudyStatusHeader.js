import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BackArrow from "../img/BackArrow";
import { TouchableWithoutFeedback } from "react-native";
import GlobalStyled from "../../src/style/GlobalStyled";
const Styled = {
  body: styled.View`
    padding-top: ${hp(5)}px;
    height: ${hp(15)}px;
    justify-content: space-between;
    align-items: center;
  `,
  upper: styled.View`
    width: ${wp(95)}px;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
  `,
  lower: styled.View`
    align-items: center;
  `,
  headerText: styled.Text`
    font-size: ${wp(6)}px;
    font-weight: 600;
    text-align: center;
  `,
  blocks: styled.View`
    width: ${wp(100)}px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0px ${hp(0.15)}px 1px rgba(0, 0, 0, 0.2);
  `,
  menuBlock: styled.View`
    width: ${wp(33)}px;
    height: ${hp(4)}px;
    justify-content: center;
    align-items: center;
    border-bottom-width: 5px;
  `,
  menuText: styled.Text`
    color: #909398;
    font-size: ${wp(4)}px;
  `,
};
const StudyStatusHeader = (props) => {
  const { backHandler, type, setType, title } = props; //학습기록:1, 나의학습현황2, chery멘토3
  return (
    <Styled.body>
      <Styled.upper>
        <GlobalStyled.ViewRow width="100px" justifyContent="flex-start">
          <TouchableWithoutFeedback onPress={backHandler}>
            <BackArrow />
          </TouchableWithoutFeedback>
        </GlobalStyled.ViewRow>
        <Styled.headerText>{title}</Styled.headerText>
        <GlobalStyled.ViewRow width="100px">
        </GlobalStyled.ViewRow>
      </Styled.upper>
      <Styled.lower>
        <Styled.blocks>
          <TouchableWithoutFeedback
            onPress={() => {
              setType(1);
            }}
          >
            <Styled.menuBlock style={{ borderBottomColor: type === 1 ? "#5571FF" : "#fff" }}>
              <Styled.menuText style={{ color: type === 1 ? "#5571FF" : "#000" }}>학습기록</Styled.menuText>
            </Styled.menuBlock>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setType(2);
            }}
          >
            <Styled.menuBlock style={{ borderBottomColor: type === 2 ? "#5571FF" : "#fff" }}>
              <Styled.menuText style={{ color: type === 2 ? "#5571FF" : "#000" }}>나의 학습현황</Styled.menuText>
            </Styled.menuBlock>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setType(3);
            }}
          >
            <Styled.menuBlock style={{ borderBottomColor: type === 3 ? "#5571FF" : "#fff" }}>
              <Styled.menuText style={{ color: type === 3 ? "#5571FF" : "#000" }}>CHERY멘토</Styled.menuText>
            </Styled.menuBlock>
          </TouchableWithoutFeedback>
        </Styled.blocks>
      </Styled.lower>
    </Styled.body>
  );
};
export default StudyStatusHeader;
