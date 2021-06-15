import React, { useState, useCallback, useEffect } from "react"
// 실행하는중에 에러가 나는 부분은 주석처리를 했습니다.
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Header from "./components/Login/Header"
import PlusInfo from "./components/Login/PlusInfo"
import Conditions from "./components/Login/Conditions"
import useAPI from "../src/hooks/useAPI";
const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
        background-color:#F3F3F3;
    `,
    MembershipBtn: styled.TouchableOpacity`
        width:180px;
        height:40px;
        border-radius:25px;
        background-color:#6F87FF;
        margin-top:50%;
        display : flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    `,
    MemberShipText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:18px;
        font-weight:500;
        color:#fff;
    `,





}
const KakaoLogin = ({ navigation, route }) => {
    const {userId, password, name} = route.params;
    const [API] = useCallback(useAPI(), []);
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [school, setSchool] = useState("");
        const onPress = async () => {  
            try { //일단 무조건 phone number는 여기서 받는다고 생각 =
                    const result = await API.user.register({
                      userId: userId,
                      password: password,
                      name: name,
                      phoneNumber: PhoneNumber,
                      confirmPhoneNumber: "",
                      school: school,
                      loginWith: "social_id",
                    });
                    alert("인증문자를 발송했습니다.");
                    navigation.navigate("SignUpStack", { screen: "PhoneCertificate", params: {userSession:result} });
    } catch (err) {
        if(err.message === "PreSignUp failed with error social_login_link.") { //원래 social login 이셨구, 문제 없이 연동된겁니다
            alert("이미 가입되어있어요, 카카오 연동은 v2에서 신속 안내해드릴게요!")
//            const authCallBack = await API.auth.callBack({body: {id: userId}});
            //navigate to login Page
        }
        }
        }
    const [acceptList, setAcceptList] = useState([true, true, true, true]);
    useEffect(()=>{
    }, [PhoneNumber])
    return (
        <Styled.background>
            <Header BackgroundColor="#FFDD0A" title="카카오계정 로그인" color="#000" />
            <PlusInfo 
                school={school} 
                setSchool={setSchool} 
                setPhoneNumber={setPhoneNumber}
            />
            {/* onPress = {onPress} PlusInfo부분에 들어있었습니다*/}
            <Conditions
                acceptList={acceptList}
                setAcceptList={setAcceptList}
            />
            {/* onPress = {onPress} MembershipBtn 부분에 들어있었습니다*/}
            <Styled.MembershipBtn onPress ={onPress}>
                <Styled.MemberShipText>회원가입</Styled.MemberShipText>
            </Styled.MembershipBtn>
        </Styled.background>
    )
}
export default KakaoLogin