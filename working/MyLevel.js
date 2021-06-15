import React, { useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Header from "./components/MyInfo/Header"
import TrRow from "./components/MyInfo/TrRow"

const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
        background-color:#fff;
    `,
    Section: styled.View`
        width:95%;
        height:330px;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:center;
        margin-top:20px;
    `,
    SectionTextBox: styled.View`
        width:100%;
        height:55px;
        display:flex;
        justify-content:space-between;
        flex-direction:column;
        align-items:flex-start;
    `,
    Title: styled.Text`
        font-size:17px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    Text: styled.Text`
        font-size:14px;
        font-weight:400;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    Table: styled.View`
        width:100%;
        height:215px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        flex-direction:row;
    `,
    MyLevelBox: styled.View`
        width:95%;
        height:30px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:row;
    `,
    MyLevel: styled.Text`
        font-size:14px;
        font-weight:400;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    MyLevelStrong: styled.Text`
        font-size:14px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
}
const MyLevel = (props) => {
    const {modalCloseHandler} = props
    const [Info, setInfo] = useState([
        { 1: [1, 0, 0, 0] },
        { 2: [2, 5, 10, 10] },
        { 3: [3, 15, 30, 30] },
        { 4: [4, 30, 50, 100] },
        { 5: [5, 50, 100, 200] },
        // [레벨, 출석, 체리수, 완료문항 수]
    ])
    const [info2, setInfo2] = useState([
        { 1: [1, 0, 0, 0] }
    ])
    return (
        <Styled.background>
            <Header title="단계안내" backHandler={modalCloseHandler}/>
            <Styled.Section>
                <Styled.SectionTextBox>
                    <Styled.Title>체리 레벨 등급 안내</Styled.Title>
                    <Styled.Text>체리레벨 단계에 대한 설명입니다.</Styled.Text>
                </Styled.SectionTextBox>
                <Styled.Table>
                    {Info.map((v) => {
                        return (
                            <TrRow LevelData={v} />
                        )
                    })}
                </Styled.Table>
                <Styled.MyLevelBox>
                    <Styled.MyLevel>현재 김도은님의 단계는 <Styled.MyLevelStrong>새싹등급</Styled.MyLevelStrong>입니다.</Styled.MyLevel>
                </Styled.MyLevelBox>
            </Styled.Section>
        </Styled.background>
    )
}
export default MyLevel