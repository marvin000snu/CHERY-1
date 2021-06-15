import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'
import theme from '../../style/theme'
const Styled = {
    Body: styled.View`
        display : flex;
        width : 100%;
        align-items: center;
        justify-content : center;
        font-size : 1rem;
        padding : 1rem 0;
        color : ${props => props.theme.color.indigo};
        background-color : ${props => props.theme.color.white};
        border-bottom : 0.5px solid ${props => props.theme.color.deepWhiteBlue};
        box-shadow : rgba(0, 0, 0, 0.18) 0px 0px 5px 0px;
        :hover {
            background-color : ${props => props.theme.color.deepWhite};
            color : ${props => props.theme.color.indigo};
        }
        :first-child {
            border-top-left-radius : 1;
            border-top-right-radius: 0;
            border-bottom-right-radius : 0; 
            border-bottom-left-radius : 1 ;
        }
        :last-child {
            border-top-left-radius : 1;
            border-top-right-radius: 0;
            border-bottom-right-radius : 0; 
            border-bottom-left-radius : 1 ;
            border-bottom : 0;
        }
        ${props => props.css};
    `
}

const CustomMenu = (props) => {

    const { info, css } = props

    const { title, onClick } = info

    return (
        <Styled.Body
            onClick={onClick}
            css={css}
            theme={theme}
        >
            <Text>
                {title}
            </Text>
        </Styled.Body>
    );
};


CustomMenu.defaultProps = {
    title: '제목',
    onClick: function () { },
}

export default CustomMenu;