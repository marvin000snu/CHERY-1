import React from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Header from "./components/MyInfo/Header"
import TrWrap from "./components/MyInfo/TrWrap"
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
        height:378px;
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
    Title:styled.Text`
        font-size:17px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    Text:styled.Text`
        font-size:14px;
        font-weight:400;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    TableWrap:styled.View`
        width:100%;
        height:313px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
    `,
    ThWrap:styled.View`
        width:100%;
        height:32px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
        background-color:#F6F5F6;
    `,
    ThBox:styled.View`
        width:26.4%;
        height:100%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        background-color:#DBDCDC;
    `,
    ThInfo:styled.View`
        width:20%;
        height:100%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        background-color:#DBDCDC;
    `,
    ThText:styled.Text`
        font-size:14px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#5D636C;
    `,
    
}
const MyTest = (props) => {
    const {modalCloseHandler} = props
    var grade = [1,2,3]
    var month = [3,4,6,7,9,11]
    
    return (
        <Styled.background>
            <Header title="나의 모의고사" backHandler={modalCloseHandler}/>
            <Styled.Section>
                <Styled.SectionTextBox>
                    <Styled.Title>최근 모의고사 성적기록</Styled.Title>
                    <Styled.Text>최근 모의고사 성적을 모두 입력해주세요.</Styled.Text>
                </Styled.SectionTextBox>
                <Styled.TableWrap>
                    <Styled.ThWrap>
                        <Styled.ThInfo>
                            <Styled.ThText>모의고사</Styled.ThText>
                        </Styled.ThInfo>
                        {grade.map((v)=>{
                            return(
                                <Styled.ThBox>
                                    <Styled.ThText>{v}학년</Styled.ThText>
                                </Styled.ThBox>
                            )
                        })}
                    </Styled.ThWrap>
                    {month.map((v)=>{
                        return(
                            <TrWrap month={v}/>
                        )
                    })}
                </Styled.TableWrap>
            </Styled.Section>
        </Styled.background>
    )
}
export default MyTest