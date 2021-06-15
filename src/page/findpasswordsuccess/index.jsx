import React from 'react';
import styled from 'styled-components/native';
import { PrevBtn } from "../../components/Molecules/PrevBtn";
import { SignUpInput } from "../../components/Molecules/SignUpInput";

const findPasswordSuccessPage = function () {

    const Styled = {
        body: styled.View`
        width:100%;
        height:812px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-flow:column;
      `,
        btn: styled.View`
        width:100%;
        height:50px;
      `,
        section: styled.View`
        width:100%;
        height:550px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-flow:column;
      `,
        findText: styled.View`
        width:230px;
        height:100px;
        text-align:center;
        margin-bottom:72px;
        margin-top:130px;
      `,
        passwordSuccess: styled.Text`
        width:78%;
        height:50px;
        background-color:#1B2C49;
        color:#fff;
        font-size:18px;
        margin-top:30px;
        text-align : center;
        line-height : 45px;
      `, h2: styled.Text`
      font-size : 32px; 
      font-weight : bold; 
      color : #097FF5;
      text-align : center;
      margin-top : 25.6px;
      margin-bottom : 25.6px;
      `,
        p: styled.Text`
      font-weight: bold;
      font-size: 12px;
      text-align : center;
      margin-top : 12px ;
      margin-bottom : 12px ;
      `,
    }
    return (
        <Styled.body>
            <Styled.btn>
                <PrevBtn />
            </Styled.btn>
            <Styled.section>
                <Styled.findText>
                    <Styled.h2>비밀번호 변경</Styled.h2>
                    <Styled.p>새로운 비밀번호를 만들어 주세요.</Styled.p>
                </Styled.findText>
                <SignUpInput inputTitle={"새비밀번호"}></SignUpInput>
                <SignUpInput inputTitle={"비밀번호 확인"}></SignUpInput>
                <Styled.passwordSuccess>완료</Styled.passwordSuccess>
            </Styled.section>
        </Styled.body>
    );
}
export { findPasswordSuccessPage }