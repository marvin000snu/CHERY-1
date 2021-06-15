import React from 'react';
import styled from 'styled-components/native';
import { PrevBtn } from "../../components/Molecules/PrevBtn";
import { PassIdFindBtn } from "../../components/Molecules/PassIdFindBtn";

const findIdSuccessPage = function () {
    const Styled = {
        body: styled.View`
        width:100%;
        height:812px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-flow:column;
        background-color : white;
      `,
        btn: styled.View`
        width:100%;
        height:50px;
      `,
        section: styled.View`
        width:100%;
        height:762px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-flow:column;
      `,
        findText: styled.View`
        width:230px;
        height:100px;
        text-align:center;
        margin-bottom:72px;
        margin-top:130px;
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
                    <Styled.h2>아이디 찾기</Styled.h2>
                    <Styled.p>아이디를 찾았습니다!</Styled.p>
                </Styled.findText>
                <PassIdFindBtn findText={"비밀번호"} />
            </Styled.section>
        </Styled.body>
    );
}
export { findIdSuccessPage }