import React from 'react';
import styled from 'styled-components/native'
import { typography, space, color, layout } from 'styled-system'
import { Text, View } from 'react-native'
import GlobalStyled from '../../style/GlobalStyled';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Styled = {
    Body: styled.View`
        display : flex;
        flex-direction : column;
        width : 100%;
        padding-top : ${parseInt(wp("2"))}px;
        padding-left : ${parseInt(wp("10"))}px;
        padding-right : ${parseInt(wp("10"))}px;
        padding-bottom : ${parseInt(wp("0"))}px;

        border-bottom-width : 0;
        border-style: solid;
        border-color: ${props => props.theme.color.lightGray};
        background-color : ${props => props.theme.color.white};
        border-bottom-left-radius : ${parseFloat(wp("10%"))}px;
        border-bottom-right-radius : ${parseFloat(wp("10%"))}px;
        border-top-right-radius : ${parseFloat(wp("0%"))}px;
        border-top-left-radius : ${parseFloat(wp("0%"))}px;
        ${typography}   
        ${space} 
        ${color}
        ${layout}
        ${props => props.css};
    `,
    Left: styled.View`
            position: absolute;
            background-color: transparent;
            bottom: -50px;
            height: 50px;
            width: ${wp("100%")}px;
            left : 300px;
            border-top-right-radius: 25px;
            box-shadow:  0 -25px 0  0 ; 
            box-shadow-color: #F66969;
    `,
    Right: styled.View`
            position: absolute;
            background-color: transparent;
            bottom: -350px;
            height: 50px;
            width: ${wp("100%")}px;
            border-top-left-radius: 25px;
            box-shadow: 0 -25px 0 0; 
            box-shadow-color: #F66969;
    `,
    Title: styled.Text`
        display : flex;
        font-size :  ${parseFloat(wp("6%"))}px;
        font-weight : bold;
        margin-bottom : 2.5px;
        color : ${props => props.theme.color.indigo};
        ${props => props.css};
    `,
    Content: styled.Text`
        font-size: ${parseFloat(wp("3%"))}px;
        color : ${props => props.theme.color.whiteBlue};
        ${props => props.css};
    `,
    PageHeaderWrapper : styled.View`
        margin-top : ${props=>props.marginTop}px
    `
}

const PageHeader = (props) => {

    const { marginTop, title, content, children, titleCss, containerCss, contentCss } = props

    return (
        <View marginTop={marginTop}>
            <Styled.Body
                {...props}
            >
                <GlobalStyled.Container
                    css={containerCss}
                >
                    <Styled.Title
                        css={titleCss}
                        theme={props.theme}
                    >
                        {title}
                    </Styled.Title>
                    <Styled.Content
                        css={contentCss}
                        theme={props.theme}
                    >
                        {content}
                    </Styled.Content>
                    <Text>{children}</Text>
                </GlobalStyled.Container>
            </Styled.Body>
        </View>
    );
};


PageHeader.defaultProps = {
    title: '제목',
    content: '매일학습입니다.'
}

export default PageHeader;