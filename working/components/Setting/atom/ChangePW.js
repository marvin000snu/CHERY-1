import React from "react"
import styled from "styled-components"

const ChangePW = (props) => {
    const {marginTop, width} = props
    const Styled = {
        Wrap: styled.View`
            width:${width}%;
            height:60px;
            display:flex;
            justify-content:space-between;
            align-items:flex-start;
            flex-direction:column;
            margin-top:${marginTop}px;
        `,
        Title:styled.Text`
            font-size:16px;
            font-weight:500;
            font-family:NotoSansKR-Bold;
            color:#1b2c49;
        `,
        Btn: styled.TouchableOpacity`
            width:100%;
            height:30px;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:row;
            border-radius:4px;
            border: 1px solid #979CA7;
        `,
        BtnText:styled.Text`
            font-family:NotoSansKR-Bold;
            font-weight:400;
            font-size:15px;
            color:#1b2c49;
        `,
    }
    return (
        <Styled.Wrap>
            <Styled.Title>{props.title}</Styled.Title>
            <Styled.Btn>
                <Styled.BtnText>비밀번호 변경하기</Styled.BtnText>
            </Styled.Btn>
        </Styled.Wrap>
    )
}
ChangePW.defaultProps = {
    marginTop:"0",
    width:100
}
export default ChangePW