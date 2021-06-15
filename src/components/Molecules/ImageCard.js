import React from 'react';
import styled from 'styled-components/native'
import GlobalStyled from '../../style/GlobalStyled';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TodayProblem from '../../images/iconSvg/today_problem'

const Styled = {
    Body: styled(GlobalStyled.ButtonCard)`
        margin-bottom  : ${hp("1%")}
        border-bottom-left-radius : ${parseFloat(wp("6%"))}px;
        border-bottom-right-radius : ${parseFloat(wp("6%"))}px;
        border-top-right-radius : ${parseFloat(wp("6%"))}px;
        border-top-left-radius : ${parseFloat(wp("6%"))}px;
    `,
    IconWrapper: styled.View`
        width : ${hp("12%")}px;
        height: ${hp("12%")}px;
        margin-top : ${hp("1%")}px;
        margin-bottom : ${hp("1%")}px;

    `,
    TitleWrapper: styled.Text`
        font-size : ${hp("2.5%")}px;
        font-weight : bold ; 
        color : ${props => props.theme.color.indigo};
        margin-top : ${hp("1%")};
        margin-bottom : ${hp("1%")};
    `,
    ChildrenRow: styled(GlobalStyled.CenterRow)`
        flex-direction : column;
        margin-top : ${hp("1%")};
        margin-bottom : ${hp("1%")};
    `
}

const ImageCard = (props) => {

    const { title, children, isEffect } = props

    return (
        <Styled.Body
            isEffect={isEffect}
        >
             <GlobalStyled.CenterRow >
                <Styled.IconWrapper>
                    <TodayProblem size={hp("12%")}/>
                </Styled.IconWrapper>
            </GlobalStyled.CenterRow>
            <GlobalStyled.CenterRow>
                <Styled.TitleWrapper>
                    {title}
                </Styled.TitleWrapper>
            </GlobalStyled.CenterRow>
            <Styled.ChildrenRow>
                    {children}
            </Styled.ChildrenRow> 
        </Styled.Body>
    );
};


ImageCard.defaultProps = {
    imgSrc: require('../../images/icon/today_problem.svg'),
    title: '제목',
    child: '나야',
    isEffect: true,
}

export default ImageCard;