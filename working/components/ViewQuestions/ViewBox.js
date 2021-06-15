import React from "react"
import styled from "styled-components"
import moment from "moment";
import testNameParser from "../../../src/function/testNameParser"
const Styled = {
    Wrap: styled.TouchableOpacity`
        width:100%;
        height:43px;
        border-radius:5px;
        border:1px solid #DBDCDC;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        margin-bottom:12px;
    `,
    TextBox: styled.View`
        width:85%;
        height:auto;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
    `,
    Text: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:15px;
        font-weight:500;
        color:#1b2c49;
    `,
    SubText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:14px;
        font-weight:500;
        color:#909398;
    `,
}
const ViewBox = (props) => {
    const { textData,moveHandler } = props
    return (
        <Styled.Wrap onPress={moveHandler}>
            <Styled.TextBox>
                <Styled.Text>{textData.name ? testNameParser(textData.name) :testNameParser(moment(textData.time).format("YYYYMMDD"))}</Styled.Text>
                <Styled.SubText>{textData.correct_Q}/{textData.given_Q}</Styled.SubText>
            </Styled.TextBox>
        </Styled.Wrap>
    )
}
export default ViewBox