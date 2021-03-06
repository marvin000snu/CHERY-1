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
            throw new Error("??????????????? ????????? ?????????");
        if (PasswordCheck === "")
            throw new Error("??????????????? ?????? ????????? ?????????");
        if (NewPassword.length <= 7)
            throw new Error("??????????????? 8?????? ??????????????? ?????????");
        if (PasswordCheck !== NewPassword)
            throw new Error("??????????????? ?????? ????????? ?????????");
        //?????? ?????? ?????????
        //accessToken?????? ??????????????? ?????? ?????? ??????, ??? ????????????
        // if(social login)
        // throw new Error("social Login"); =? decode ?????? ????????????
        // ??? ???????????? ???????????? ?????????
        const accessToken = await AsyncStorage.getItem("@AccessToken");
        const userToken = await AsyncStorage.getItem("@userToken");
        if(jwt_decode(userToken)["custom:login_with"] === "social_id")
            throw new Error ("????????? ?????? ???????????? ????????? ?????????");
            const passwordChange = await API.user.changePassword({
            PreviousPassword: Password,
            ProposedPassword: NewPassword,
            AccessToken: accessToken,
            });

            } catch (err) {
                /*
                ?????? ??????????????? ????????????: [NotAuthorizedException: Incorrect username or password.]
                token??? ???????????????(????????? ?????????) [NotAuthorizedException: Invalid Access Token]
                */
                if(err.message === "Invalid Access Token") {
                    alert("????????? ???????????????, ??????????????? ??????????????????!");
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
                        <Styled.HeaderText>???????????? ??????</Styled.HeaderText>
                        <Styled.None />
                    </Styled.HeaderElementBox>
                </Styled.Header>
                <Styled.Wrap>
                    <Styled.Box>
                        <Styled.TextInputBox>
                            <Styled.TextInputTitle>?????? ???????????? ??????</Styled.TextInputTitle>
                            <Styled.TextInput
                                onChangeText={text => setPassword(text)}
                                value={Password}
                                placeholder="??????????????? ????????? ?????????"
                            />
                        </Styled.TextInputBox>
                        <Styled.TextInputBox>
                            <Styled.TextInputTitle>??? ???????????? ??????</Styled.TextInputTitle>
                            <Styled.TextInput
                                onChangeText={text => setNewPassword(text)}
                                value={NewPassword}
                                placeholder="8~12????????? ?????????/????????? PW??? ??????????????????."
                                secureTextEntry={true}
                            />
                        </Styled.TextInputBox>
                        <Styled.TextInputBox>
                            <Styled.TextInputTitle>??? ???????????? ?????????</Styled.TextInputTitle>
                            <Styled.TextInput
                                onChangeText={text => setPasswordCheck(text)}
                                value={PasswordCheck}
                                secureTextEntry={true}
                                placeholder="??? ??????????????? ?????? ????????? ?????????"
                            />
                        </Styled.TextInputBox>
                    </Styled.Box>
                </Styled.Wrap>
            </Styled.TopWrap>
            <Styled.OK_Btn onPress={Check}>
                <Styled.BtnText>????????????</Styled.BtnText>
            </Styled.OK_Btn>
        </Styled.background>
    )
}
export default Setting_PW_Change 