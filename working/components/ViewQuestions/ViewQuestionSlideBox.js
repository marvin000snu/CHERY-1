import React from "react"
import styled from "styled-components"
import codeParser from "../../../src/function/codeParser"
const Styled = {
    SlideBox: styled.TouchableOpacity`
        width:123px;
        height:123px;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
        border-radius:5px;
        margin-horizontal:12px;
        border:2px solid #5571FF;
        background-color:#fff;
    `,
    Box_Top: styled.View`
        width:100%;
        height:38px;
        background-color:#5571FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `,
    BoxTitle: styled.Text`
        font-size:17px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#fff;
    `,
    BoxSection:styled.View`
        width:100%;
        height:83px;
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        align-items:center;
    `,
    BoxSectionTitle:styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:500;
        color:#787A7E;
    `,
    BoxSectionText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:12px;
        font-weight:500;
        color:#787A7E;
        text-align:center; 
    `,
}
const ViewQuestionSlideBox = (props) => {
    const {WrongData,onPress} = props 
    return (
        <Styled.SlideBox onPress={onPress}>
            <Styled.Box_Top>
                <Styled.BoxTitle>{WrongData.type}</Styled.BoxTitle>
            </Styled.Box_Top>
            <Styled.BoxSection>
                <Styled.BoxSectionTitle>매일학습 {WrongData.number}번</Styled.BoxSectionTitle>
                <Styled.BoxSectionText>{codeParser(WrongData.code)}</Styled.BoxSectionText>
            </Styled.BoxSection>
        </Styled.SlideBox>
    )
}
export default ViewQuestionSlideBox