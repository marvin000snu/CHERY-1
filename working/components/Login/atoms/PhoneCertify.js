import React from "react"
import styled from "styled-components"

const Styled = {
    CertifyBox: styled.View`
        width:100%;
        height:63px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
        margin:10px 0 0 0;
    `,
    CertifyTitle: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:500;
        color:#1b2c49;
    `,
    CertifyInput: styled.TextInput`
        width:100%;
        height:30px;
        border-radius:4px;
        border:1px solid #979CA7;
        padding: 0 0 0 10px;
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:500;
    `,
}
const PhoneCertify = (props) => {
    const {setPhoneNumber} = props
    return (
            <Styled.CertifyBox>
                <Styled.CertifyTitle>휴대폰 번호</Styled.CertifyTitle>
                <Styled.CertifyInput placeholder="-없이 입력해 주세요." onChangeText={(text)=>setPhoneNumber(text)}/>
            </Styled.CertifyBox>
    )
}
export default PhoneCertify