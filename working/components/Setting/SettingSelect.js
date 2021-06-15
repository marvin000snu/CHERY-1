import React from "react"
import styled from "styled-components"
import Next from "../../svg/Next"
const Styled = {
    SectionElementWrap: styled.TouchableOpacity`
        width:100%;
        height:40px;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        background-color:#fff;
    `,
    SectionElementBox: styled.View`
        width:90%;
        height:18px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
    `,
    SectionText: styled.Text`
        font-size:15px;
        font-family:NotoSansKR-Bold;
        font-weight:400;
        color:#1b2c49;
    `,
    NextBtn: styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
}
const SettingSelect = (props) => {
    const { text,pressHandler } = props
    return (
        <Styled.SectionElementWrap onPress={pressHandler}>
            <Styled.SectionElementBox>
                <Styled.SectionText>{text}</Styled.SectionText>
            </Styled.SectionElementBox>
                <Next />
        </Styled.SectionElementWrap>
)
}
export default SettingSelect