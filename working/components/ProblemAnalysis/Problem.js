import React from "react"
import styled from "styled-components"

const Styled={
    Wrap:styled.View`
        width:100%;
        height:auto;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:column;
        border-bottom-width:1px;
        border-color:#DBDCDC;
    `,
    Explanation:styled.Text`
        width:90%;
        height:auto;
        margin-top:15px;
    `,
    MainText:styled.Text`
        width:90%;
        height:auto;
        margin-top:26px;
        margin-bottom:17px;
    `,
}
const Problem=(props)=>{
    const {MainText, Explanation}= props
    return(
        <Styled.Wrap>
            <Styled.Explanation>{Explanation}</Styled.Explanation>
            <Styled.MainText>{MainText}</Styled.MainText>
        </Styled.Wrap>
    )
}
export default Problem