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
        //?????? accessToken??? ????????? ?????? ??????, ????????? ???????????? ?????? ?????? ????????? ??????
        //???????????? ??? ?????????
        /*
        const testResult = await API.test.isTested(params);
        await AsyncStorage.setItem("@userToken", result[0]);
        await AsyncStorage.setItem("@AccessToken", result[1]);

        */
        try{
            /*???????????? ?????? ?????? ?????????
            const result = await API.user.login({ userId: ID, password: PW });
            const accessToken = await result[1];
            const signOut = await API.user.deleteUser({
                AccessToken: accessToken,
            });
            clearAllData();
            */
            } catch (err) {
                /*
                token??? ???????????????(????????? ?????????) [NotAuthorizedException: Invalid Access Token]
                */
                console.log(err);
            }
      }
    return (
        <Styled.background>
            <Styled.TopWrap>
                <SettingHeader text="????????????" height="115" marginBottom="25" />
                <Styled.Img_Section>
                    <Door />
                    <Styled.Img_Section_Text>CHERY ?????? ?????????,{"\n"}??????  ??????????????? ????????? ???????????????.</Styled.Img_Section_Text>
                </Styled.Img_Section>
                <Styled.InfoBox>
                    <Styled.InfoBoxText>??? CHERY??? ???????????? ?????? ??? ?????? ??????,????????? ??? ?????? ????????? ???????????? ?????? ??? ????????? ??? ??? ????????????.</Styled.InfoBoxText>
                    <Styled.InfoBoxText>???  ?????? ????????? ????????? ??????????????? ?????? ??????????????? ????????? ??????????????? </Styled.InfoBoxText>
                </Styled.InfoBox>
                <Styled.CertifiedWrap>
                    <ID_PW_Input title="?????????" value={ID} onChange={setID}/>
                    <ID_PW_Input title="????????????" value={PW} onChange={setPW}/>
                </Styled.CertifiedWrap>
            </Styled.TopWrap>
            <Styled.BtnWrap>
                <Styled.WithDrawalBtn onPress = {miseSignOut}>
                    <Styled.WithDrawalBtnText>????????????</Styled.WithDrawalBtnText>
                </Styled.WithDrawalBtn>
                <Styled.CancelBtn>
                    <Styled.CancelBtnText>??????</Styled.CancelBtnText>
                </Styled.CancelBtn>
            </Styled.BtnWrap>
        </Styled.background>
    )
}
export default Membership_Withdrawal