import React, { useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import PrevBtn from "./components/Find/PrevBtn"
import InputWrap from "./components/Find/InputWrap"
const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
        background-color:white;
    `,
    Title:styled.Text`
        font-size:32px
        margin-top:88px;
        font-family:NotoSansKR-Bold;
        font-weight:bold;
        color:#5571FF;
    `,  
    LittleTitle:styled.Text`
        font-size:16px;
        font-family:NotoSansKR-Bold;
        font-weight:400;
        color:#202020;
        margin-top:12px;
    `,
    NextBtn:styled.TouchableOpacity`
        width:180px;
        height:44px;
        background-color:#6F87FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-radius:10px;
        margin-top:168px;
    `,
    NextText:styled.Text`
        font-size:20px;
        color:#fff;
        font-family:NotoSansKR-Bold;
        font-weight:bold;
    `,
}
const Find_ID=(props)=>{
    const navigation = props.navigation;
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const CheckData=()=>{
        if(name===""){
            alert("이름을 입력해주세요")
        }else if(number === ""){
            alert("전화번호를 입력해주세요")
        }else{
            navigation.navigate("Find_ID_OK")
        }
    }
    return(
        <Styled.background>
            <PrevBtn backHandler={()=>{navigation.navigate("Login")}} />
            <Styled.Title>아이디 찾기</Styled.Title>
            <Styled.LittleTitle>아이디를 잊으셨나요?</Styled.LittleTitle>
            <InputWrap 
                name={name} 
                setName={setName} 
                number={number} 
                setNumber={setNumber}
            />
            <Styled.NextBtn onPress={CheckData}>
                <Styled.NextText>다음</Styled.NextText>
            </Styled.NextBtn>
        </Styled.background>
    )
}
export default Find_ID