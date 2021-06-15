import React from "react"
import styled from "styled-components"
import CheckBtn from "./atoms/CheckBtn"

const LoginFunction=(props)=>{
    const {Check, setCheck} = props;
    const Styled={
        Wrap:styled.View`
            width:270px;
            height:20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
            margin-top:30px;
        `,
        KeepLoginWrap:styled.View`
            width:120px;
            height:20px;
            display:flex;
            justify-content:space-between;
            flex-direction:row;
            align-items:center;
        `,

        KeepLoginText:styled.Text`
            color:#A4B6D6;
            font-weight:bold;
            font-size:15px;
            font-family:NotoSansKR-Bold;
        `,
        NotOurUserBtn:styled.TouchableOpacity`
            width:auto;
            height:auto;
        `,
        NotOurUser:styled.Text`
            color:#6F87FF;
            font-weight:bold;
            font-size:15px;
            font-family:NotoSansKR-Bold;
        `,
    }
    const notSignUpHandler = () => {
        props.navigation.navigate("SignUpStack", { screen: "SignUp" });
      };
    
    return(
        <Styled.Wrap>
            <Styled.KeepLoginWrap>
                <CheckBtn Check={Check} setCheck={setCheck}/>
                <Styled.KeepLoginText>로그인 유지하기</Styled.KeepLoginText>
            </Styled.KeepLoginWrap>
            <Styled.NotOurUserBtn onPress = {notSignUpHandler}>
                <Styled.NotOurUser>회원이 아니신가요?</Styled.NotOurUser>
            </Styled.NotOurUserBtn>
        </Styled.Wrap>
    )
}
export default LoginFunction