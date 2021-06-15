import React from "react";
import styled from "styled-components/native";

const TestSelect = function (props) {
  const {SelectTitle} = props
  const Styled = {
    wrap: styled.View`
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
    title: styled.Text`
      width: 90%;
      height: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size:13px;
      margin-bottom:10px;
      color:#1B2C49;
    `,
    selectBar: styled.View`
        width:90%;
        height:35px;
        background-color:#eee;
        border-radius:4px;
    `,
  };
  return (
    <Styled.wrap>
      <Styled.title>{SelectTitle}</Styled.title>
      <Styled.selectBar></Styled.selectBar>
    </Styled.wrap>
  );
};
export { TestSelect };
