import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import BackArrow from "./svg/backArrow"
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAPI from "../src/hooks/useAPI";
import jwt_decode from "jwt-decode";

const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
        background-color:#fff;
    `,
    TopWrap: styled.View`
        width:100%;
        height:auto;
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
    `,
    Title: styled.Text`
        font-size:32px
        margin-top:88px;
        font-family:NotoSansKR-Bold;
        font-weight:bold;
        color:#5471FF;
    `,
    Wrap: styled.View`
        width:90%;
        height:242px;
        border:1px solid #979CA7;
        border-radius:10px;
        margin-top:48px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        background-color:#EDEDED;
    `,
    Box: styled.View`
        width:90%;
        height:212px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
    `,
    TextInputBox: styled.View`
        width:100%;
        height:63px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
    `,
    OK_Btn: styled.TouchableOpacity`
        width:180px;
        height:44px;
        border-radius:10px;
        background-color:#6F87FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        margin-bottom:103px;
    `,
    BtnText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-weight:500;
        font-size:18px;
        color:#fff;
    `,
    TextInputTitle: styled.Text`
        font-family:NotoSansKR-Bold;
        font-weight:500;
        font-size:16px;
        color:#1b2c49;  
    `,
    TextInput: styled.TextInput`
        width:100%;
        height:30px;
        border-radius:4px;
        border:1px solid #979CA7;
        padding: 0 0 0 10px;
        background-color:#fff;
    `,
    Header: styled.View`
        width:100%;
        height:83px;
        display:flex;
        justify-content:center;
        align-items:flex-end;
        flex-direction:row;
    `,
    HeaderElementBox: styled.View`
        width:90%;
        height:24px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    `,
    HeaderText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:20px;
        font-weight:bold;
        color:#1b2c49;
    `,
    PrevBtn: styled.TouchableOpacity`
        width:25px;
        height:35px;
    `,
    None: styled.View`
        width:25px;
        height:37px;
    `,
}
const Setting_PW_Change = () => {
    const [Password, setPassword] = useState("")
    const [NewPassword, setNewPassword] = useState("")
    const [PasswordCheck, setPasswordCheck] = useState("")
    const [API] = useCallback(useAPI(), []);
    const Check = async () => {
        try{
        if (NewPassword === "")
            throw new Error("비밀번호를 입력해 주세요");
        if (PasswordCheck === "")
            throw new Error("비밀번호를 다시 확인해 주세요");
        if (NewPassword.length <= 7)
            throw new Error("비밀번호는 8자리 이상이어야 합니다");
        if (PasswordCheck !== NewPassword)
            throw new Error("비밀번호를 다시 확인해 주세요");
        //아무 문제 없으면
        //accessToken으로 비밀번호를 제거 하는 거라, 꼭 필요함닷
        // if(social login)
        // throw new Error("social Login"); =? decode 해서 확인가능
        // 잘 작동하나 확인하기 위해서
        const accessToken = await AsyncStorage.getItem("@AccessToken");
        const userToken = await AsyncStorage.getItem("@userToken");
        if(jwt_decode(userToken)["custom:login_with"] === "social_id")
            throw new Error ("카카오 애플 로그인을 이용해 주세요");
            const passwordChange = await API.user.changePassword({
            PreviousPassword: Password,
            ProposedPassword: NewPassword,
            AccessToken: accessToken,
            });

            } catch (err) {
                /*
                현재 비밀번호가 틀렸을시: [NotAuthorizedException: Incorrect username or password.]
                token이 잘못됐을때(사용자 없을때) [NotAuthorizedException: Invalid Access Token]
                */
                if(err.message === "Invalid Access Token") {
                    alert("캐시를 지우셨네요, 로그인부터 다시해주세요!");
                    return;
                }
                alert(err.message);
                console.log(err);
            }
    }
        return (
        <Styled.background>
            <Styled.TopWrap>
                <Styled.Header>
                    <Styled.HeaderElementBox>
                        <Styled.PrevBtn>
                            <BackArrow color="#000" />
                        </Styled.PrevBtn>
                        <Styled.HeaderText>비밀번호 변경</Styled.HeaderText>
                        <Styled.None />
                    </Styled.HeaderElementBox>
                </Styled.Header>
                <Styled.Wrap>
                    <Styled.Box>
                        <Styled.TextInputBox>
                            <Styled.TextInputTitle>현재 비밀번호 입력</Styled.TextInputTitle>
                            <Styled.TextInput
                                onChangeText={text => setPassword(text)}
                                value={Password}
                                placeholder="비밀번호를 입력해 주세요"
                            />
                        </Styled.TextInputBox>
                        <Styled.TextInputBox>
                            <Styled.TextInputTitle>새 비밀번호 입력</Styled.TextInputTitle>
                            <Styled.TextInput
                                onChangeText={text => setNewPassword(text)}
                                value={NewPassword}
                                placeholder="8~12자리의 소문자/숫자로 PW를 설정해주세요."
                                secureTextEntry={true}
                            />
                        </Styled.TextInputBox>
                        <Styled.TextInputBox>
                            <Styled.TextInputTitle>새 비밀번호 재입력</Styled.TextInputTitle>
                            <Styled.TextInput
                                onChangeText={text => setPasswordCheck(text)}
                                value={PasswordCheck}
                                secureTextEntry={true}
                                placeholder="새 비밀번호를 다시 입력해 주세요"
                            />
                        </Styled.TextInputBox>
                    </Styled.Box>
                </Styled.Wrap>
            </Styled.TopWrap>
            <Styled.OK_Btn onPress={Check}>
                <Styled.BtnText>완료하기</Styled.BtnText>
            </Styled.OK_Btn>
        </Styled.background>
    )
}
export default Setting_PW_Change 