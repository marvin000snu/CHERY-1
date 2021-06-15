import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
const Styled = {
    Wrapper: styled.TouchableOpacity`
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      background-color: blue;
    `,
    iconWrapper: styled.View`
      height: 100%;
      width: 20%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    testWrapper: styled.View`
      height: 100%;
      width: 80%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    selectCircle: styled.View`
        height : 50px;
        border-radius: 25px;
        width : 50px;
        border : 2px solid #6881FF
        display : flex;
        justify-content : center;
        align-items: center;
    
        `,
    selectCircleText: styled.Text`
      font-weight: bold;
      font-size: 25px;
    `,
    selectText: styled.Text`
      width: 100%;
      font-size: 18px;
      color: #1b2c49;
    `,
  };
const DirectSolveSelect = (props) => {
  const { index, value, selectHandler } = props;

  return (
    <Styled.Wrapper
      onPress={() => {
        selectHandler(index);
      }}
    >
      <Styled.iconWrapper>
        <Styled.selectCircle style={{ backgroundColor: value === index ? "#6881FF" : "white" }}>
          <Styled.selectCircleText style={{ color: value === index ? "white" : "#6881FF" }}>{index}</Styled.selectCircleText>
        </Styled.selectCircle>
      </Styled.iconWrapper>
      <Styled.testWrapper>
        <Styled.selectText>{props.text}</Styled.selectText>
      </Styled.testWrapper>
    </Styled.Wrapper>
  );
};

export { DirectSolveSelect };
