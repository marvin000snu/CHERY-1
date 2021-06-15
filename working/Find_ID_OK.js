import React, { useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import PrevBtn from "./components/Find/PrevBtn"
const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
        background-color:white
    `,
    Title: styled.Text`
        font-size:32px
        margin-top:88px;
        font-family:NotoSansKR-Bold;
        font-weight:bold;
        color:#5571FF;
    `,
    LittleTitle: styled.Text`
        font-size:16px;
        font-family:NotoSansKR-Bold;
        font-weight:400;
        color:#202020;
        margin-top:12px;
    `,
    ID_Wrap: styled.Text`
        width:70%;
        height:44px;
        border:1px solid #979CA7;
        display : flex;
        flex-direction: row;
        justify-content:center;
        align-items:center;
        font-family:NotoSansKR-Bold;
        font-weight:400;
        font-size:15px;
        color:#1b2c49;
        text-align:center;
        padding:10px;
        margin-top:40px;
    `,
    BtnWrap: styled.View`
        width:70%;
        height:44px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin-top:60%;
    `,
    LoginBtn: styled.TouchableOpacity`
        width:140px;
        height:44px;
        border-radius:10px;
        background-color:#6F87FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `,
    Find_PW_Btn: styled.TouchableOpacity`
        width:140px;
        height:44px;
        border-radius:10px;
        background-color:#6F87FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `,
    BtnText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-weight:500;
        font-size:18px;
        color:#fff;
    `,
}
const Find_ID_OK = (props) => {
    const navigation  = props.navigation
    const [id, setId]  = useState("SAMPLE")
    const loginHandler = ()=>{
        navigation.navigate("Login")
    }
    const findPasswordHandler = ()=>{
        navigation.navigate("Find_PW")
    }
    return (
        <Styled.background>
            <PrevBtn />
            <Styled.Title>아이디 찾기</Styled.Title>
            <Styled.LittleTitle>아이디를 찾았습니다.</Styled.LittleTitle>
            <Styled.ID_Wrap>{id}</Styled.ID_Wrap>
            <Styled.BtnWrap>
                <Styled.LoginBtn onPress={loginHandler}>
                    <Styled.BtnText>로그인</Styled.BtnText>
                </Styled.LoginBtn>
                <Styled.Find_PW_Btn onPress={findPasswordHandler}>
                    <Styled.BtnText>비밀번호 찾기</Styled.BtnText>
                </Styled.Find_PW_Btn>
            </Styled.BtnWrap>
        </Styled.background>
    )
}
export default Find_ID_OK