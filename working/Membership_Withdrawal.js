import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import SettingHeader from "./components/Setting/SettingHeader"
import Door from "./svg/Door"
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ID_PW_Input from "./components/Login/ID_PW_Input"
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
        justify-content:space-between;
        align-items:center;
    `,
    Img_Section: styled.View`
        width:90%;
        height:168px;
        margin-top:${hp(5)};
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
    `,
    Img_Section_Text: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:13px;
        font-weight:400;
        color:#1b2c49;
        text-align: center;
    `,
    InfoBox: styled.View`
        width:90%;
        height:auto;
        margin-top:${hp(2)}
    `,
    InfoBoxText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:13px;
        font-weight:400;
        color:#1b2c49;
    `,
    CertifiedWrap: styled.View`
        width:90%;
        height:150px;
        margin-top:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        border-radius:10px;
        border:1px solid #BBC2CF;
    `,
    BtnWrap: styled.View`
        width:80%;
        height:44px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin-bottom:8%;
    `,
    WithDrawalBtn: styled.TouchableOpacity`
        width:140px;
        height:44px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-radius:22px;
        border:1px solid #5471FF;
    `,
    WithDrawalBtnText: styled.Text`
        font-size:18px;
        font-weight:500;
        color:#5471FF;
        font-family:NotoSansKR-Bold;;
    `,
    CancelBtn: styled.TouchableOpacity`
        width:140px;
        height:44px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-radius:22px;
        border:1px solid #BBC2CF;
    `,
    CancelBtnText: styled.Text`
        font-size:18px;
        font-weight:500;
        color:#BBC2CF;
        font-family:NotoSansKR-Bold;
    `,
}
const Membership_Withdrawal = () => {
    const [API] = useCallback(useAPI(), []);
    const [ID, setID] = useState("")
    const [PW, setPW] = useState("")
    const clearAllData = () => {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
    };    
    const miseSignOut = async () => {
        //사실 accessToken만 있어도 삭제 가능, 그래도 장려하지 않기 위해 휴대폰 인증
        //작동하는 것 확인함
        /*
        const testResult = await API.test.isTested(params);
        await AsyncStorage.setItem("@userToken", result[0]);
        await AsyncStorage.setItem("@AccessToken", result[1]);

        */
        try{
            /*전화번호 대신 다시 로그인
            const result = await API.user.login({ userId: ID, password: PW });
            const accessToken = await result[1];
            const signOut = await API.user.deleteUser({
                AccessToken: accessToken,
            });
            clearAllData();
            */
            } catch (err) {
                /*
                token이 잘못됐을때(사용자 없을때) [NotAuthorizedException: Invalid Access Token]
                */
                console.log(err);
            }
      }
    return (
        <Styled.background>
            <Styled.TopWrap>
                <SettingHeader text="회원탈퇴" height="115" marginBottom="25" />
                <Styled.Img_Section>
                    <Door />
                    <Styled.Img_Section_Text>CHERY 회원 탈퇴시,{"\n"}아래  주의사항을 반드시 읽어주세요.</Styled.Img_Section_Text>
                </Styled.Img_Section>
                <Styled.InfoBox>
                    <Styled.InfoBoxText>・ CHERY를 탈퇴하면 정보 및 남은 체리,아이템 등 모든 기록이 삭제되며 복구 및 환불을 할 수 없습니다.</Styled.InfoBoxText>
                    <Styled.InfoBoxText>・  최초 가입한 아이디 비밀번호를 다시 입력해야만 탈퇴가 가능합니다 </Styled.InfoBoxText>
                </Styled.InfoBox>
                <Styled.CertifiedWrap>
                    <ID_PW_Input title="아이디" value={ID} onChange={setID}/>
                    <ID_PW_Input title="비밀번호" value={PW} onChange={setPW}/>
                </Styled.CertifiedWrap>
            </Styled.TopWrap>
            <Styled.BtnWrap>
                <Styled.WithDrawalBtn onPress = {miseSignOut}>
                    <Styled.WithDrawalBtnText>회원탈퇴</Styled.WithDrawalBtnText>
                </Styled.WithDrawalBtn>
                <Styled.CancelBtn>
                    <Styled.CancelBtnText>취소</Styled.CancelBtnText>
                </Styled.CancelBtn>
            </Styled.BtnWrap>
        </Styled.background>
    )
}
export default Membership_Withdrawal