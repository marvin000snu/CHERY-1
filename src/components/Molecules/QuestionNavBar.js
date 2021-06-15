import React, { useState } from "react";
import styled from "styled-components/native";
const QuestionNavBar = (props) => {
  const { setPresentValue, presentValue, movePage } = props;
  const selectHandler = (i) => {
    setPresentValue(i);
  };
  const Styled = {
    nav: styled.View`
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    `,
    navlist: styled.Text`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    navlist1: styled.TouchableOpacity`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 400;
      color: ${(props) =>
        props.id !== presentValue + 1 ? "#a4b6d6" : "#5471FF"};
    `,
    navlist2: styled.Text`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 500;
      color: ${(props) =>
        props.id !== presentValue + 1 ? "#a4b6d6" : "#5471FF"};
    `,
    navListText: styled.Text`
      text-align: center;
      font-size: 15px;
      font-weight: 400;
      color: ${(props) =>
        props.id !== presentValue + 1 ? "#a4b6d6" : "#5471FF"};
    `,
  };
  return (
    <Styled.nav>
      <Styled.navlist1
        onPress={() => {
          selectHandler(0);
          movePage(0)
        }}
        
      >
        <Styled.navListText id={1}>어휘</Styled.navListText>
      </Styled.navlist1>
      <Styled.navlist1
        onPress={() => {
          selectHandler(1);
          movePage(1)
        }}
      >
        <Styled.navListText id={2} >유사문항</Styled.navListText>
      </Styled.navlist1>
      <Styled.navlist1
        onPress={() => {
          selectHandler(2);
          movePage(2)
        }}
      >
        <Styled.navListText id={3}>예측오답률</Styled.navListText>
      </Styled.navlist1>
      <Styled.navlist1
        onPress={() => {
          selectHandler(3);
          movePage(3)
        }}
      >
        <Styled.navListText id={4}>주요구문</Styled.navListText>
      </Styled.navlist1>
      <Styled.navlist1
        onPress={() => {
          selectHandler(4);
          movePage(4)
        }}
      >
        <Styled.navListText id={5}>지문난이도</Styled.navListText>
      </Styled.navlist1>
    </Styled.nav>
  );
};

export { QuestionNavBar };
