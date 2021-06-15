import React from 'react';
import styled from 'styled-components/native';

const SignUpInput = function (props){
    const inputTitle = props.inputTitle
    const Styled = {
        wrap: styled.View`
            width:75%;
            height:60px;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-flow:column;
        `,
        name: styled.Text`
            width:100%;
            height:25%;
            margin-bottom:8px;
            font-size:12px;
        `,
        input:styled.TextInput`
            width:100%;
            height:75%;
            border-radius:10px;
            border:2px solid #E6ECEF;
            padding:0 0 0 10px;
        `,

    };

    return(
        <Styled.wrap>
            <Styled.name>{inputTitle}</Styled.name>
            <Styled.input placeholder={inputTitle}></Styled.input>
        </Styled.wrap>
    );
}
export {SignUpInput}