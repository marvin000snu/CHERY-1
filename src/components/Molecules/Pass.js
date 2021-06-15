import React from "react";
import styled from "styled-components/native";

const Pass = function (props) {
    const {rating, passth} = props
  const Styled = {
    box: styled.View`
      width: 100%;
      height: 46px;
      background-color: #47c4ee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction : row;
    `,
    tbox1:styled.Text`
        width:auto;
        height:20px;
        font-size:15px;
        font-weight:400;
        color:#fff;
        margin-left:10px;
        line-height: 20px
    `,
    tbox2:styled.Text`
        width:auto;
        height:20px;
        font-size:15px;
        font-weight:400;
        color:#fff;
        line-height: 20px
        margin-right:10px;
    `,
  };
  return (
  <Styled.box>
      <Styled.tbox1>{passth}</Styled.tbox1>
      <Styled.tbox2>{rating}</Styled.tbox2>
  </Styled.box>
  );
};
export { Pass };
