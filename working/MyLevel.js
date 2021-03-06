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
        // [??????, ??????, ?????????, ???????????? ???]
    ])
    const [info2, setInfo2] = useState([
        { 1: [1, 0, 0, 0] }
    ])
    return (
        <Styled.background>
            <Header title="????????????" backHandler={modalCloseHandler}/>
            <Styled.Section>
                <Styled.SectionTextBox>
                    <Styled.Title>?????? ?????? ?????? ??????</Styled.Title>
                    <Styled.Text>???????????? ????????? ?????? ???????????????.</Styled.Text>
                </Styled.SectionTextBox>
                <Styled.Table>
                    {Info.map((v) => {
                        return (
                            <TrRow LevelData={v} />
                        )
                    })}
                </Styled.Table>
                <Styled.MyLevelBox>
                    <Styled.MyLevel>?????? ??????????????? ????????? <Styled.MyLevelStrong>????????????</Styled.MyLevelStrong>?????????.</Styled.MyLevel>
                </Styled.MyLevelBox>
            </Styled.Section>
        </Styled.background>
    )
}
export default MyLevel