import React, { useState } from "react"
import styled from "styled-components"
import PrevImg from "../../svg/PrevImg"
import HeaderSelectBtn from "./atom/HeaderSelectBtn"

const Styled = {
    Wrap: styled.View`
        width:100%;
        height:132px;
        background-color:#fff;
        display:flex;
        justify-content:flex-end;
        flex-direction:column;
        align-items:flex-start;
    `,
    HeaderTitleWrap: styled.View`
        width:55%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin-left:15px;
    `,
    HeaderTitle: styled.Text`
        font-size:20px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    PrevBtn: styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
    SelectBtnWrap: styled.View`
        width:100%;
        height:35px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    `,

}
const FriendHeader = (props) => {
    const {setSelectHeaderBtn, SelectHeaderBtn} = props
    const [HeaderBtnText, setHeaderBtnText] = useState(["친구", "체리샵"])
    return (
        <Styled.Wrap>
            <Styled.HeaderTitleWrap>
                <Styled.PrevBtn>
                    <PrevImg width="20" height="30" color="#000" />
                </Styled.PrevBtn>
                <Styled.HeaderTitle>마이체리</Styled.HeaderTitle>
            </Styled.HeaderTitleWrap>
            <Styled.SelectBtnWrap>
                {HeaderBtnText.map((v, idx) => {
                    return (
                        <HeaderSelectBtn
                            SelectHeaderBtn={SelectHeaderBtn}
                            setSelectHeaderBtn={setSelectHeaderBtn}
                            text={v}
                            index={idx}
                        />
                    )
                })}
            </Styled.SelectBtnWrap>
        </Styled.Wrap>
    )
}
export default FriendHeader