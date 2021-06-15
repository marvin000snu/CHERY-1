import React from 'react';
import styled from 'styled-components/native';

const PassIdFindBtn= function(props){
    const findText = props.findText;
    const Styled = {
        wrap: styled.View`
            width:100%;
            height:120px;
            display:flex;
            justify-content:space-around;
            align-items:center;
            flex-flow:column;
        `,
        Idfind: styled.View`
            width:80%;
            height:40%;
            background-color:#666;
        `,
        section: styled.View`
            width:92%;
            height:40%;
            display:flex;
            justify-content:space-around;
            align-items:center;
            flex-direction : row;
        `,
        passfind: styled.Text`
            width:37%;
            height:100%;
            background-color:#F3F3F3;
            text-align : center;
            line-height: 45px;
        `,
        login: styled.Text`
            width:37%;
            height:100%;
            background-color:#1B2C49;
            color:#fff;
            text-align : center;
            line-height: 45px;
        `,
    };
    return(
        <Styled.wrap>
            <Styled.Idfind></Styled.Idfind>
            <Styled.section>
                <Styled.passfind>{findText} 찾기</Styled.passfind>
                <Styled.login>로그인</Styled.login>
            </Styled.section>
        </Styled.wrap>
    );
};
export {PassIdFindBtn}