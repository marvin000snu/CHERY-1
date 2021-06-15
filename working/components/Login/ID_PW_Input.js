import React from "react"
import styled from "styled-components"

const Styled = {
    CertifyBox: styled.View`
        width:90%;
        height:55px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
        margin: 0 0 10px 0 ;
    `,
    CertifyTitle: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:500;
        color:#1b2c49;
    `,
    CertifyInputWrap: styled.View`
        width:100%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    `,
    CertifyInput: styled.TextInput`
        width:100%;
        height:30px;
        border-radius:4px;
        border:1px solid #979CA7;
        padding: 0 0 0 4px;
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:500;
    `,
}
const ID_PW_Input = (props) => {
    const { title, onChange, value } = props
    if (title === "비밀번호") {
        return (
            <Styled.CertifyBox>
                <Styled.CertifyTitle>{title} 입력</Styled.CertifyTitle>
                <Styled.CertifyInputWrap>
                    <Styled.CertifyInputWrap>
                        <Styled.CertifyInput
                            value={value}
                            placeholder={title + "를 입력해 주세요."}
                            onChangeText={text => onChange(text)}
                            secureTextEntry={true}
                        />
                    </Styled.CertifyInputWrap>
                </Styled.CertifyInputWrap>
            </Styled.CertifyBox>
        )
    }
    if (title === "아이디") {
        return (
            <Styled.CertifyBox>
                <Styled.CertifyTitle>{title} 입력</Styled.CertifyTitle>
                <Styled.CertifyInputWrap>
                    <Styled.CertifyInputWrap>
                        <Styled.CertifyInput
                            value={value}
                            placeholder={title + "를 입력해 주세요."}
                            onChangeText={text => onChange(text)}
                        />
                    </Styled.CertifyInputWrap>
                </Styled.CertifyInputWrap>
            </Styled.CertifyBox>
        )
    }
}
export default ID_PW_Input