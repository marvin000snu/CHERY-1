import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BackArrow from "../img/BackArrow";
import { TouchableWithoutFeedback } from "react-native";
import GlobalStyled from "../../src/style/GlobalStyled";
import WordRec from "../../working/svg/WordRec";
import WordComplete from "../../working/svg/WordComplete";
import WordScrap from "../../working/svg/WordScrap";
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
    flex-direction: row;
  `,
  menuText: styled.Text`
    color: #909398;
    font-size: ${wp(4)}px;
    margin-left: 5px;
  `,
};
const WordHeader = (props) => {
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
        <GlobalStyled.ViewRow width="100px"></GlobalStyled.ViewRow>
      </Styled.upper>
      <Styled.lower>
        <Styled.blocks
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setType(1);
            }}
          >
            <Styled.menuBlock style={{ borderBottomColor: type === 1 ? "#5471ff" : "#fff" }}>
              <WordRec fill={type === 1 ? "#5471ff" : "#000"} size={wp(5)} />
              <Styled.menuText style={{ color: type === 1 ? "#5471ff" : "#000" }}>추천단어</Styled.menuText>
            </Styled.menuBlock>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setType(2);
            }}
          >
            <Styled.menuBlock style={{ borderBottomColor: type === 2 ? "#5471ff" : "#fff" }}>
              <WordScrap fill={type === 2 ? "#5471ff" : "#000"} size={wp(5)} />
              <Styled.menuText style={{ color: type === 2 ? "#5471ff" : "#000" }}>스크랩</Styled.menuText>
            </Styled.menuBlock>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setType(3);
            }}
          >
            <Styled.menuBlock style={{ borderBottomColor: type === 3 ? "#5471ff" : "#fff" }}>
              <WordComplete fill={type === 3 ? "#5471ff" : "#000"} size={wp(5)} />
              <Styled.menuText style={{ color: type === 3 ? "#5471ff" : "#000" }}>암기완료</Styled.menuText>
            </Styled.menuBlock>
          </TouchableWithoutFeedback>
        </Styled.blocks>
      </Styled.lower>
    </Styled.body>
  );
};
export default WordHeader;
