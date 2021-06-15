import React from "react"
import styled from "styled-components"
import ResultInfo from "./atom/ResultInfo"

const Styled = {
    Wrap: styled.View`
        width:90%;
        height:auto;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
        margin-top:29px;
    `,
    InfoBox: styled.View`
        width:100%;
        height:30px;
        background-color:#5571FF;
        border-radius:25px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
    `,
    ListText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:15px;
        font-weight:500;
        color:#fff;
    `,
    List: styled.View`
        width:25%;
        height:100%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
    `,
    ReasultInfo: styled.View`
        width:25%;
        height:100%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
    `,
}
const Result = (props) => {
    const { ResultData } = props
    var list = ["문항코드", "결과", "소요시간", "난이도"]
    return (
        <Styled.Wrap>
            <Styled.InfoBox>
                {list.map((v) => {
                    return (
                        <Styled.List>
                            <Styled.ListText>{v}</Styled.ListText>
                        </Styled.List>
                    )
                })}
            </Styled.InfoBox>
            {ResultData.map((v, i) => {
                return (
                    <ResultInfo 
                        data={Object.values(v)} 
                    />
                )
            })}
        </Styled.Wrap>
    )
}
export default Result

