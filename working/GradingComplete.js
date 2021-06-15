import React, {useState} from "react"
import styled from "styled-components"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import Grading from "./svg/Grading"
import Grade_End_Btn from "./components/GradingComponents/Grade_End_Btn"

const Styled={
    background : styled.View`
        background-color:#fff;
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
    `,
    Header:styled.View`
        width:${wp(100)};
        height:${hp(40)};
        background-color:#5571FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    `,
    Section:styled.View`
        width:80%;
        height:${hp(60)};
        background-color:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
    `,
    CompleteText:styled.Text`
        font-size:20px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
        margin-top:55px;
    `,
    BtnWrap:styled.View`
        width:100%;
        height:120px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        margin-bottom:50px;
    `,
}
const GradingComplete=(props)=>{
    const [BtnColor, setBtnColor] = useState(["결과보기", "완료하기"])
    return(
        <Styled.background>
            <Styled.Header>
                <Grading />
            </Styled.Header>
            <Styled.Section>
                <Styled.CompleteText>AI가 채점을 완료하였습니다.</Styled.CompleteText>
                <Styled.BtnWrap>
                    {BtnColor.map((v, index)=>{
                        return(
                            <Grade_End_Btn color={index} text={v}/>
                        )
                    })}
                </Styled.BtnWrap>
            </Styled.Section>
        </Styled.background>
    )
}
export default GradingComplete