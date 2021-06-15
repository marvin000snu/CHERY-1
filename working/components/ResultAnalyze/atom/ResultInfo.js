import React from "react"
import styled from "styled-components"
import Wrong_right from "./Wrong_right"

const Styled = {
    ReasultBox: styled.TouchableOpacity`
        width:100%;
        height:30px;
        background-color:#fff;
        border:1px solid #D3DDFB;
        border-radius:25px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
        margin-top:10px;
    `,
    ReasultInfo: styled.View`
        width:25%;
        height:100%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
    `,
    ReasultInfoText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:14px;
        font-weight:400;
        color:#1b2c49;
    `,
}
const ResultInfo = (props) => {
    const { data } = props
    return (
        <Styled.ReasultBox>
            <Styled.ReasultInfo>
                <Styled.ReasultInfoText>{Object.values(data)[0][0]}</Styled.ReasultInfoText>
            </Styled.ReasultInfo>
                <Wrong_right data={Object.values(data)[0][1]} />
            <Styled.ReasultInfo>
                <Styled.ReasultInfoText>{Object.values(data)[0][2]}</Styled.ReasultInfoText>
            </Styled.ReasultInfo>
            <Styled.ReasultInfo>
                <Styled.ReasultInfoText>{Object.values(data)[0][3]}</Styled.ReasultInfoText>
            </Styled.ReasultInfo>
        </Styled.ReasultBox>
    )
}
export default ResultInfo