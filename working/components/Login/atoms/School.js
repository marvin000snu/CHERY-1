import React from "react"
import styled from "styled-components"

const Styled={
    Wrap:styled.View`
        width:100%;
        height:63px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
    `,
    Title:styled.Text`
        font-size:16px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    InputWrap:styled.View`
        width:100%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:row;
    `,
    Input:styled.TextInput`
        width:72%;
        height:30px;
        border-radius:4px;
        border:1px solid #979CA7;
        padding: 0 0 0 5px;
        font-size:15px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    FindSchoolBtn:styled.TouchableOpacity`
        width:25%;
        height:30px;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        border-radius:4px;
        background-color:#5471FF;
    `,
    BtnText:styled.Text`
        font-size:16px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#fff;
    `,
}
const School = (props) => {
    const {school, setSchool, onPress} = props;
    return(
        <Styled.Wrap>
            <Styled.Title>학교</Styled.Title>
            <Styled.InputWrap>
                <Styled.Input placeholder="N수생은 졸업한 고등학교 입력" 
                    onChangeText={text => setSchool(text)}
                    value={school}
                />
                <Styled.FindSchoolBtn onPress = {onPress}>
                    <Styled.BtnText>학교찾기</Styled.BtnText>
                </Styled.FindSchoolBtn>
            </Styled.InputWrap>
        </Styled.Wrap>
    )
}
export default School