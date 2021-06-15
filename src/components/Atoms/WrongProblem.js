import React from "react";
import styled from "styled-components/native";
import WeakAdd from "../../images/iconSvg/WeakAdd"
const WrongProblem = (props) => {
  const testName = props.testName;
  const testNum = props.testNum;
  const handleOnPress = props.handleOnPress;
  const id = props.id;
  const Styled = {
    wrongnum: styled.View`
      width: 100%;
      height: 18px;
      margin-top: 15px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    `,
    plus: styled.TouchableOpacity`
      width: 8%;
      minWidth: 18px;
      height: 18px;
      justify-content: center;
      align-items: center;
      display: flex;
    `,
    testnum: styled.View`
      width: 75px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #e9eff2;
      border-radius: 5px;
    `,
    p: styled.Text`
      font-size: 15px;
      font-weight: bold;
      color: #768092;
      padding: 3.5px;
      border-radius: 4px;
      height: 26px;
    `,
    p1: styled.Text`
    width : 60%
      font-size:12px;
      font-weight: 400;
      color:#1B2C49;
      text-align: center;
    `
  };
  return (
    <Styled.wrongnum>
      <Styled.p1>{testName}</Styled.p1>
      <Styled.testnum>
        <Styled.p>{testNum}</Styled.p>
      </Styled.testnum>
      <Styled.plus
        onPress={() => {
          handleOnPress(id);
        }}
      >
        <WeakAdd size={25}/>
      </Styled.plus>
    </Styled.wrongnum>
  );
};

export { WrongProblem };
