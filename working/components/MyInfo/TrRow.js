import React from "react"
import styled from "styled-components"
import Level from "./atom/Level"
const Styled = {
    TrWrap: styled.View`
        width:68px;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        border:1px solid #DBDCDC;
    `,
    TrImg: styled.View`
        width:100%;
        height:71px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `,
    TrTitle: styled.View`
        width:100%;
        height:19px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        background-color:#E6EBFF;
    `,
    TrTitleText: styled.Text`
        font-size:14px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#23447C;
    `,
    Criteria: styled.View`
        width:100%;
        height:35px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-bottom-width:0.5px;
        border-top-width:0.5px;
        border-color:#DBDCDC;
    `,
    CriteriaText: styled.Text`
        font-size:10px;
        font-weight:500;
        color:#5D636C;
        font-family:NotoSansKR-Bold;
    `,
    Complete: styled.View`
        width:100%;
        height:54px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-bottom-width:0.5px;
        border-top-width:0.5px;
        border-color:#DBDCDC;
    `,
    CompleteText: styled.Text`
        font-size:11px;
        font-weight:500;
        color:#5D636C;
        font-family:NotoSansKR-Bold;
        text-align:center;
    `,
    Attendance: styled.View`
        width:100%;
        height:36px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-bottom-width:0.5px;
        border-top-width:0.5px;
        border-color:#DBDCDC;
    `,
    AttendanceText: styled.Text`
        font-size:10px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#5D636C;
    `,
}
const TrRow = (props) => {
    const {LevelData} = props
    return (
        <Styled.TrWrap>
            <Styled.TrImg>
                <Level level={Object.values(LevelData)[0][0]}/>
            </Styled.TrImg>
            <Styled.TrTitle>
                <Styled.TrTitleText>씨앗</Styled.TrTitleText>
            </Styled.TrTitle>
            <Styled.Attendance>
                <Styled.AttendanceText>출석 {Object.values(LevelData)[0][1]}회 이상</Styled.AttendanceText>
            </Styled.Attendance>
            <Styled.Criteria>
                <Styled.CriteriaText>체리 {Object.values(LevelData)[0][2]}개</Styled.CriteriaText>
            </Styled.Criteria>
            <Styled.Complete>
                <Styled.CompleteText>문항{"\n"} {Object.values(LevelData)[0][3]}문제 완료</Styled.CompleteText>
            </Styled.Complete>
        </Styled.TrWrap>
    )
}
export default TrRow