import React from "react";
import styled from "styled-components/native";
import PersonIconPurple from "../../images/iconSvg/personIconPurple"

const Period = function (props) {
    const {message, period, color} = props
  const Styled = {
    wrap: styled.View`
      width: 85%;
      height: 80%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-direction: row;
    `,
    box: styled.View`
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-flow: column;
      background-color: #eee ;
      border-radius: 6px;
      flex-direction : column
      margin-top : 5px;
    `,
    tbox: styled.Text`
      width: auto;
      height: 20%;
      color: #1b2c49;
      font-size: 15px;
      font-weight: 400;
    `,
    one: styled.View`
      width: 20%;
      height: 100%;
      border-radius: 30px;
      justify-content: center;
      align-items: center;
    `,
    tbox2: styled.View`
      width: 80%;
      height: 100%;
      justify-content: center;
      align-items: flex-start;
    `,
    styledText : styled.Text`
    font-size: 15px;
    font-weight: 400;
    `
  };
  return (
    <Styled.box>
      <Styled.tbox>{message}</Styled.tbox>
      <Styled.wrap>
        <Styled.one>
          <PersonIconPurple size={40} color={color}></PersonIconPurple>
        </Styled.one>
        <Styled.tbox2><Styled.styledText>{period}</Styled.styledText></Styled.tbox2>
      </Styled.wrap>
    </Styled.box>
  );
};
export { Period };
