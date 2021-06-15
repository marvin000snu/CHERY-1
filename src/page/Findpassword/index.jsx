import React from "react";
import styled from "styled-components/native";
import { SignUpInput } from "../../components/Molecules/SignUpInput";
const findPasswordPage = () => {
    const Styled = {
    body: styled.View`
      width:100%;
      height:812px;
      display:flex;
      justify-content:flex-start;
      align-items:center;
      flex-flow:column;
    `,
    section: styled.View`
      width:100%;
      height:250px;
      display:flex;
      justify-content:space-around;
      align-items:center;
      flex-flow:column;
    `,
    SignUpBtn: styled.TouchableOpacity`
      width: 80%;
      height: 50px;
      background-color: #1b2c49;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      font-size: 18px;
      font-weight: bold;
    `,
    BtnText: styled.Text`
        color: #fff;
    `,
    findText: styled.View`
      width:230px;
      height:150px;
      text-align:center;
      margin-bottom:72px;
      margin-top:130px;
    `, 
    h2: styled.Text`
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

    };
    const signUpButtonHandler = ()=>{
        alert("비밀번호 찾기 실행")
    }
    return (
        <Styled.body>
            <Styled.findText>
                <Styled.h2>비밀번호 찾기</Styled.h2>
                <Styled.p>비밀번호를 잊으셨나요?{"\n"}
        이름과 아이디를 입력해주세요</Styled.p>
            </Styled.findText>
            <Styled.section>
                <SignUpInput inputTitle={"이름"} />
                <SignUpInput inputTitle={"아이디"} />
                <Styled.SignUpBtn onPress={signUpButtonHandler}><Styled.BtnText>비밀번호 찾기</Styled.BtnText></Styled.SignUpBtn>
            </Styled.section>
        </Styled.body>
    );
};

export { findPasswordPage };
