import React from "react"
import styled from "styled-components"
const LoginBtn =(props)=>{
    const {loginText, Logo, color, fontColor} = props;
    const Wrap = styled.View`
        width:100%;
        height:45px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        background-color: ${color};
        border-radius:5px;
    `
    const Text=styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:bold;
        color: ${fontColor};
        margin-left:5px;
    `
        return(
            <Wrap>
                <Logo />
                <Text> {loginText}계정으로 로그인하기
                </Text>
            </Wrap>
        )    
}
export default LoginBtn