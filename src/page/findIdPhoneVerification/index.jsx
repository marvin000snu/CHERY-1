import * as React from "react";
import styled from 'styled-components/native'
import { PrevBtn } from "../../components/Molecules/PrevBtn";
import { SignUpInput } from "../../components/Molecules/SignUpInput";
import {PhoneCertify} from "../../components/Molecules/PhoneCertify"
import { PhoneCertifyCheck } from "../../components/Molecules/PhoneCertifyCheck";
import Constants from "expo-constants"
const findIdPhoneVerificationPage = () => {
    const Styled = {
        body: styled.View`
        margin-top : ${Constants.statusBarHeight}px;
          width:100%;
          height:812px;
          display:flex;
          justify-content:flex-start;
          align-items:center;
          flex-flow:column;
          background-color : white;
        `,
        section: styled.View`
          width:100%;
          height:762px;
          display:flex;
          justify-content:flex-start;
          align-items:center;
          flex-flow:column;
        `,
        SignUpBtn: styled.View`
          width: 75%;
          height: 50px;
          background-color: #097FF5;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          font-size: 16px;
          font-weight: bold;
        `,
        findText: styled.View`
          width:250px;
          height:150px;
          text-align:center;
          margin-bottom:22px;
        `,
        btn: styled.View`
            width:100%;
            height:50px;
        `,
        certiBox:styled.View`
          width:90%;
          height:40%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-flow:column;
    
        `,
        h2: styled.Text`
        font-size : 32px; 
        font-weight : bold; 
        color : #097FF5;
        text-align : center;
        margin-top : 25.6px;
        margin-bottom : 25.6px;
        `,p: styled.Text`
        font-weight: bold;
        font-size: 12px;
        text-align : center;
        margin-top : 12px ;
        margin-bottom : 12px ;
        `,
      };

    return (
        <Styled.body>
            <Styled.btn>
                <PrevBtn/>
            </Styled.btn>
            <Styled.section>
                <Styled.findText>
                    <Styled.h2 >????????? ??????</Styled.h2>
                    <Styled.p >???????????? ????????????????{"\n"}?????? ?????? ??? ???????????? ???????????? ???????????????.</Styled.p>
                </Styled.findText>
                <Styled.certiBox>
                    <SignUpInput inputTitle={"??????"} />
                    <SignUpInput inputTitle={"???????????? ??????"} />
                    <PhoneCertify inputTitle="????????? ??????" />
                    <PhoneCertifyCheck inputTitle="????????????" />
                </Styled.certiBox>
            </Styled.section>
        </Styled.body>
    )
}

export { findIdPhoneVerificationPage }