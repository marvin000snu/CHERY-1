import React from "react"
import styled from "styled-components"
import School from "./atoms/School"
import PhoneCertify from "./atoms/PhoneCertify"

const Styled={
    Wrap:styled.View`
        width:100%;
        height:200px;
        display:flex;
        justify-content:center;
        align-items:flex-start;
        flex-direction:row;
        background-color:#fff;
    `,
    Section: styled.View`
        width:84%;
        height:150px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
        margin-top:10px;
    `,
    Title:styled.Text`
        font-size:16px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
        margin-bottom:10px;
    `,

}
const PlusInfo =(props)=>{
    const {school, setSchool, onPress, setPhoneNumber} = props;
    return(
        <Styled.Wrap>
            <Styled.Section>
                <Styled.Title>추가정보 입력</Styled.Title>
                <School 
                    school={school} 
                    setSchool = {setSchool} 
                    onPress = {onPress}
                />
                <PhoneCertify 
                    setPhoneNumber={setPhoneNumber}
                />
            </Styled.Section>
        </Styled.Wrap>
    )
}
export default PlusInfo