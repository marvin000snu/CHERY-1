import React, { useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import PrevBtn from "./components/Find/PrevBtn"
import PW_Data from "./components/Find/PW_Data"

const Styled = {
    background: styled.View`
        background-color: white;
        width: ${wp(100)};
        height: ${hp(100)};
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
        color:#5571FF;
    `,
    LittleTitle: styled.Text`
        font-size:16px;
        font-family:NotoSansKR-Bold;
        font-weight:400;
        color:#202020;
        margin-top:12px;
    `,
    DataWrap: styled.View`
        width:85%;
        height:328px;
        border:1px solid #DBDCDC;
        border-radius:10px;
        margin-top:40px;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
    `,
    DataBox: styled.View`
       width:90%;
       height: 87%;
       display:flex;
       justify-content:space-between;
       align-items:center;
       flex-direction:column;
    `,
    NextBtnText:styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:20px;
        font-weight:500;
        color:#fff;
    `,
}
const Find_PW = (props) => {
    const navigation = props.navigation;
    const [data, setData] = useState(["아이디", "이름", "휴대전화", "인증번호"])
    const [Number1, setNumber1] = useState("")
    const [Number2, setNumber2] = useState("")
    const [Number3, setNumber3] = useState("")
    const [PassNumber, setPassNumber] = useState("")
    const [Certified, setCertified] = useState("")
    const [color, setColor] = useState(true)
    const NextBtn=styled.TouchableOpacity`
        width:180px;
        height:44px;
        border-radius:10px;
        background-color:#6F87FF;
        opacity:${color === true ? 0.3 : 1};
        margin-top:25px;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
    `
    const loginHandler=()=>{
        navigation.navigate("Login")
    }
    return (
        <Styled.background>
            <PrevBtn backHandler={()=>{navigation.navigate("Login")}}/>
            <Styled.Title>비밀번호 찾기</Styled.Title>
            <Styled.LittleTitle>비밀번호를 잊으셨나요</Styled.LittleTitle>
            <Styled.DataWrap>
                <Styled.DataBox>
                    {data.map((v) => {
                        return (
                            <PW_Data 
                                Title={v} 
                                Number1={Number1}
                                Number2={Number2}
                                Number3={Number3}
                                setNumber1={setNumber1}
                                setNumber2={setNumber2}
                                setNumber3={setNumber3}
                                Certified={Certified}
                                setCertified={setCertified}
                                PassNumber={PassNumber}
                                setPassNumber={setPassNumber}
                            />
                        )
                    })}
                </Styled.DataBox>
            </Styled.DataWrap>
            <NextBtn onPress={loginHandler}>
                <Styled.NextBtnText>다음</Styled.NextBtnText>
            </NextBtn>
        </Styled.background>
    )
}
export default Find_PW