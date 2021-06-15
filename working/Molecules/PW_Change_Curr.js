//현재 비밀번호 입력 추가 ()
import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import PrevBtn from "../components/Find/PrevBtn"
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAPI from "../../src/hooks/useAPI";
const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
    `,
    Wrap: styled.View`
        width:${wp(90)}px;
        height:${hp(25)}px
        border:1px solid #979CA7;
        border-radius:10px;
        margin-top:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        background-color: #EDEDED;
    `,
    Box: styled.View`
        width:${wp(80)};
        height:${hp(22)};
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
    `,
    TextInputBox: styled.View`
        width:100%;
        height: ${hp(7)};
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
        margin-top:163px;
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
        background-color: #fff;
    `,
    Header: styled.View `
    width: ${wp(90)}px;
    flex-flow: row;
    align-items: flex-end;
    `,
    HeaderText: styled.Text`
    margin-left: ${wp(25)}px;
    fontFamily: "NotoSansCJKkr-Bold";
    font-size: ${wp(5)}px;
    `,
    Icon: styled.View`
    width: ${wp(5)}px;

    `,
    
}
const PW_Change_Curr = () => {
    const [currentPassword, setCurrentPassword] = useState("")
    const [NewPassword, setNewPassword] = useState("")
    const [PasswordCheck, setPasswordCheck] = useState("")
    const [API] = useCallback(useAPI(), []);
    const Check = async () => {
        if (NewPassword === "") {
            alert("비밀번호를 입력해 주세요")
        } if (PasswordCheck === "") {
            alert("비밀번호를 다시 확인해 주세요")
        } else if (NewPassword.length <= 7) {
            if (PasswordCheck.length <= 7) {
                alert("비밀번호는 8자리 이상이어야 합니다")
            }else{
            }
        }if (PasswordCheck === NewPassword){
        //조건충족
        }else{
            alert("비밀번호를 다시 확인해 주세요")
        }
        //아무 문제 없으면
        try{
        const accessToken = await AsyncStorage.getItem("@AccessToken");
            const passwordChange = await API.user.changePassword({
            PreviousPassword: currentPassword,
            ProposedPassword: NewPassword,
            AccessToken: accessToken,
          });
        } catch (err) {
            /*
            현재 비밀번호가 틀렸을시: [NotAuthorizedException: Incorrect username or password.]
            token이 잘못됐을때(사용자 없을때) [NotAuthorizedException: Invalid Access Token]
            */
            console.log(err);
        }
  }
    return (
        <Styled.background>
            <Styled.Header>
                <Styled.Icon>
            <PrevBtn />
            </Styled.Icon>
            <Styled.HeaderText>비밀번호 변경</Styled.HeaderText>
            </Styled.Header>
            <Styled.Wrap>
                <Styled.Box>
                <Styled.TextInputBox>
                        <Styled.TextInputTitle>현재 비밀번호 입력</Styled.TextInputTitle>
                        <Styled.TextInput
                            onChangeText={text => setCurrentPassword(text)}
                            value={currentPassword}
                            placeholder="비밀번호를 입력해 주세요"
                            secureTextEntry={true}
                        />
                    </Styled.TextInputBox>
                    <Styled.TextInputBox>
                        <Styled.TextInputTitle>새 비밀번호 입력</Styled.TextInputTitle>
                        <Styled.TextInput
                            onChangeText={text => setNewPassword(text)}
                            value={NewPassword}
                            placeholder="새 비밀번호를 입력해 주세요"
                            secureTextEntry={true}
                        />
                    </Styled.TextInputBox>
                    <Styled.TextInputBox>
                        <Styled.TextInputTitle>새 비밀번호 입력</Styled.TextInputTitle>
                        <Styled.TextInput
                            onChangeText={text => setPasswordCheck(text)}
                            placeholder="새 비밀번호를 다시 입력해 주세요"
                            value={PasswordCheck}
                            secureTextEntry={true}
                        />
                    </Styled.TextInputBox>
                </Styled.Box>
            </Styled.Wrap>
            <Styled.OK_Btn onPress={Check}>
                <Styled.BtnText>완료</Styled.BtnText>
            </Styled.OK_Btn>
        </Styled.background>
    )
}
export default PW_Change_Curr