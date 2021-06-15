import React from "react"
import styled from "styled-components"

const Styled = {
    TrWrap: styled.View`
        width:100%;
        height:32px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
        background-color:#DBDCDC;
    `,
    TrMonth: styled.View`
        width:20%;
        height:100%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        background-color:#DBDCDC;
    `,
    TrBox: styled.TouchableOpacity`
        width:26.4%;
        height:100%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        background-color:#F6F5F6;
    `,
    TrText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:14px;
        font-weight:400;
        color:#1b2c49;
    `,
}

const TrWrap = (props) => {
    return (
        <Styled.TrWrap>
            <Styled.TrMonth>
                <Styled.TrText>{props.month}월</Styled.TrText>
            </Styled.TrMonth>
            <Styled.TrBox>
                <Styled.TrText>-</Styled.TrText>
            </Styled.TrBox>
            <Styled.TrBox>
                <Styled.TrText>91</Styled.TrText>
            </Styled.TrBox>
            <Styled.TrBox>
                <Styled.TrText>-</Styled.TrText>
            </Styled.TrBox>
        </Styled.TrWrap>
    )
}
export default TrWrap