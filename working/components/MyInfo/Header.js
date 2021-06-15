import React from "react"
import styled from "styled-components"
import BackArrow from "../../svg/backArrow"

const Styled = {
    Wrap: styled.View`
        width:100%;
        height:15%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:flex-end;
        border-bottom-width:2px;
        border-color:#DBDCDC;
    `,
    TextBox: styled.View`
        width:90%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin-bottom:10px;
    `,
    Title: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:20px;
        font-weight:bold;
        color:#1b2c49;
    `,
    PrevBtn: styled.TouchableOpacity`
        width:25px;
        height:auto;
    `,
    none:styled.View`
        width:25px;
        height:1px;
    `,
}
const Header = (props) => {
    const {backHandler} = props
    return (
        <Styled.Wrap>
            <Styled.TextBox>
                <Styled.PrevBtn onPress={backHandler}>                
                    <BackArrow />
                </Styled.PrevBtn>
                <Styled.Title>{props.title}</Styled.Title>
                <Styled.none />
            </Styled.TextBox>
        </Styled.Wrap>
    )
}
export default Header