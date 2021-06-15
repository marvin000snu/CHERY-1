import React, {useState} from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Modal from "react-native-modal";
import LoginPopup from "./LoginPopup";
import {useCallback} from "react";
import useAPI from '../src/hooks/useAPI';


const Styled = {
    background: styled.View`
        background-color:#5471FF;
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
    `,
    Text: styled.Text`
        font-weight:bold;
        font-size:28px;
        font-family:NotoSansKR-Bold;
        color:#fff;
        width:283px;
        height:auto;
        margin-top:100px;
    `,
    BtnWrap:styled.View`
        width:242px;
        height:84px;
        display : flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
        margin-bottom:45px;
    `,
    StartBtn:styled.TouchableOpacity`
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-radius:50px;
        border-width:2px;
        border-color:#fff;
    `,
    BtnText:styled.Text`
        font-weight:bold;
        font-size:20px;
        font-family:NotoSansKR-Bold;
        color:#fff;
    `,
    StartBox:styled.View`
        width:183px;
        height:24px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
    `,
    LoginInfoText:styled.Text`
        font-weight:bold;
        font-size:16px;
        font-family:NotoSansKR-Bold;
        color:#fff;
    `,
    LoginBox:styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
    LoginText:styled.Text`
        font-weight:bold;
        font-size:17px;
        font-family:NotoSansKR-Bold;
        text-decoration:underline;
        color:#fff;
        text-decoration-color:#fff;
    `,
}
const StartPage = (props) => {
    const [API] = useCallback(useAPI(), []);
    const [modalVisible, setModalVisible] = useState(false);
    const openHandler = () => {
        setModalVisible(true);
      };
      const closeHandler = () => {
        setModalVisible(false);
      };
      const testStartHandler = () => {
        setModalVisible(true);
      };
      
    return (
        <Styled.background>
            <Styled.Text>
                CHERY에 오신 것을{"\n"}
                환영합니다!!{"\n"}
                우선 AI가 당신의 실력을{"\n"}
                진단해드릴게요.
            </Styled.Text>
            <Styled.BtnWrap>
                <Styled.StartBtn onPress = {openHandler}>
                    <Styled.BtnText>시작하기</Styled.BtnText>
                </Styled.StartBtn>
                <Styled.StartBox>
                    <Styled.LoginInfoText>이미 회원이에요!</Styled.LoginInfoText>
                    <Styled.LoginBox onPress = {testStartHandler}>
                        <Styled.LoginText>로그인</Styled.LoginText>
                    </Styled.LoginBox>
                </Styled.StartBox>
            </Styled.BtnWrap>
            <Modal isVisible={modalVisible} onBackdropPress={closeHandler} backdropOpacity={0.5} style={{ margin: 0, padding: 0 }} animationType="slide">
                <LoginPopup navigation = {props.navigation} setModalVisible={setModalVisible}/>
      </Modal>

        </Styled.background>
    )
}
export default StartPage