import React, { useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import ResultHeader from "./components/ResultAnalyze/ResultHeader"
import TestInfo from "./components/ResultAnalyze/TestInfo"
import Result from "./components/ResultAnalyze/Result"
const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
    `,
    Section: styled.View`
        width:${wp(100)};
        height:auto;
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
    `,
    CompleteBtn:styled.TouchableOpacity`
        width:180px;
        height:44px;
        background-color:#6F87FF;
        border-radius:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        margin-bottom:65px;
    `,
    CompleteBtnText:styled.Text`
        font-size:20px;
        font-weight: bold;
        font-family:NotoSansKR-Bold;
        color:#fff;
    `,
}

const AnalyzeResults = () => {
    const [ResultData, setResultData] = useState([
        { 1: ["180030921", "OK", "03:17", "Hard"] },
        { 2: ["180030922", "OK", "03:17", "Hard"] },
        { 3: ["180030923", "NO", "03:17", "Normal"] },
        { 4: ["180030924", "NO", "04:17", "Easy"] },
        { 5: ["180030925", "OK", "03:17", "Hard"] }
    ])
    return (
        <Styled.background>
            <Styled.Section>
                <ResultHeader />
                <TestInfo TestInfo="04월 28일 매일학습" />
                <Result ResultData={ResultData} />
            </Styled.Section>
            <Styled.CompleteBtn>
                <Styled.CompleteBtnText>완료하기</Styled.CompleteBtnText>
            </Styled.CompleteBtn>
        </Styled.background>
    )
}
export default AnalyzeResults