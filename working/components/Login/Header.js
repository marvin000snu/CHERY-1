import React from "react"
import styled from "styled-components"

const Styled = {
    Section: styled.View`
        width:90%;
        height:25px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin-bottom:10px;
    `,
    SectionTitle: styled.Text`
        font-size:16px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#000000;
    `,
    none: styled.View`
        width:29px;
        height:10px;
    `,
    CancelBtn: styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
    CancelText: styled.Text`
        font-size:16px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#000000;
    `,
}
const Header = (props) => {
    const Wrap = styled.View`
        width:100%;
        height:88px;
        background-color:${props.BackgroundColor}};
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:flex-end;
    `
    const CancelText= styled.Text`
        font-size:16px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:${props.color};
    `
    const SectionTitle=styled.Text`
        font-size:16px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:${props.color};
    `
    return (
        <Wrap>
            <Styled.Section>
                <Styled.none />
                <SectionTitle>{props.title}</SectionTitle>
                <Styled.CancelBtn>
                    <CancelText>취소</CancelText>
                </Styled.CancelBtn>
            </Styled.Section>
        </Wrap>
    )
}
export default Header