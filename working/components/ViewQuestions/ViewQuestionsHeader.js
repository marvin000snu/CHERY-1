import React from "react"
import styled from "styled-components"
import PrevIcon from "../../svg/PrevIcon"

const Styled={
    Header: styled.View`
        width:100%;
        height:105px;
        background-color:#5471FF;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:flex-end;
    `,
    HeaderBox: styled.View`
        width:90%;
        height:45px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:flex-end;
        margin-bottom:15px;
    `,
    Btn: styled.TouchableOpacity`
        width:auto;
        height:auto;
        margin-left:16px;
    `,
    HeaderText:styled.Text`
        font-size:30px;
        font-weight:bold;
        color:#fff;
        font-family:NotoSansKR-Bold;
    `,
}
const ViewQuestionsHeader=()=>{
    return(
        <Styled.Header>
            <Styled.HeaderBox>
                <Styled.Btn>
                    <PrevIcon width="20" height="28" color="#fff"/>
                </Styled.Btn>
                    <Styled.HeaderText>문항분석</Styled.HeaderText>
                <Styled.Btn />
            </Styled.HeaderBox>
        </Styled.Header>
    )
}
export default ViewQuestionsHeader