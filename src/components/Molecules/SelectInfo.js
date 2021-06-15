import React from "react";
import styled from "styled-components/native";

const SelectInfo = function (props) {
    const { num, per }= props
  const Styled = {
    wrap: styled.View`
      width: 85%;
      height: 47px;
      display: flex;
      justify-content: space-between;
      flex-flow: column;
      align-items: center;
    `,
    
    btn: styled.View`
      width: 100%;
      height: 47px;
      background-color: #f7f9fd;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
      flex-direction : row;
    `,
    btnt1: styled.Text`
      height : 47px;
      font-size: 17px;
      font-weight: 500;
      color: #1b2c49;
      width:30px;
      height:100%;
      line-height : 47px;

    `,
    btnt2: styled.Text`
       font-size:28px;
       font-weight: 500;
       color: ${ props => props.color>30 ? "#FFC200" :(props.color>10? "#48A3FF":"#00BE3C")};
    `,
  };
  return (
    <Styled.wrap>
      <Styled.btn>
        <Styled.btnt1>{num}번</Styled.btnt1>
        <Styled.btnt2 color={per}>{per}%</Styled.btnt2>
        <Styled.btnt1></Styled.btnt1>
      </Styled.btn>
    </Styled.wrap>
  );
};
export { SelectInfo };

