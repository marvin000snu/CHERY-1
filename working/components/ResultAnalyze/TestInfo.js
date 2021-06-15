import React from "react"
import styled from "styled-components"

const Styled={
    Wrap:styled.View`
        width:90%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin-top:15px;
    `,
    Guide:styled.View`
        width:30%;
        height:100%;
        border-radius:5px;
        background-color:#5571FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `,
    GuidText:styled.Text`
        font-size:16px;
        font-weight:500;
        color:#fff;
        font-family:NotoSansKR-Bold;
    `,
    TestInfoBox:styled.View`
        width:60%;
        height:100%;
        border:1px solid #5471FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-radius:5px;
    `,
    TestInfoText:styled.Text`
        font-size:16px;
        font-weight:500;
        color:#1b2c49;
        font-family:NotoSansKR-Bold;
    `,
}
const TestInfo=(props)=>{
    const {TestInfo} = props
    return(
        <Styled.Wrap>
            <Styled.Guide>
                <Styled.GuidText>시험정보</Styled.GuidText>
            </Styled.Guide>
            <Styled.TestInfoBox>
                <Styled.TestInfoText>{TestInfo}</Styled.TestInfoText>
            </Styled.TestInfoBox>
        </Styled.Wrap>
    )
}
export default TestInfo