import React from "react"
import styled from "styled-components"
import Home from "../../svg/Home"
import Study from "../../svg/Study"
import Voca from "../../svg/Voca"
import Chery from "../../svg/Chery"

const Styled={
    Footer: styled.View`
        width:100%;
        height:86px;
        border-top-width:1px;
        border-color:#DBDCDC;
        display:flex;
        justify-content:space-around;
        flex-direction:row;
        align-items:flex-start;
    `,
    FooterMenuWrap: styled.View`
        width:85%;
        height:51px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:flex-start;
        margin-top:8px;
    `,
    FooterBtn: styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
    FooterMenuBox: styled.View`
        width:48px;
        height:41px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    `,
    FooterMenuText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-weight:bold;
        font-size:13px;
        color:#BBC2CF;
    `,
}
const Footer=()=>{
    return(
        <Styled.Footer>
                <Styled.FooterMenuWrap>
                    <Styled.FooterBtn>
                        <Styled.FooterMenuBox>
                            <Home />
                            <Styled.FooterMenuText>홈</Styled.FooterMenuText>
                        </Styled.FooterMenuBox>
                    </Styled.FooterBtn>
                    <Styled.FooterBtn>
                        <Styled.FooterMenuBox>
                            <Study />
                            <Styled.FooterMenuText>학습현황</Styled.FooterMenuText>
                        </Styled.FooterMenuBox>
                    </Styled.FooterBtn>
                    <Styled.FooterBtn>
                        <Styled.FooterMenuBox>
                            <Voca />
                            <Styled.FooterMenuText>단어장</Styled.FooterMenuText>
                        </Styled.FooterMenuBox>
                    </Styled.FooterBtn>
                    <Styled.FooterBtn>
                        <Styled.FooterMenuBox>
                            <Chery />
                            <Styled.FooterMenuText>마이체리</Styled.FooterMenuText>
                        </Styled.FooterMenuBox>
                    </Styled.FooterBtn>
                </Styled.FooterMenuWrap>
            </Styled.Footer>
    )
}
export default Footer