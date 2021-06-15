import React from "react"
import styled from "styled-components"
import BackArrow from "../../svg/backArrow"


const SettingHeader = (props) => {
    const {height, marginBottom} = props
    const Styled = {
        Wrap: styled.View`
            width:100%;
            height:${height}px;
            display:flex;
            justify-content:center;
            flex-direction:row;
            align-items:flex-end;
            background-color:#5471FF;
        `,
        PrevBtn: styled.TouchableOpacity`
            width:auto;
            height:auto;
        `,
        ElementWrap: styled.View`
            width:90%;
            height:30px;
            margin-bottom:${marginBottom}px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
        `,
        HeaderText: styled.Text`
            font-size:24px;
            font-weight: bold;
            color:#fff;
            font-family:NotoSansKR-Bold;
        `,
        None: styled.View`
            width:25px;
            height:37px;
        `,
    }
    return (
        <Styled.Wrap>
            <Styled.ElementWrap>
                <Styled.PrevBtn>
                    <BackArrow width="25" height="37" />
                </Styled.PrevBtn>
                <Styled.HeaderText>{props.text}</Styled.HeaderText>
                <Styled.None />
            </Styled.ElementWrap>
        </Styled.Wrap>
    )
}
SettingHeader.defaultProps = {
    height:"98",
    marginBottom:"15"
}
export default SettingHeader