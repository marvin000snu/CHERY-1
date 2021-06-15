import React from "react";
import styled from "styled-components";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
  } from "react-native-responsive-screen";
  
const TestTitle = (props) => {
    const {Title, SubTitle} = props;
    const Styled = {
        Title: styled.View`
        margin-top: ${hp(10)}px;
        height: ${hp(10)}px;
        `,
        H1: styled.Text`
        font-size: ${wp(4)}px;
        text-align: center;
        font-weight: normal;
        color: white;
        line-height : ${wp(11)}px;
        `,
        H2: styled.Text`
        font-size: ${wp(7)}px;
        font-weight: normal;
        color: white;
        text-align: center;
        `,
    }
    return(
        <Styled.Title>
            <Styled.H1>
                {Title}
            </Styled.H1>
            <Styled.H2>
                {SubTitle}
            </Styled.H2>
        </Styled.Title>
    )
}
export default TestTitle;



